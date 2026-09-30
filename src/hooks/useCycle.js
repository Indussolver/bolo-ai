import { useEffect, useState } from "react";

// Auto-advances; any manual pick restarts the timer.
export default function useCycle(length, ms = 3600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % length), ms);
    return () => clearTimeout(t);
  }, [i, length, ms]);
  return [i, setI];
}
