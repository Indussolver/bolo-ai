import { useRef, useCallback } from "react";

// Real microphone volume via Web Audio. read() returns frequency bins or null.
export default function useMic() {
  const s = useRef({});
  const start = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const an = ctx.createAnalyser();
    an.fftSize = 128;
    an.smoothingTimeConstant = 0.7;
    ctx.createMediaStreamSource(stream).connect(an);
    s.current = { ctx, stream, an, data: new Uint8Array(an.frequencyBinCount) };
  }, []);
  const stop = useCallback(() => {
    s.current.stream?.getTracks().forEach((t) => t.stop());
    s.current.ctx?.close();
    s.current = {};
  }, []);
  const read = useCallback(() => {
    const { an, data } = s.current;
    if (!an) return null;
    an.getByteFrequencyData(data);
    return data;
  }, []);
  return { start, stop, read };
}
