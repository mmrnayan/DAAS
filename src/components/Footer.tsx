import { LogoMark, IconGitHub, IconLinkedIn, IconX } from "./Icons";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Data Engineering", href: "#services" },
      { label: "Analytics Engineering", href: "#services" },
      { label: "AI Automation", href: "#services" },
      { label: "Flow Automation", href: "#platform" },
      { label: "Data Analysis", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "The Platform", href: "#platform" },
      { label: "Pricing", href: "#pricing" },
      { label: "Results", href: "#results" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "ROI Calculator", href: "#economics" },
      { label: "How It Works", href: "#results" },
      { label: "Security", href: "#faq" },
      { label: "Book a Call", href: "#cta" },
      { label: "Careers", href: "#cta" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* brand */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="DAAS home">
              <LogoMark className="h-9 w-9 text-fog transition-transform duration-500 group-hover:rotate-[8deg]" />
              <span className="font-display text-xl font-bold tracking-tight text-fog">DAAS</span>
            </a>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-mist">
              Data Analytics and Automation Service. The senior squad that replaces the org chart you were about to
              draw.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-signal-400" />
              <span className="font-mono text-[11px] tracking-wide text-mist">
                All systems operational · 99.94%
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: IconX, label: "DAAS on X" },
                { icon: IconLinkedIn, label: "DAAS on LinkedIn" },
                { icon: IconGitHub, label: "DAAS on GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-400/50 hover:text-signal-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[10.5px] tracking-[0.28em] text-dim">{col.title.toUpperCase()}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="link-sweep text-[13.5px] font-medium text-mist transition-colors hover:text-fog"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-dim">
            © {new Date().getFullYear()} DAAS Inc. · SOC 2 Type II · Built on the pipelines we sell.
          </p>
          <div className="flex gap-6 font-mono text-[11px] text-dim">
            <a href="#top" className="transition-colors hover:text-mist">Privacy</a>
            <a href="#top" className="transition-colors hover:text-mist">Terms</a>
            <a href="#top" className="transition-colors hover:text-mist">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
