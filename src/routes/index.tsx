import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { slides } from "@/presentation/slides";

export const Route = createFileRoute("/")({
  component: PresentationApp,
});

function useScale() {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const update = () => {
      const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setScale(s);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

function PresentationApp() {
  const [index, setIndex] = useState(0);
  const scale = useScale();
  const total = slides.length;

  const go = useCallback((n: number) => setIndex((i) => Math.min(total - 1, Math.max(0, typeof n === "function" ? n : n))), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); setIndex((i) => Math.min(total - 1, i + 1)); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); setIndex((i) => Math.max(0, i - 1)); }
      else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
      else if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  useEffect(() => {
    document.title = `${index + 1}/${total} — Mágikhi × Elumina IA`;
  }, [index, total]);

  const Slide = slides[index].component;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[var(--navy-deep)]">
      <div
        style={{
          position: "absolute",
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <Slide />
      </div>

      {/* Chrome */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-black/40 px-5 py-2.5 text-white/90 backdrop-blur-md">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="rounded-full px-2 py-1 text-sm hover:bg-white/10 disabled:opacity-30"
            disabled={index === 0}
            aria-label="Anterior"
          >
            ←
          </button>
          <span className="text-xs tracking-[0.2em] tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
            className="rounded-full px-2 py-1 text-sm hover:bg-white/10 disabled:opacity-30"
            disabled={index === total - 1}
            aria-label="Próximo"
          >
            →
          </button>
        </div>
        <div className="pointer-events-auto flex flex-wrap justify-end gap-1.5 max-w-[60%]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[var(--emerald)]" : "w-4 bg-white/25 hover:bg-white/50"}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
