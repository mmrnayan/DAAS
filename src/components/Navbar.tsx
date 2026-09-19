import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV_LINKS } from "../data/content";
import { LogoMark } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-white/[0.07]" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="DAAS home">
          <LogoMark className="h-8 w-8 text-fog transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="font-display text-lg font-bold tracking-tight text-fog">
            DAAS
            <span className="ml-2 hidden font-mono text-[10px] font-medium tracking-[0.22em] text-mist sm:inline">
              DATA·AUTO·AI
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-sweep text-[13.5px] font-semibold text-mist transition-colors hover:text-fog"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="group relative hidden overflow-hidden rounded-full bg-signal-400 px-5 py-2.5 text-[13.5px] font-bold text-ink-950 transition-all duration-300 hover:bg-signal-300 hover:shadow-glow sm:inline-flex"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
              Book a discovery call
            </span>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 lg:hidden"
          >
            <span
              className={cn(
                "h-[1.5px] w-4.5 bg-fog transition-all duration-300",
                open && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span className={cn("h-[1.5px] w-4.5 bg-fog transition-all duration-300", open && "opacity-0")} />
            <span
              className={cn(
                "h-[1.5px] w-4.5 bg-fog transition-all duration-300",
                open && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-500 lg:hidden",
          open ? "max-h-[420px] border-b border-white/[0.07]" : "max-h-0"
        )}
      >
        <div className="glass px-5 pb-6 pt-2 sm:px-8">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.href}
                className={cn("border-b border-white/[0.06]", open && "tick-pop")}
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 font-display text-base font-semibold text-fog"
                >
                  {l.label}
                  <span className="font-mono text-[10px] text-dim">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center rounded-full bg-signal-400 px-5 py-3 text-sm font-bold text-ink-950"
          >
            Book a discovery call
          </a>
        </div>
      </div>
    </header>
  );
}
