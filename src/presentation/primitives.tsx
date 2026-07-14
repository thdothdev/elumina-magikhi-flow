import type { ReactNode } from "react";

/* ============ Shared primitives ============ */

export function SlideFrame({
  variant = "light",
  children,
  pageNumber,
  showFooter = true,
}: {
  variant?: "light" | "dark";
  children: ReactNode;
  pageNumber?: number;
  showFooter?: boolean;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className="slide-content"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at top left, oklch(0.32 0.08 258) 0%, var(--navy-deep) 55%, oklch(0.14 0.045 258) 100%)"
          : "linear-gradient(180deg, #ffffff 0%, var(--slate-light) 100%)",
        color: isDark ? "var(--slate-light)" : "var(--navy-deep)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Corner ornaments */}
      <div
        className="absolute top-0 right-0 h-[560px] w-[560px] opacity-40"
        style={{
          background: isDark
            ? "radial-gradient(circle at 70% 30%, oklch(0.62 0.14 165 / 0.35) 0%, transparent 60%)"
            : "radial-gradient(circle at 70% 30%, oklch(0.28 0.075 258 / 0.10) 0%, transparent 65%)",
        }}
      />
      {children}
      {showFooter && (
        <SlideFooter variant={variant} pageNumber={pageNumber} />
      )}
    </div>
  );
}

export function SlideFooter({
  variant = "light",
  pageNumber,
}: {
  variant?: "light" | "dark";
  pageNumber?: number;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex items-center justify-between px-24 py-10"
      style={{ color: isDark ? "oklch(0.75 0.02 250)" : "var(--navy-soft)" }}
    >
      <div className="flex items-center gap-4">
        <EluminaMark small variant={variant} />
        <div className="slide-chrome" style={{ letterSpacing: "0.28em" }}>
          Elumina IA — Proposta Mágikhi
        </div>
      </div>
      {pageNumber !== undefined && (
        <div className="slide-page tabular-nums">{String(pageNumber).padStart(2, "0")} / 10</div>
      )}
    </div>
  );
}

export function Kicker({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="inline-block h-[2px] w-16"
        style={{ background: "var(--emerald)" }}
      />
      <span
        className="slide-kicker"
        style={{ color: variant === "dark" ? "var(--emerald-soft)" : "var(--emerald)" }}
      >
        {children}
      </span>
    </div>
  );
}

/* Conceptual logos */
export function MagikhiMark({ variant = "light" }: { variant?: "light" | "dark" }) {
  const fg = variant === "dark" ? "#F5F7FA" : "oklch(0.20 0.055 258)";
  return (
    <div className="flex items-center gap-5">
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path
          d="M36 6 L64 20 V44 C64 56 52 64 36 68 C20 64 8 56 8 44 V20 Z"
          stroke={fg}
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M22 44 L22 26 L36 40 L50 26 L50 44"
          stroke={fg}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="52" r="2.5" fill="var(--emerald)" />
      </svg>
      <div className="leading-tight">
        <div style={{ fontFamily: "var(--font-display)", fontSize: 32, letterSpacing: "-0.02em", color: fg }}>
          Mágikhi
        </div>
        <div className="slide-chrome" style={{ color: variant === "dark" ? "oklch(0.75 0.02 250)" : "var(--navy-soft)", letterSpacing: "0.3em" }}>
          Corretora de Seguros
        </div>
      </div>
    </div>
  );
}

export function EluminaMark({
  variant = "light",
  small = false,
}: {
  variant?: "light" | "dark";
  small?: boolean;
}) {
  const fg = variant === "dark" ? "#F5F7FA" : "oklch(0.20 0.055 258)";
  const s = small ? 28 : 72;
  return (
    <div className="flex items-center gap-4">
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="30" stroke={fg} strokeWidth="2.5" fill="none" />
        <circle cx="36" cy="36" r="18" stroke="var(--emerald)" strokeWidth="2.5" fill="none" opacity="0.9" />
        <circle cx="36" cy="36" r="6" fill="var(--emerald)" />
        <path d="M6 36 H14 M58 36 H66 M36 6 V14 M36 58 V66" stroke={fg} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {!small && (
        <div className="leading-tight">
          <div style={{ fontFamily: "var(--font-display)", fontSize: 32, letterSpacing: "-0.02em", color: fg }}>
            Elumina <span style={{ color: "var(--emerald)" }}>IA</span>
          </div>
          <div className="slide-chrome" style={{ color: variant === "dark" ? "oklch(0.75 0.02 250)" : "var(--navy-soft)", letterSpacing: "0.3em" }}>
            Consultoria de Tecnologia
          </div>
        </div>
      )}
    </div>
  );
}

/* Cards */
export function Card({
  children,
  variant = "light",
  className = "",
}: {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        background: isDark ? "oklch(1 0 0 / 0.05)" : "#ffffff",
        border: isDark ? "1px solid oklch(1 0 0 / 0.10)" : "1px solid oklch(0.90 0.010 250)",
        boxShadow: isDark ? "none" : "0 10px 30px -18px oklch(0.20 0.055 258 / 0.30)",
      }}
    >
      {children}
    </div>
  );
}

export function NumberedItem({
  n,
  title,
  body,
  variant = "light",
}: {
  n: string;
  title: string;
  body: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className="flex gap-8">
      <div
        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full"
        style={{
          background: "var(--emerald)",
          color: "var(--navy-deep)",
          fontFamily: "var(--font-display)",
          fontSize: 36,
          fontWeight: 600,
        }}
      >
        {n}
      </div>
      <div className="flex-1 pt-1">
        <div className="slide-body-lg font-semibold" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </div>
        <div
          className="slide-body mt-2"
          style={{ color: variant === "dark" ? "oklch(0.80 0.02 250)" : "var(--navy-soft)", maxWidth: 1400 }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}
