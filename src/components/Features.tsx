import { Reveal } from "../lib/motion";
import { ROLES } from "../data/content";
import { IconArrow, ROLE_ICONS } from "./Icons";

export function SectionHeading({
  label,
  title,
  sub,
  align = "center",
}: {
  label: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">{label}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={200}>
          <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Features() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-signal-400/30 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="THE MATH OF NOT HIRING"
          title={
            <>
              Five roles. <span className="text-gradient-signal">One contract.</span>
            </>
          }
          sub="Every one of these is a discipline you'd have to recruit, ramp and retain separately. DAAS ships all five as a single senior squad under one weekly demo."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ROLES.map((r, i) => {
            const Icon = ROLE_ICONS[r.icon];
            return (
              <Reveal
                key={r.id}
                delay={i * 90}
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/70 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-signal-400/35 hover:shadow-glow sm:p-7">
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-signal-400/[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ opacity: 0 }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-signal-300 transition-all duration-500 group-hover:border-signal-400/40 group-hover:text-signal-400">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] tracking-wider text-mist">
                      ${r.salary[0]}–{r.salary[1]}k<span className="text-dim"> /yr</span>
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-display text-xl font-bold text-fog">{r.title}</h3>
                  <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-mist">{r.blurb}</p>
                  <ul className="relative mt-5 space-y-2 border-t border-white/[0.07] pt-5">
                    {r.delivers.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-[13px] font-medium text-fog/85">
                        <svg viewBox="0 0 8 8" className="h-2 w-2 shrink-0 text-signal-400" aria-hidden="true">
                          <path d="M1 4.2l2 2L7 1.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* comparison band */}
        <Reveal delay={150}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-r from-ink-850 via-ink-900 to-ink-850">
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.07] lg:hidden" aria-hidden="true" />
            <div className="grid gap-10 px-7 py-10 sm:px-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.28em] text-dim">THE ALTERNATIVE</p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-fog sm:text-5xl">
                  ≈ $900k<span className="text-mist">+ / yr</span>
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  Five salaries before benefits, tooling, management overhead — plus 4–6 months of recruiting for the
                  first seat alone.
                </p>
              </div>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute -left-8 top-1/2 hidden h-10 w-16 -translate-y-1/2 text-signal-400/50 lg:block"
                  viewBox="0 0 64 40"
                  aria-hidden="true"
                >
                  <path d="M62 20H8M20 8L8 20l12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="font-mono text-[10.5px] tracking-[0.28em] text-signal-400">WITH DAAS</p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-signal-300 sm:text-5xl">
                  $5,900<span className="text-xl font-semibold text-mist"> / mo, all-in</span>
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  All five disciplines. One invoice. No recruiters, no org chart, no "we'll start hiring in Q3."
                </p>
                <a
                  href="#economics"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-fog transition-colors hover:text-signal-300"
                >
                  Run your own numbers
                  <IconArrow className="h-4 w-4 text-signal-400 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
