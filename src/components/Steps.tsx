import { Reveal } from "../lib/motion";
import { STEPS } from "../data/content";
import { IconShield, IconClock, IconStack } from "./Icons";

const GUARANTEES = [
  {
    icon: IconStack,
    title: "You own everything",
    body: "Code, models, dashboards — built in your cloud, your repos, your CI. Walk away any time with a documented handover.",
  },
  {
    icon: IconClock,
    title: "SLAs, not promises",
    body: "Contractual response times on every plan, from 48h on Launch to 4h/24-7 on Enterprise. Missed twice, credits applied.",
  },
  {
    icon: IconShield,
    title: "Boring-security",
    body: "SOC 2 Type II, SSO/SCIM, least-privilege access, full audit trails. Your data never leaves your environment.",
  },
];

export function Steps() {
  return (
    <section id="results" className="relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">HOW IT COMPOUNDS</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
              From "we need data people" to{" "}
              <span className="text-gradient-signal">"the system runs it"</span> in three moves.
            </h2>
          </Reveal>
        </div>

        <ol className="relative space-y-10 lg:space-y-0">
          <div className="absolute bottom-6 left-[27px] top-6 hidden w-px bg-gradient-to-b from-signal-400/50 via-white/10 to-solar-400/40 lg:block" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} as="li" variant={i % 2 === 0 ? "left" : "right"} delay={i * 120} className="relative">
              <div
                className={`group flex gap-6 lg:w-[calc(50%-2rem)] ${
                  i % 2 === 1 ? "lg:ml-auto" : ""
                }`}
              >
                <span
                  className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-signal-400/30 bg-ink-950 font-mono text-sm font-semibold text-signal-300 transition-all duration-500 group-hover:scale-110 group-hover:border-signal-400/60 group-hover:shadow-glow lg:flex"
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-ink-850/80 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.16] sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-fog">
                      <span className="mr-2 font-mono text-sm text-signal-400 lg:hidden">{s.n}</span>
                      {s.title}
                    </h3>
                    <span className="rounded-full border border-solar-400/30 bg-solar-400/[0.07] px-3 py-1 font-mono text-[10.5px] text-solar-300">
                      {s.weeks}
                    </span>
                  </div>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-mist">{s.body}</p>
                  <p className="mt-4 border-t border-white/[0.07] pt-4 font-mono text-[11px] tracking-wide text-dim">
                    {s.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* guarantees */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6 transition-all duration-500 hover:border-signal-400/30 hover:bg-ink-850/60">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-signal-300 transition-colors duration-500 group-hover:text-signal-400">
                  <g.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-fog">{g.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
