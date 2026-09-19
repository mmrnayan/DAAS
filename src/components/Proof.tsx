import { LOGOS } from "../data/content";

export function Proof() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
      role={ariaHidden ? "presentation" : undefined}
    >
      {LOGOS.map((l, i) => (
        <li
          key={l.name + i}
          className="flex items-center gap-3 whitespace-nowrap px-9 text-[15px] text-mist/70 transition-colors duration-300 hover:text-fog sm:px-12"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-dim" aria-hidden="true">
            <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8" cy="8" r="2.2" fill="currentColor" />
          </svg>
          <span className={l.style}>{l.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Clients" className="relative border-y border-white/[0.06] bg-ink-900/40 py-10">
      <p className="mb-7 text-center font-mono text-[10.5px] tracking-[0.3em] text-dim">
        RUNNING IN PRODUCTION AT · 200+ TEAMS
      </p>
      <div
        className="marquee-hover relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
