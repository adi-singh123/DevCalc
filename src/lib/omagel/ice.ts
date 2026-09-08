import { createHmac } from "node:crypto";
import { ChatError } from "./engine";

export function iceConfiguration(user: string): RTCConfiguration {
  const iceServers: RTCIceServer[] = [{ urls: "stun:stun.l.google.com:19302" }];
  const urls = (process.env.OMAGEL_TURN_URLS || "").split(",").map(s => s.trim()).filter(Boolean);
  const secret = process.env.OMAGEL_TURN_SECRET;
  if (urls.length && secret) {
    if (urls.some(url => !/^turns?:/.test(url))) throw new ChatError("Video configuration is unavailable. Please use Text Chat.", 503);
    // coturn REST authentication: the shared signing secret never reaches a browser.
    const username = `${Math.floor(Date.now() / 1000) + 3600}:${user.slice(0, 16)}`;
    iceServers.push({ urls, username, credential: createHmac("sha1", secret).update(username).digest("base64") });
  }
  return { iceServers };
}
