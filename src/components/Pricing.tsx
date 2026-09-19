import { useState } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "../lib/motion";
import { TIERS } from "../data/content";
import { IconCheck } from "./Icons";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">PRICING</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
              Cheaper than the <span className="text-gradient-signal">first offer letter.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
              Flat monthly pricing. No per-seat, no per-event, no "talk to sales to see a number." Cancel with 60
              days' notice and keep everything we built.
            </p>
          </Reveal>
        </div>

        {/* billing toggle */}
        <Reveal delay={280}>
          <div className="mt-10 flex items-center justify-center">
            <div className="glass relative flex items-center rounded-full border border-white/10 p-1.5">
              {(["monthly", "annual"] as const).map((mode) => {
                const isActive = annual === (mode === "annual");
                return (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setAnnual(mode === "annual")}
                    className={cn(
                      "relative rounded-full px-5 py-2 text-[13px] font-bold capitalize transition-all duration-300",
                      isActive ? "bg-signal-400 text-ink-950" : "text-mist hover:text-fog"
                    )}
                  >
                    {mode}
                    {mode === "annual" && (
                      <span
                        className={cn(
                          "ml-2 rounded-full px-1.5 py-0.5 font-mono text-[9.5px]",
                          isActive ? "bg-ink-950/15 text-ink-950" : "bg-signal-400/15 text-signal-300"
                        )}
                      >
                        −15%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((t, i) => {
            const price = annual ? t.annual : t.monthly;
            const popular = "popular" in t && t.popular;
            return (
              <Reveal key={t.id} delay={i * 110} variant="up">
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 sm:p-8",
                    popular
                      ? "border-signal-400/45 bg-gradient-to-b from-signal-400/[0.08] to-ink-850/90 shadow-glow lg:-translate-y-3 lg:hover:-translate-y-4"
                      : "border-white/[0.09] bg-ink-850/60 hover:-translate-y-1.5 hover:border-white/[0.2]"
                  )}
                >
                  {popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-signal-400 px-4 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] text-ink-950">
                      MOST TEAMS START HERE
                    </span>
                  )}
                  <header>
                    <h3 className="font-display text-xl font-bold text-fog">{t.name}</h3>
                    <p className="mt-1.5 text-[13.5px] text-mist">{t.tagline}</p>
                  </header>
                  <div className="mt-6 flex items-end gap-2">
                    {price > 0 ? (
                      <>
                        <p
                          key={`${t.id}-${annual}`}
                          className="tick-pop font-display text-[2.6rem] font-bold leading-none tracking-tight text-fog"
                        >
                          ${price.toLocaleString()}
                        </p>
                        <span className="mb-1.5 font-mono text-[11px] text-dim">
                          / mo{annual && <span className="block text-solar-300">billed annually</span>}
                        </span>
                      </>
                    ) : (
                      <p className="font-display text-[2.2rem] font-bold leading-none tracking-tight text-fog">
                        Let's design it
                      </p>
                    )}
                  </div>
                  {price > 0 && annual && (
                    <p className="mt-2 font-mono text-[11px] text-dim">
                      ~ ${Math.round((price * 12) / 1000)}k/yr — less than{" "}
                      {t.id === "launch" ? "one" : "half the"} senior hire
                    </p>
                  )}
                  <ul className="mt-7 flex-1 space-y-3 border-t border-white/[0.08] pt-7">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13.5px] font-medium text-fog/85">
                        <IconCheck className={cn("mt-0.5 h-4 w-4 shrink-0", popular ? "text-signal-400" : "text-mist")} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={cn(
                      "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[14px] font-bold transition-all duration-300",
                      popular
                        ? "bg-signal-400 text-ink-950 hover:bg-signal-300 hover:shadow-glow"
                        : "border border-white/15 text-fog hover:border-signal-400/50 hover:bg-white/[0.04]"
                    )}
                  >
                    {t.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center font-mono text-[11px] tracking-wide text-dim">
            All plans include: senior-only squad · your cloud, your code · exit handover SLA · SOC 2 evidence pack
          </p>
        </Reveal>
      </div>
    </section>
  );
}
