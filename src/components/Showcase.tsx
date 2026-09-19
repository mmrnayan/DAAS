import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Reveal, useInView } from "../lib/motion";
import { SHOWCASE } from "../data/content";
import { IconBolt } from "./Icons";

/* ---------- mock: pipeline map ---------- */
function PipelineMock() {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-ink-950/70 p-4">
      <svg viewBox="0 0 480 200" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="edgeg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(53,226,168,0.7)" />
            <stop offset="100%" stopColor="rgba(242,165,65,0.7)" />
          </linearGradient>
        </defs>
        {[
          { x: 90, y: 50, label: "orders.db" },
          { x: 90, y: 105, label: "crm.api" },
          { x: 90, y: 160, label: "pos.feed" },
        ].map((n) => (
          <g key={n.label}>
            <rect x={n.x - 52} y={n.y - 17} width="104" height="34" rx="8" fill="var(--color-ink-800)" stroke="rgba(147,167,187,0.25)" />
            <circle cx={n.x - 38} cy={n.y} r="3" fill="var(--color-signal-400)" />
            <text x={n.x - 28} y={n.y + 4} fill="#93a7bb" fontSize="11" fontFamily="JetBrains Mono, monospace">
              {n.label}
            </text>
          </g>
        ))}
        {[
          "M142 50 C 190 50, 190 100, 235 100",
          "M142 105 H 235",
          "M142 160 C 190 160, 190 105, 235 103",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="url(#edgeg)" strokeWidth="1.6" className="edge-flow" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
        <g>
          <rect x="235" y="78" width="112" height="46" rx="10" fill="var(--color-ink-800)" stroke="rgba(53,226,168,0.4)" />
          <text x="253" y="97" fill="#6ff0c2" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            transform
          </text>
          <text x="253" y="112" fill="#5d7288" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            14 checks · pass
          </text>
        </g>
        <path d="M347 101 H 400" fill="none" stroke="url(#edgeg)" strokeWidth="1.6" className="edge-flow" />
        <g>
          <rect x="400" y="72" width="70" height="58" rx="10" fill="rgba(242,165,65,0.08)" stroke="rgba(242,165,65,0.45)" />
          <text x="413" y="95" fill="#ffd08a" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            warehouse
          </text>
          <text x="413" y="112" fill="#5d7288" fontSize="9" fontFamily="JetBrains Mono, monospace">
            1.2M rows
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ---------- mock: metrics hub ---------- */
function MetricsMock() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });
  const bars = [38, 55, 47, 62, 58, 74, 69, 88, 82, 96];
  return (
    <div ref={ref} className="grid grid-cols-2 gap-2.5">
      {[
        { k: "MRR", v: "$2.41M", d: "▲ 6.2%" },
        { k: "CHURN", v: "2.1%", d: "▼ 0.4pt" },
        { k: "CAC PAYBACK", v: "11.3 mo", d: "▼ 1.8 mo" },
        { k: "FORECAST 30D", v: "$812k", d: "±1.8% band" },
      ].map((s) => (
        <div key={s.k} className="rounded-xl border border-white/[0.07] bg-ink-950/70 px-4 py-3">
          <p className="font-mono text-[9px] tracking-[0.2em] text-dim">{s.k}</p>
          <p className="mt-1 font-display text-lg font-bold tabular-nums text-fog">{s.v}</p>
          <p className="font-mono text-[10px] text-signal-300">{s.d}</p>
        </div>
      ))}
      <div className="col-span-2 rounded-xl border border-white/[0.07] bg-ink-950/70 px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] tracking-[0.2em] text-dim">REVENUE · LAST 10 WEEKS</p>
          <p className="font-mono text-[10px] text-mist">auto-briefed daily 08:00</p>
        </div>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-t-sm",
                i === bars.length - 1 ? "bg-solar-400" : "bg-signal-400/70",
                inView && "bar-grow"
              )}
              style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- mock: flow builder ---------- */
function FlowsMock() {
  const steps = [
    { tag: "TRIGGER", text: "New order > $5,000 lands in Shopify", tone: "signal", on: true },
    { tag: "CHECK", text: "Credit score + 12-mo history clear", tone: "mist", on: true },
    { tag: "ACTION", text: "Draft credit memo → route to Finance for sign-off", tone: "solar", on: true },
    { tag: "ACTION", text: "Log decision + timestamp to audit trail", tone: "mist", on: true },
  ];
  return (
    <ol className="space-y-0">
      {steps.map((s, i) => (
        <li key={s.tag + i} className="relative flex items-center gap-3 pb-3.5 last:pb-0">
          {i < steps.length - 1 && (
            <span className="absolute left-[13px] top-8 h-[calc(100%-20px)] w-px bg-white/10" aria-hidden="true" />
          )}
          <span
            className={cn(
              "flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md border font-mono text-[9px] font-semibold",
              s.tone === "signal" && "border-signal-400/40 bg-signal-400/10 text-signal-300",
              s.tone === "solar" && "border-solar-400/40 bg-solar-400/10 text-solar-300",
              s.tone === "mist" && "border-white/15 bg-white/[0.04] text-mist"
            )}
          >
            {i + 1}
          </span>
          <div className="flex-1 rounded-lg border border-white/[0.07] bg-ink-950/70 px-3.5 py-2.5">
            <p className="font-mono text-[8.5px] tracking-[0.2em] text-dim">{s.tag}</p>
            <p className="mt-0.5 text-[12.5px] font-medium text-fog/90">{s.text}</p>
          </div>
          <span className="relative h-4.5 w-8 shrink-0 rounded-full bg-signal-400/30" aria-hidden="true">
            <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-signal-300" />
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ---------- mock: copilot chat ---------- */
function CopilotMock() {
  return (
    <div className="space-y-3">
      <div className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm border border-white/10 bg-ink-800 px-4 py-2.5 text-[12.5px] text-fog/90">
        Why did churn spike in EMEA last month?
      </div>
      <div className="w-fit max-w-[92%] rounded-xl rounded-bl-sm border border-signal-400/25 bg-signal-400/[0.06] px-4 py-3 text-[12.5px] leading-relaxed text-fog/90">
        Churn +4.2% is concentrated in <span className="font-semibold text-signal-300">mid-tier SaaS seats</span>{" "}
        (n=212). 3 of the 5 largest accounts cite pricing after a plan change on Mar 3.
        <span className="mt-2 block font-mono text-[10px] text-dim">
          sources: churn_facts · pricing_events · cs_notes (3 tables)
        </span>
      </div>
      <div className="flex w-fit items-center gap-1.5 rounded-xl rounded-bl-sm border border-white/[0.08] bg-ink-900 px-4 py-3" aria-hidden="true">
        <span className="type-dot h-1.5 w-1.5 rounded-full bg-mist" />
        <span className="type-dot h-1.5 w-1.5 rounded-full bg-mist" />
        <span className="type-dot h-1.5 w-1.5 rounded-full bg-mist" />
      </div>
    </div>
  );
}

/* ---------- section ---------- */

const MOCKS = [PipelineMock, MetricsMock, FlowsMock, CopilotMock];

export function Showcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="platform" className="relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32">
      <div
        className="absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(53,226,168,0.07),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* sticky rail */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Reveal>
              <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">THE PLATFORM</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
                Four surfaces.
                <br />
                One <span className="text-gradient-signal">living system.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
                This isn't a portal we demo and hide. It's the exact system we run for clients — transparent,
                owned by you, and built so your team can see, tweak and trust every layer.
              </p>
            </Reveal>
            <nav aria-label="Product surfaces" className="mt-9 hidden lg:block">
              <ul className="space-y-1">
                {SHOWCASE.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#surface-${s.id}`}
                      className={cn(
                        "group flex items-center gap-4 rounded-lg px-4 py-3 transition-all duration-300",
                        active === i ? "bg-white/[0.04]" : "opacity-50 hover:opacity-90"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] transition-colors",
                          active === i ? "text-signal-300" : "text-dim"
                        )}
                      >
                        {s.index}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.18em] text-fog/80">{s.tag}</span>
                      <span
                        className={cn(
                          "ml-auto h-px w-8 bg-gradient-to-r from-signal-400 to-transparent transition-all duration-500",
                          active === i ? "w-12 opacity-100" : "w-6 opacity-30"
                        )}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Reveal delay={300} className="mt-10 hidden lg:block">
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-ink-950/60 px-5 py-4">
                <IconBolt className="h-5 w-5 shrink-0 text-solar-400" />
                <p className="text-[13px] leading-snug text-mist">
                  Median client deletes <span className="font-bold text-fog">31 hours</span> of manual work in the
                  first 90 days.
                </p>
              </div>
            </Reveal>
          </div>

          {/* surfaces */}
          <div className="space-y-6">
            {SHOWCASE.map((s, i) => {
              const Mock = MOCKS[i];
              return (
                <Reveal key={s.id} delay={80}>
                  <article
                    id={`surface-${s.id}`}
                    data-index={i}
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    className="group scroll-mt-32 rounded-2xl border border-white/[0.08] bg-ink-850/80 p-5 transition-colors duration-500 hover:border-white/[0.16] sm:p-7"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-signal-400">{s.index}</span>
                        <span className="font-mono text-[10px] tracking-[0.24em] text-mist">{s.tag}</span>
                      </div>
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="h-1.5 w-1.5 rounded-full bg-dim/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-dim/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-signal-400/70" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-fog sm:text-2xl">{s.title}</h3>
                    <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-mist">{s.body}</p>
                    <div className="mt-5">
                      <Mock />
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10.5px] text-mist"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
