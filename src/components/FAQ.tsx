import { useState } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "../lib/motion";
import { FAQS } from "../data/content";
import { IconPlus } from "./Icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-signal-400">STRAIGHT ANSWERS</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-fog sm:text-[2.6rem] sm:leading-[1.12]">
              Asked by every CFO, <span className="text-gradient-signal">answered by us.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={Math.min(i * 60, 300)}>
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border transition-colors duration-400",
                    isOpen ? "border-signal-400/30 bg-ink-850/80" : "border-white/[0.08] bg-ink-900/50 hover:border-white/[0.16]"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >
                      <span className="font-display text-[15.5px] font-semibold text-fog sm:text-base">{f.q}</span>
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                          isOpen
                            ? "rotate-45 border-signal-400/50 bg-signal-400/10 text-signal-300"
                            : "border-white/15 text-mist"
                        )}
                        aria-hidden="true"
                      >
                        <IconPlus className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={cn("acc-panel", isOpen && "open")}
                  >
                    <div>
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-mist">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
