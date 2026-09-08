"use client";

import React, { useRef, useEffect } from "react";
import { Mic, MicOff, Video, VideoOff, SkipForward, PhoneOff, Flag, Loader2 } from "lucide-react";
import { ChatMessage } from "@/src/lib/omagel/types";
import type { GuestProfile } from "@/src/lib/omagel/profile";
import { PeerProfile } from "./PeerProfile";

interface OmagelVideoChatProps {
  peerProfile?: GuestProfile;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  isConnecting: boolean;
  strangerDisconnected: boolean;
  isAudioMuted: boolean;
  isVideoMuted: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onNext: () => void;
  onEnd: () => void;
  onReport: () => void;
  messages: ChatMessage[];
  onSendMessage: (text: string) => Promise<void>;
  onTyping: (typing: boolean) => void;
  isStrangerTyping: boolean;
}

export const OmagelVideoChat: React.FC<OmagelVideoChatProps> = ({
  peerProfile,
  localStream,
  remoteStream,
  isConnecting,
  strangerDisconnected,
  isAudioMuted,
  isVideoMuted,
  onToggleAudio,
  onToggleVideo,
  onNext,
  onEnd,
  onReport,
  messages,
  onSendMessage,
  onTyping,
  isStrangerTyping,
}) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [inputText, setInputText] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isStrangerTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || sending || strangerDisconnected) return;
    setSending(true);
    try { await onSendMessage(inputText.trim()); setInputText(""); onTyping(false); }
    catch { /* Preserve the draft while the parent shows the error. */ }
    finally { setSending(false); }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto h-[calc(100vh-140px)] min-h-[550px]">
      {/* Video Feeds Area */}
      <div className="lg:col-span-2 flex flex-col justify-between bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 relative shadow-xl">
        {/* Remote Stranger Video View */}
        <div className="relative flex-1 bg-stone-950 flex items-center justify-center overflow-hidden">
          {remoteStream && !strangerDisconnected ? (
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6 space-y-3">
              {isConnecting ? (
                <>
                  <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
                  <p className="text-stone-300 text-sm font-medium">Connecting video feed with stranger...</p>
                </>
              ) : strangerDisconnected ? (
                <div className="space-y-3">
                  <p className="text-rose-400 text-sm font-semibold">The stranger disconnected.</p>
                  <button
                    onClick={onNext}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    Find Next Stranger
                  </button>
                </div>
              ) : (
                <p className="text-stone-400 text-xs">Waiting for stranger video stream...</p>
              )}
            </div>
          )}

          {/* Stranger Status Badge */}
          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-stone-700 text-[11px] text-stone-300 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${remoteStream && !strangerDisconnected ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
            <PeerProfile profile={peerProfile} />
          </div>

          {/* Local User Self-Preview PiP */}
          <div className="absolute bottom-4 right-4 w-32 sm:w-44 aspect-4/3 bg-stone-900 rounded-xl overflow-hidden border-2 border-stone-700 shadow-2xl">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-cover ${isVideoMuted ? "hidden" : "block"}`}
            />
            {isVideoMuted && (
              <div className="w-full h-full flex items-center justify-center bg-stone-800 text-stone-400 text-[10px]">
                Camera Off
              </div>
            )}
            <div className="absolute bottom-1.5 left-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[9px] text-white">
              You
            </div>
          </div>
        </div>

        {/* Video Call Controls Bar */}
        <div className="p-3 bg-stone-900/95 border-t border-stone-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleAudio}
              className={`p-2.5 rounded-xl border transition-colors ${
                isAudioMuted
                  ? "bg-rose-950/80 border-rose-600 text-rose-300"
                  : "bg-stone-800 border-stone-700 text-stone-200 hover:bg-stone-700"
              }`}
              title={isAudioMuted ? "Unmute Mic" : "Mute Mic"}
            >
              {isAudioMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <button
              onClick={onToggleVideo}
              className={`p-2.5 rounded-xl border transition-colors ${
                isVideoMuted
                  ? "bg-rose-950/80 border-rose-600 text-rose-300"
                  : "bg-stone-800 border-stone-700 text-stone-200 hover:bg-stone-700"
              }`}
              title={isVideoMuted ? "Turn Video On" : "Turn Video Off"}
            >
              {isVideoMuted ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onReport}
              className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 transition-colors"
              title="Report / Block"
            >
              <Flag className="w-4 h-4" />
            </button>

            <button
              onClick={onNext}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <SkipForward className="w-4 h-4" /> Next
            </button>

            <button
              onClick={onEnd}
              className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-md"
              title="End Chat"
            >
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Text Chat Sidebar */}
      <div className="flex flex-col bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-3.5 border-b border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/50 flex items-center justify-between">
          <span className="text-xs font-bold text-[#26364a] dark:text-white">Live Messages</span>
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-200 dark:bg-slate-800 text-stone-600 dark:text-slate-300 font-mono">
            {messages.length} msgs
          </span>
        </div>

        <div ref={chatScrollRef} className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
          {messages.length === 0 ? (
            <div className="text-center text-stone-400 dark:text-slate-500 py-12 text-xs">
              Say hi to your stranger!
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={`p-2.5 rounded-xl max-w-[85%] break-words ${
                  m.isSelf
                    ? "ml-auto bg-[#26364a] text-white rounded-br-xs"
                    : "mr-auto bg-stone-100 dark:bg-slate-800 text-stone-900 dark:text-slate-100 rounded-bl-xs"
                }`}
              >
                <div className="text-[10px] opacity-70 mb-0.5">{m.isSelf ? "You" : "Stranger"}</div>
                <div>{m.text}</div>
              </div>
            ))
          )}
          {isStrangerTyping && (
            <div className="text-[11px] text-stone-400 italic">Stranger is typing...</div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-2 border-t border-stone-200 dark:border-slate-800 flex gap-2">
          <input
            type="text"
            aria-label="Message to stranger"
            maxLength={500}
            disabled={sending || strangerDisconnected}
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => { setInputText(e.target.value); onTyping(!!e.target.value.trim()); }}
            className="min-w-0 flex-1 px-3 py-2 rounded-xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-xs text-stone-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#26364a] dark:focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={sending || strangerDisconnected || !inputText.trim()}
            className="px-4 py-2 bg-[#26364a] hover:bg-[#1a2533] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
