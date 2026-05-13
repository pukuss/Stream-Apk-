import { useEffect, useRef } from "react";

export function useScrollBlur(maxBlur = 10, maxScroll = 500, targetRef = null) {
  const current = useRef(0);
  const target = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      target.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      // 🔥 smooth lerp (performance friendly)
      current.current += (target.current - current.current) * 0.08;

      const blur = Math.min(current.current / 30, maxBlur);
      const opacity = Math.max(1 - current.current / maxScroll, 0.3);
      const scale = 1 + current.current / 5000;

      // 🎯 optional direct DOM update (zero re-render mode)
      if (targetRef?.current) {
        targetRef.current.style.filter = `blur(${blur}px)`;
        targetRef.current.style.opacity = opacity;
        targetRef.current.style.transform = `scale(${scale})`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [maxBlur, maxScroll, targetRef]);
}