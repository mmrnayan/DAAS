import { useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { Reveal, useTweenedNumber } from "../lib/motion";
import { CALC_ROLES } from "../data/content";

const fmtUSD = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export function Calculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["de", "an", "au"]));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const hireCost = useMemo(
    () => CALC_ROLES.filter((r) => selected.has(r.id)).reduce((s, r) => s + r.cost, 0),
    [selected]
  );
  const daasMonthly = 6900 + (selected.size - 1) * 3200;
  const daasAnnual = daasMonthly * 12;
  const savings = hireCost - daasAnnual;
  const savingsPct = hireCost > 0 ? Math.max(0, Math.round((savings / hireCost) * 100)) : 0;

  const hire = useTweenedNumber(hireCost);
  const daas = useTweenedNumber(daasAnnual);
  const save = useTweenedNumber(savings);

  return (
    <section id="economics" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(53,226,168,0.09),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* controls */}
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">THE ECONOMICS</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
                What would this <span className="text-gradient-signal">cost you</span> to build?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">
                Toggle the roles you're about to hire. We price them at fully-loaded US market rates — salary,
                benefits, tooling, management. Then look at the other column.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Roles you would hire">
                {CALC_ROLES.map((r) => {
                  const on = selected.has(r.id);
                  return (
                    <button
                      key={r.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(r.id)}
                      className={cn(
                        "group rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-300",
                        on
                          ? "border-signal-400/60 bg-signal-400/10 text-signal-300 shadow-glow"
                          : "border-white/12 text-mist hover:border-white/30 hover:text-fog"
                      )}
                    >
                      <span className={cn("mr-2 inline-block h-1.5 w-1.5 rounded-full transition-colors", on ? "bg-signal-400" : "bg-white/20")} />
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 font-mono text-[10.5px] leading-relaxed text-dim">
                * Fully-loaded US market medians, 2025. DAAS pricing shown for equivalent coverage — one squad,
                all tooling and monitoring included.
              </p>
            </Reveal>
          </div>

          {/* result panel */}
          <Reveal variant="right" delay={200}>
            <div className="glass relative overflow-hidden rounded-2xl border border-white/10 p-7 shadow-card sm:p-9">
              <div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-signal-400/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative space-y-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.24em] text-dim">HIRE IN-HOUSE · / YEAR</p>
                    <p className="mt-1.5 font-display text-3xl font-bold tabular-nums tracking-tight text-fog sm:text-4xl">
                      {fmtUSD(hire)}
                    </p>
                  </div>
                  <span className="mb-1 font-mono text-[10.5px] text-dim">
                    {selected.size} {selected.size === 1 ? "role" : "roles"}
                  </span>
                </div>

                <div className="h-px bg-white/[0.08]" aria-hidden="true" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.24em] text-signal-400">WITH DAAS · / YEAR</p>
                    <p className="mt-1.5 font-display text-3xl font-bold tabular-nums tracking-tight text-signal-300 sm:text-4xl">
                      {fmtUSD(daas)}
                    </p>
                  </div>
                  <span className="mb-1 font-mono text-[10.5px] text-dim">from {fmtUSD(daasMonthly)}/mo</span>
                </div>

                {/* comparison bars */}
                <div className="space-y-2.5" aria-hidden="true">
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 font-mono text-[9.5px] tracking-wider text-dim">IN-HOUSE</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-mist/60 to-mist/40" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 font-mono text-[9.5px] tracking-wider text-signal-400">DAAS</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-signal-500 to-signal-300 transition-all duration-700"
                        style={{ width: `${Math.max(8, (daasAnnual / hireCost) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-solar-400/25 bg-solar-400/[0.06] px-5 py-4">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-solar-300">YOU KEEP</p>
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
                    <p className="font-display text-3xl font-bold tabular-nums text-fog sm:text-4xl">{fmtUSD(save)}</p>
                    <p className="font-mono text-[12px] text-mist">/ year · {savingsPct}%</p>
                  </div>
                </div>

                <a
                  href="#cta"
                  className="group flex items-center justify-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-[14.5px] font-bold text-ink-950 transition-all duration-300 hover:bg-signal-300 hover:shadow-glow"
                >
                  Claim these savings
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
