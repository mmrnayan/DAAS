import { useRef } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "../lib/motion";
import { TESTIMONIALS } from "../data/content";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section id="results-quotes" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(242,165,65,0.06),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">RESULTS</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
                The teams that <span className="text-gradient-signal">stopped hiring</span> and started shipping.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-mist transition-all duration-300 hover:border-signal-400/50 hover:text-signal-300 active:scale-95"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="More testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-mist transition-all duration-300 hover:border-signal-400/50 hover:text-signal-300 active:scale-95"
              >
                →
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div
            ref={trackRef}
            className="snap-row -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
            role="list"
            aria-label="Client testimonials"
          >
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                data-card
                role="listitem"
                className="group relative w-[88%] shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-ink-900/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.18] sm:w-[46%] sm:p-8 lg:w-[31%]"
              >
                <svg viewBox="0 0 32 24" className="h-5 w-6 text-signal-400/40 transition-colors duration-500 group-hover:text-signal-400/80" aria-hidden="true">
                  <path d="M0 24V13.6C0 5.9 4.3 1.3 12.2 0l1.6 3.4c-4.5 1.4-6.8 3.9-7.2 7.4h6.4V24H0zm19.2 0V13.6C19.2 5.9 23.5 1.3 31.4 0l1.6 3.4c-4.5 1.4-6.8 3.9-7.2 7.4H32V24H19.2z" fill="currentColor" transform="scale(0.94)" />
                </svg>
                <blockquote className="mt-5 text-[15px] leading-relaxed text-fog/90">{t.quote}</blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/[0.07] pt-5">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
                      t.tint === "signal"
                        ? "bg-gradient-to-br from-signal-500/40 to-ink-700 text-signal-200"
                        : "bg-gradient-to-br from-solar-500/40 to-ink-700 text-solar-300"
                    )}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-[15px] font-bold text-fog">{t.name}</p>
                    <p className="truncate text-[12.5px] text-mist">{t.role}</p>
                  </div>
                </figcaption>
                <p className="mt-4 inline-flex rounded-full border border-signal-400/25 bg-signal-400/[0.07] px-3.5 py-1.5 font-mono text-[10.5px] tracking-wide text-signal-300">
                  {t.metric}
                </p>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
