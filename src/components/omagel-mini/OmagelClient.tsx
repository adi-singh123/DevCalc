"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Mode, Payload, Signal, SignalKind } from "@/src/lib/omagel/engine";
import type { ChatMessage, ReportCategory } from "@/src/lib/omagel/types";
import { stopMediaStream } from "@/src/lib/omagel/webrtc";
import { AgeGateModal } from "./AgeGateModal";
import { ReportDialog } from "./ReportDialog";
import { OmagelLobby } from "./OmagelLobby";
import { OmagelTextChat } from "./OmagelTextChat";
import { OmagelVideoChat } from "./OmagelVideoChat";
import { defaultProfile, type GuestProfile } from "@/src/lib/omagel/profile";

type Match = { id: string; mode: Mode; initiator: boolean; peerProfile?: GuestProfile };
type Reply = { success: boolean; error?: string; status?: string; session?: Match | null; signals?: Signal[]; ended?: boolean; onlineUsers?: number; message?: string; rtcConfiguration?: RTCConfiguration };

export default function OmagelClient() {
  const [mode, setMode] = useState<Mode>("text");
  const [interests, setInterests] = useState("");
  const [status, setStatus] = useState<"idle" | "starting" | "queued" | "connected">("idle");
  const [ageOpen, setAgeOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [online, setOnline] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [disconnected, setDisconnected] = useState(false);
  const [local, setLocal] = useState<MediaStream | null>(null);
  const [remote, setRemote] = useState<MediaStream | null>(null);
  const [audioMuted, setAudioMuted] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const token = useRef("");
  const accepted = useRef(false);
  const profile = useRef<GuestProfile>(defaultProfile);
  const [savedProfile, setSavedProfile] = useState<GuestProfile>(defaultProfile);
  const [peerProfile, setPeerProfile] = useState<GuestProfile>(defaultProfile);
  const session = useRef<Match | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const peer = useRef<RTCPeerConnection | null>(null);
  const rtc = useRef<RTCConfiguration>({});
  const candidates = useRef<RTCIceCandidateInit[]>([]);
  const seen = useRef(new Set<string>());
  const ack = useRef<string[]>([]);
  const generation = useRef(0);
  const busy = useRef(false);
  const stopped = useRef(false);
  const pendingJoin = useRef<Promise<Reply> | null>(null);
  const lastTyping = useRef(0);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const failures = useRef(0);

  const api = useCallback(async (route: string, body: object, keepalive = false): Promise<Reply> => {
    const response = await fetch(`/api/omagel/${route}`, {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token.current}` },
      body: JSON.stringify(body), keepalive, signal: AbortSignal.timeout(15_000),
    });
    const data: Reply = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || "Unable to connect. Please try again.");
    return data;
  }, []);

  const cleanup = useCallback(() => {
    if (videoTimer.current) clearTimeout(videoTimer.current);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    if (peer.current) {
      peer.current.onicecandidate = null;
      peer.current.ontrack = null;
      peer.current.onconnectionstatechange = null;
      peer.current.close(); peer.current = null;
    }
    stopMediaStream(stream.current); stream.current = null;
    candidates.current = [];
    setLocal(null); setRemote(null); setTyping(false);
  }, []);

  const send = useCallback(async (type: SignalKind, payload: Payload, id = crypto.randomUUID(), match = session.current) => {
    if (!match || stopped.current) throw new Error("This conversation has ended.");
    await api("signal", { action: "send", id, sessionId: match.id, type, payload });
    return id;
  }, [api]);

  const markDisconnected = useCallback(() => {
    stopped.current = true;
    cleanup(); setDisconnected(true);
  }, [cleanup]);

  const connect = useCallback(async (match: Match) => {
    session.current = match;
    setPeerProfile(match.peerProfile || defaultProfile);
    stopped.current = false;
    seen.current.clear(); ack.current = []; candidates.current = [];
    setDisconnected(false); setMessages([]); setTyping(false);
    if (match.mode === "video") {
      const pc = new RTCPeerConnection(rtc.current);
      peer.current = pc;
      stream.current?.getTracks().forEach(track => pc.addTrack(track, stream.current!));
      pc.ontrack = event => { if (peer.current === pc) setRemote(event.streams[0] || new MediaStream([event.track])); };
      pc.onicecandidate = event => {
        if (event.candidate && peer.current === pc) void send("ice-candidate", event.candidate.toJSON(), crypto.randomUUID(), match).catch(e => setError(e.message));
      };
      pc.onconnectionstatechange = () => {
        if (peer.current !== pc) return;
        if (pc.connectionState === "connected" && videoTimer.current) clearTimeout(videoTimer.current);
        if (pc.connectionState === "failed") { setError("Video could not connect on this network. Try text chat or another network."); markDisconnected(); }
      };
      videoTimer.current = setTimeout(() => {
        if (peer.current === pc && pc.connectionState !== "connected") { setError("Video connection timed out. Try text chat or a different network."); markDisconnected(); }
      }, 30_000);
      setStatus("connected");
      if (match.initiator) {
        const offer = await pc.createOffer();
        if (peer.current !== pc) return;
        await pc.setLocalDescription(offer);
        await send("offer", { type: offer.type, sdp: offer.sdp }, crypto.randomUUID(), match);
      }
    } else setStatus("connected");
  }, [send, markDisconnected]);

  const incoming = useCallback(async (signals: Signal[]) => {
    for (const signal of signals) {
      if (signal.sessionId !== session.current?.id) continue;
      if (seen.current.has(signal.id)) { ack.current.push(signal.id); continue; }
      const pc = peer.current;
      if (signal.type === "leave") markDisconnected();
      else if (!stopped.current) {
        if (signal.type === "chat-message") {
          setMessages(items => [...items.slice(-199), { id: signal.id, sessionId: signal.sessionId, senderId: "stranger", isSelf: false, text: signal.payload.text || "", timestamp: signal.timestamp }]);
          setTyping(false);
        } else if (signal.type === "typing") {
          setTyping(!!signal.payload.isTyping);
          if (typingTimer.current) clearTimeout(typingTimer.current);
          typingTimer.current = setTimeout(() => setTyping(false), 2500);
        } else if (signal.type === "ice-candidate" && pc) {
          if (!pc.remoteDescription) candidates.current.push(signal.payload);
          else await pc.addIceCandidate(signal.payload);
        } else if ((signal.type === "offer" || signal.type === "answer") && pc) {
          await pc.setRemoteDescription({ type: signal.type, sdp: signal.payload.sdp });
          for (const candidate of candidates.current.splice(0)) await pc.addIceCandidate(candidate);
          if (signal.type === "offer") {
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            await send("answer", { type: answer.type, sdp: answer.sdp });
          }
        }
      }
      seen.current.add(signal.id); ack.current.push(signal.id);
      if (seen.current.size > 512) seen.current.delete(seen.current.values().next().value!);
    }
  }, [markDisconnected, send]);

  useEffect(() => {
    if ((status !== "queued" && status !== "connected") || disconnected) return;
    let disposed = false;
    let timer: ReturnType<typeof setTimeout>;
    const current = generation.current;
    async function poll() {
      try {
        if (status === "queued") {
          const data = await api("queue", { action: "status" });
          if (disposed || generation.current !== current) return;
          setOnline(data.onlineUsers || 0);
          if (data.session) await connect(data.session);
          else if (data.status === "idle") { cleanup(); setStatus("idle"); setError("Your queue expired. Please start again."); }
        } else if (session.current) {
          const ids = ack.current.splice(0, 128);
          let data: Reply;
          try { data = await api("signal", { action: "poll", sessionId: session.current.id, ack: ids }); }
          catch (e) { ack.current.unshift(...ids); throw e; }
          if (disposed || generation.current !== current) return;
          await incoming(data.signals || []);
          if (data.ended) markDisconnected();
        }
        failures.current = 0;
      } catch (e) {
        if (disposed || generation.current !== current) return;
        failures.current++;
        setError(e instanceof Error ? e.message : "Connection interrupted. Retrying…");
        if (failures.current >= 3) { cleanup(); setStatus("idle"); void api("queue", { action: "leave" }).catch(() => {}); }
      }
      if (!disposed) timer = setTimeout(poll, 1000);
    }
    timer = setTimeout(poll, 500);
    return () => { disposed = true; clearTimeout(timer); };
  }, [status, disconnected, api, connect, incoming, markDisconnected, cleanup]);

  // Poll live online users in real-time when in the lobby (idle)
  useEffect(() => {
    if (status !== "idle") return;
    let disposed = false;
    const fetchLiveUsers = async () => {
      try {
        const res = await fetch("/api/omagel/queue");
        const data = await res.json();
        if (!disposed && typeof data?.onlineUsers === "number") {
          setOnline(data.onlineUsers);
        }
      } catch {}
    };
    fetchLiveUsers();
    const interval = setInterval(fetchLiveUsers, 4000);
    return () => { disposed = true; clearInterval(interval); };
  }, [status]);

  useEffect(() => {
    const exit = () => {
      generation.current++;
      stopped.current = true;
      stopMediaStream(stream.current); peer.current?.close();
      if (token.current) void api("queue", { action: "leave", sessionId: session.current?.id }, true).catch(() => {});
      if (videoTimer.current) clearTimeout(videoTimer.current);
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
    const restore = (event: PageTransitionEvent) => { if (event.persisted) window.location.reload(); };
    window.addEventListener("pagehide", exit);
    window.addEventListener("pageshow", restore);
    return () => { window.removeEventListener("pagehide", exit); window.removeEventListener("pageshow", restore); exit(); };
  }, [api]);

  async function start() {
    if (busy.current) return;
    if (!accepted.current) { setAgeOpen(true); return; }
    busy.current = true;
    const current = ++generation.current;
    setStatus("starting"); setError(""); setNotice(""); setDisconnected(false); stopped.current = false; failures.current = 0;
    try {
      const tags = interests.split(",").map(s => s.trim()).filter(Boolean);
      if (tags.length > 5 || tags.some(s => s.length > 30)) throw new Error("Use up to five interests, each at most 30 characters.");
      if (!token.current) {
        token.current = sessionStorage.getItem("omagel_token_v2") || Array.from(crypto.getRandomValues(new Uint8Array(32)), n => n.toString(16).padStart(2, "0")).join("");
        sessionStorage.setItem("omagel_token_v2", token.current);
      }
      if (mode === "video") {
        const config = await api("queue", { action: "ice" });
        if (current !== generation.current) return;
        rtc.current = config.rtcConfiguration || {};
        if (!navigator.mediaDevices?.getUserMedia) throw new Error("Video needs HTTPS and camera support. Please use text chat.");
        const media = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (current !== generation.current) { stopMediaStream(media); return; }
        stream.current = media; setLocal(media); setAudioMuted(false); setVideoMuted(false);
      }
      pendingJoin.current = api("queue", { action: "join", mode, interests: tags, acceptedAge: true, profile: profile.current });
      const data = await pendingJoin.current;
      if (current !== generation.current) return;
      setOnline(data.onlineUsers || 0);
      if (data.session) await connect(data.session); else setStatus("queued");
    } catch (e) {
      if (current === generation.current) {
        cleanup(); setStatus("idle");
        setError(e instanceof Error ? (e.name === "NotAllowedError" ? "Camera or microphone permission was denied. Allow access or choose Text Chat." : e.message) : "Unable to start chat.");
      }
    } finally { pendingJoin.current = null; if (current === generation.current) busy.current = false; }
  }

  async function end() {
    generation.current++;
    stopped.current = true;
    cleanup(); setStatus("idle"); setDisconnected(false); setMessages([]);
    const match = session.current; session.current = null;
    busy.current = true;
    try {
      // Ensure cancellation reaches the server after an in-flight join settles.
      await pendingJoin.current?.catch(() => {});
      if (token.current) await api("queue", { action: "leave", sessionId: match?.id });
    } catch { setError("Disconnected locally. The server will remove an unreachable session within 45 seconds."); }
    finally { busy.current = false; }
  }
  async function next() { if (busy.current) return; await end(); await start(); }
  function toggle(kind: "audio" | "video") {
    const tracks = kind === "audio" ? stream.current?.getAudioTracks() : stream.current?.getVideoTracks();
    tracks?.forEach(track => { track.enabled = !track.enabled; });
    if (kind === "audio") setAudioMuted(value => !value); else setVideoMuted(value => !value);
  }
  async function sendMessage(text: string) {
    const match = session.current;
    if (!match || stopped.current) return;
    const id = crypto.randomUUID();
    try {
      await send("chat-message", { text }, id, match);
      if (session.current?.id !== match.id || stopped.current) return;
      setMessages(items => [...items.slice(-199), { id, sessionId: match.id, senderId: "you", isSelf: true, text, timestamp: Date.now() }]);
      setError("");
    } catch (e) { setError(e instanceof Error ? `Message not sent: ${e.message}` : "Message not sent. Please retry."); throw e; }
  }
  function typingChanged(isTyping: boolean) {
    if (!session.current || stopped.current || (isTyping && Date.now() - lastTyping.current < 1500)) return;
    lastTyping.current = Date.now();
    void send("typing", { isTyping }).catch(() => {});
  }
  async function report(category: ReportCategory, details: string) {
    const match = session.current;
    if (!match) return;
    const data = await api("report", { sessionId: match.id, category, details });
    markDisconnected(); setReportOpen(false); setNotice(data.message || "Report saved.");
  }
  return <section aria-label="Chat controls" className="mx-auto max-w-6xl px-4 py-6">
    {ageOpen && <AgeGateModal initialProfile={savedProfile} onClose={() => setAgeOpen(false)} onAccept={value => { profile.current = value; setSavedProfile(value); accepted.current = true; setAgeOpen(false); void start(); }} />}
    <ReportDialog isOpen={reportOpen} onClose={() => setReportOpen(false)} onSubmit={report} />
    {error && <p role="alert" className="mx-auto mb-4 max-w-3xl rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">{error}</p>}
    {notice && <p role="status" className="mx-auto mb-4 max-w-3xl rounded-xl bg-emerald-50 p-4 text-sm">{notice}</p>}
    {status === "idle" && <OmagelLobby mode={mode} onSelectMode={setMode} interests={interests} onInterestsChange={setInterests} onStartChat={() => { if (!busy.current) setAgeOpen(true); }} onlineCount={online} />}
    {(status === "starting" || status === "queued") && <div className="mx-auto max-w-md rounded-2xl border bg-white p-8 text-center">
      <h2 className="text-xl font-bold" role="status">{status === "starting" ? "Preparing your chat…" : "Looking for a stranger…"}</h2>
      <p className="my-4">{status === "starting" ? "For video, allow camera and microphone access when prompted." : "Another person must be waiting in the same chat mode. You can cancel at any time."}</p>
      <button onClick={() => void end()} className="rounded-lg border px-6 py-3">Cancel Queue</button>
    </div>}
    {status === "connected" && mode === "text" && <OmagelTextChat peerProfile={peerProfile} messages={messages} onSendMessage={sendMessage} onTyping={typingChanged} onNext={() => void next()} onEnd={() => void end()} onReport={() => setReportOpen(true)} isStrangerTyping={typing} strangerDisconnected={disconnected} />}
    {status === "connected" && mode === "video" && <OmagelVideoChat peerProfile={peerProfile} localStream={local} remoteStream={remote} isConnecting={!remote && !disconnected} strangerDisconnected={disconnected} isAudioMuted={audioMuted} isVideoMuted={videoMuted} onToggleAudio={() => toggle("audio")} onToggleVideo={() => toggle("video")} onNext={() => void next()} onEnd={() => void end()} onReport={() => setReportOpen(true)} messages={messages} onSendMessage={sendMessage} onTyping={typingChanged} isStrangerTyping={typing} />}
  </section>;
}
