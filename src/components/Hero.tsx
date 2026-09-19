import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Counter, Reveal, Scramble, useInView, usePrefersReducedMotion } from "../lib/motion";
import { HERO_STATS } from "../data/content";
import { IconArrow, IconArrowDown, IconBolt } from "./Icons";

/* ------------------- live ops console ------------------- */

type LogLine = { id: number; tag: string; text: string; tone: "ok" | "info" | "ai" };

const LOG_POOL: Omit<LogLine, "id">[] = [
  { tag: "PIPE", text: "orders.delta → warehouse · 48,204 rows", tone: "ok" },
  { tag: "FLOW", text: "invoice-chase: 31 reminders sent in 18m", tone: "info" },
  { tag: "AI", text: "anomaly: churn +4.2% EMEA · brief drafted", tone: "ai" },
  { tag: "PIPE", text: "crm.merge completed · 0 conflicts", tone: "ok" },
  { tag: "FLOW", text: "lead-enrich: 126 records scored", tone: "info" },
  { tag: "AI", text: "forecast: Q3 revenue band widened 1.8%", tone: "ai" },
  { tag: "PIPE", text: "quality gate passed · 14/14 checks", tone: "ok" },
  { tag: "FLOW", text: "ticket-triage: 9 tickets auto-routed", tone: "info" },
  { tag: "AI", text: "copilot answer cited 3 tables · 4.1s", tone: "ai" },
  { tag: "PIPE", text: "backfill 2024-Q4 replayed · 11m 42s", tone: "info" },
];

const SPARK = "0,42 14,38 28,40 42,31 56,33 70,25 84,27 98,19 112,21 126,14 140,16 154,9 168,12 182,5";

function OpsConsole() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [logs, setLogs] = useState<LogLine[]>(LOG_POOL.slice(0, 5).map((l, i) => ({ ...l, id: i })));
  const [events, setEvents] = useState(42318);
  const [latency, setLatency] = useState(312);
  const nextId = useRef(100);
  const poolIdx = useRef(5);

  useEffect(() => {
    if (reduced || !inView) return;
    const id = window.setInterval(() => {
      const next = LOG_POOL[poolIdx.current % LOG_POOL.length];
      poolIdx.current += 1;
      setLogs((prev) => [...prev.slice(-4), { ...next, id: nextId.current++ }]);
      setEvents((e) => Math.max(38000, e + Math.round((Math.random() - 0.42) * 900)));
      setLatency(() => 280 + Math.round(Math.random() * 90));
    }, 2100);
    return () => window.clearInterval(id);
  }, [reduced, inView]);

  return (
    <div ref={ref} className="relative" aria-hidden="true">
      {/* glow behind */}
      <div className="absolute -inset-8 rounded-[32px] bg-signal-500/10 blur-3xl" />

      <div className="glass relative overflow-hidden rounded-2xl border border-white/10 shadow-card">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-error-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-solar-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-400/80" />
          </div>
          <span className="font-mono text-[11px] tracking-[0.14em] text-mist">daas://live-ops</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-signal-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal-400" />
            LIVE
          </span>
        </div>

        {/* scanline */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="scanline absolute left-0 h-16 w-full bg-gradient-to-b from-transparent via-signal-400/[0.045] to-transparent" />
        </div>

        {/* pipeline row */}
        <div className="px-5 pt-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.22em] text-dim">PIPELINE · prod-us-east</span>
            <span className="font-mono text-[10px] text-signal-300">● healthy</span>
          </div>
          <div className="relative">
            <svg className="absolute left-0 top-[13px] h-[26px] w-full" preserveAspectRatio="none" viewBox="0 0 320 26">
              <path d="M10 13 H310" stroke="rgba(147,167,187,0.25)" strokeWidth="1.5" className="edge-flow" />
            </svg>
            <div className="relative grid grid-cols-4">
              {["INGEST", "MODEL", "AUTO", "ACT"].map((n, i) => (
                <div key={n} className="flex flex-col items-center gap-1.5">
                  <span
                    className={cn(
                      "z-10 flex h-[26px] items-center justify-center rounded-md border px-2 font-mono text-[9.5px] tracking-wider",
                      i === 3
                        ? "border-solar-400/50 bg-solar-400/10 text-solar-300"
                        : "border-signal-400/40 bg-ink-800 text-signal-300"
                    )}
                  >
                    {n}
                  </span>
                  <span className="hidden font-mono text-[9px] text-dim sm:block">
                    {["1.2M evt", "312 ms", "96 runs", "74 acts"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* kpi row */}
        <div className="mt-5 grid grid-cols-3 gap-2.5 px-5">
          <div className="rounded-lg border border-white/[0.07] bg-ink-900/60 px-3 py-2.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-dim">EVENTS / MIN</p>
            <p key={events} className="tick-pop font-display text-lg font-bold tabular-nums text-fog">
              {events.toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.07] bg-ink-900/60 px-3 py-2.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-dim">P95 LATENCY</p>
            <p key={latency} className="tick-pop font-display text-lg font-bold tabular-nums text-signal-300">
              {latency}
              <span className="ml-0.5 text-[11px] font-medium text-mist">ms</span>
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.07] bg-ink-900/60 px-3 py-2.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-dim">RUN SUCCESS</p>
            <p className="font-display text-lg font-bold text-solar-300">
              99.94<span className="ml-0.5 text-[11px] font-medium text-mist">%</span>
            </p>
          </div>
        </div>

        {/* sparkline */}
        <div className="mt-4 px-5">
          <div className="rounded-lg border border-white/[0.07] bg-ink-900/60 p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.18em] text-dim">DECISIONS SHIPPED / DAY</span>
              <span className="font-mono text-[10px] text-signal-300">▲ +18.2%</span>
            </div>
            <svg viewBox="0 0 182 44" className="h-11 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(53,226,168,0.28)" />
                  <stop offset="100%" stopColor="rgba(53,226,168,0)" />
                </linearGradient>
              </defs>
              <polygon points={`0,44 ${SPARK} 182,44`} fill="url(#sparkfill)" />
              <polyline
                points={SPARK}
                fill="none"
                stroke="var(--color-signal-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("draw-line", reduced && "!animate-none")}
                style={{ ["--dash-len" as string]: 460 }}
              />
              <circle cx="182" cy="5" r="3" fill="var(--color-signal-400)" className="pulse-dot" />
            </svg>
          </div>
        </div>

        {/* log stream */}
        <div className="mt-4 h-[118px] overflow-hidden border-t border-white/[0.07] bg-ink-950/60 px-5 py-3">
          <p className="mb-2 font-mono text-[9px] tracking-[0.22em] text-dim">STREAM · last 5 events</p>
          <ul className="space-y-1.5">
            {logs.map((l) => (
              <li key={l.id} className="log-in flex items-baseline gap-2 font-mono text-[10.5px] leading-relaxed">
                <span
                  className={cn(
                    "shrink-0 rounded-sm px-1 text-center text-[9px] font-semibold",
                    l.tone === "ok" && "bg-signal-400/15 text-signal-300",
                    l.tone === "info" && "bg-white/[0.07] text-mist",
                    l.tone === "ai" && "bg-solar-400/15 text-solar-300"
                  )}
                >
                  {l.tag}
                </span>
                <span className="truncate text-mist/90">{l.text}</span>
              </li>
            ))}
          </ul>
          <span className="caret font-mono text-[11px] text-signal-400">▍</span>
        </div>
      </div>

      {/* floating chips */}
      <div className="float-slow absolute -right-3 -top-6 hidden rounded-xl border border-signal-400/30 bg-ink-850/90 px-3.5 py-2.5 shadow-card backdrop-blur md:block">
        <p className="font-mono text-[9px] tracking-[0.18em] text-dim">HOURS AUTOMATED</p>
        <p className="font-display text-base font-bold text-signal-300">48,200 / mo</p>
      </div>
      <div className="float-slower absolute -bottom-7 -left-4 hidden rounded-xl border border-solar-400/30 bg-ink-850/90 px-3.5 py-2.5 shadow-card backdrop-blur md:block">
        <p className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.18em] text-dim">
          <IconBolt className="h-3 w-3 text-solar-400" /> FLOW
        </p>
        <p className="font-display text-base font-bold text-fog">
          14 <span className="text-xs font-semibold text-mist">active automations</span>
        </p>
      </div>
    </div>
  );
}

/* ------------------- hero ------------------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* ambient background */}
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="glow-drift absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(53,226,168,0.14),transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(242,165,65,0.08),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <div>
            <Reveal delay={0}>
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10.5px] tracking-[0.22em] text-mist">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal-400" />
                <Scramble text="ONE TEAM · FIVE DISCIPLINES · ZERO HEADHUNTERS" />
              </p>
            </Reveal>

            <h1 className="font-display text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-fog sm:text-6xl lg:text-[4.3rem]">
              <Reveal as="span" delay={80} className="mask-line">
                <span>Stop hiring five.</span>
              </Reveal>
              <Reveal as="span" delay={200} className="mask-line">
                <span>Start shipping with</span>
              </Reveal>
              <Reveal as="span" delay={320} className="mask-line">
                <span className="text-gradient-signal">one team.</span>
              </Reveal>
            </h1>

            <Reveal delay={460}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                DAAS embeds senior <strong className="font-semibold text-fog">data engineers, analysts, automation and AI
                specialists</strong> directly into your business — building the pipelines, dashboards and autonomous
                workflows that replace the stack of hires you were about to make.
              </p>
            </Reveal>

            <Reveal delay={580}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#cta"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-signal-400 px-7 py-3.5 text-[15px] font-bold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-300 hover:shadow-glow"
                >
                  Book a discovery call
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#platform"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-semibold text-fog transition-all duration-300 hover:border-signal-400/50 hover:bg-white/[0.04]"
                >
                  See it in action
                  <IconArrowDown className="h-4 w-4 text-signal-400 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={700}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wide text-dim">
                {["Senior-only engineers", "Live in 4 weeks", "No lock-in, code is yours"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span className="text-signal-400">✓</span> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* console */}
          <Reveal variant="right" delay={240}>
            <OpsConsole />
          </Reveal>
        </div>

        {/* stats strip */}
        <Reveal delay={120}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] lg:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div
                key={s.label}
                className="group relative bg-ink-900/90 px-6 py-6 transition-colors duration-300 hover:bg-ink-800/80"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-signal-400 transition-all duration-500 group-hover:w-full" />
                <dt className="order-2 mt-2 font-mono text-[10.5px] tracking-[0.16em] text-dim">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tabular-nums text-fog sm:text-[2.1rem]">
                  <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
