// Each language has its own wave "signature", so the orb reshapes when the language changes.
export const languages = [
  { id: "hi", label: "हिन्दी",   en: "Hindi",    line: "नमस्ते, बताइए मैं आपकी कैसे मदद करूँ?",      tr: "Hello, how can I help you?",            wave: { f: 0.55, p: 0.0, a: 0.85 } },
  { id: "ta", label: "தமிழ்",    en: "Tamil",    line: "வணக்கம், நான் எப்படி உதவலாம்?",              tr: "Hello, how may I help?",                wave: { f: 0.9,  p: 1.3, a: 0.7 } },
  { id: "bn", label: "বাংলা",    en: "Bengali",  line: "নমস্কার, আমি কীভাবে সাহায্য করতে পারি?",     tr: "Greetings, how can I assist you?",      wave: { f: 0.42, p: 2.1, a: 0.9 } },
  { id: "mr", label: "मराठी",    en: "Marathi",  line: "नमस्कार, मी तुमची कशी मदत करू?",              tr: "Hello, how can I help you?",            wave: { f: 0.7,  p: 0.6, a: 0.75 } },
  { id: "te", label: "తెలుగు",   en: "Telugu",   line: "నమస్కారం, నేను ఎలా సహాయం చేయగలను?",           tr: "Hello, how can I help?",                wave: { f: 1.05, p: 2.6, a: 0.65 } },
  { id: "gu", label: "ગુજરાતી",  en: "Gujarati", line: "નમસ્તે, હું તમને કેવી રીતે મદદ કરું?",          tr: "Hello, how can I help you?",            wave: { f: 0.62, p: 3.4, a: 0.8 } },
  { id: "kn", label: "ಕನ್ನಡ",    en: "Kannada",  line: "ನಮಸ್ಕಾರ, ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",             tr: "Hello, how may I help?",                wave: { f: 0.85, p: 4.2, a: 0.7 } },
  { id: "pa", label: "ਪੰਜਾਬੀ",   en: "Punjabi",  line: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਕਿਵੇਂ ਮਦਦ ਕਰਾਂ?",            tr: "Sat Sri Akal, how can I help?",         wave: { f: 0.5,  p: 5.0, a: 0.95 } },
];

export const BARS = 27;

// height (in %) of bar i for a given language
export function barHeight(i, { f, p, a }) {
  const env = Math.pow(Math.sin((Math.PI * i) / (BARS - 1)), 0.8);
  const w = 0.5 + 0.5 * Math.sin(i * f * 1.6 + p);
  return Math.round(10 + 90 * a * w * env);
}
