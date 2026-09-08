/**
 * src/lib/omagel/webrtc.ts
 * WebRTC configuration and peer connection helper routines.
 */

export function getRtcConfiguration(): RTCConfiguration {
  const iceServers: RTCIceServer[] = [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:global.stun.twilio.com:3478",
      ],
    },
  ];

  if (process.env.NEXT_PUBLIC_STUN_SERVER) {
    iceServers.push({ urls: process.env.NEXT_PUBLIC_STUN_SERVER });
  }

  if (process.env.NEXT_PUBLIC_TURN_SERVER) {
    iceServers.push({
      urls: process.env.NEXT_PUBLIC_TURN_SERVER,
      username: process.env.NEXT_PUBLIC_TURN_USERNAME,
      credential: process.env.NEXT_PUBLIC_TURN_PASSWORD,
    });
  }

  return {
    iceServers,
    iceCandidatePoolSize: 4,
  };
}

export function stopMediaStream(stream: MediaStream | null) {
  if (!stream) return;
  stream.getTracks().forEach((track) => {
    try {
      track.stop();
    } catch {
      // Ignore cleanup error
    }
  });
}
