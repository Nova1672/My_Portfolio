import { useEffect } from 'react';

export function CursorSpotlight() {
  useEffect(() => {
    const el = document.getElementById('cursor-spotlight');
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.06), transparent 40%)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="cursor-spotlight"
      className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 md:block"
      aria-hidden
    />
  );
}
