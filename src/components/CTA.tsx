import { useState, type FormEvent } from "react";
import { Reveal, Scramble } from "../lib/motion";
import { IconArrow, IconCheck } from "./Icons";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError("That email doesn't look right — try again.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      {/* ambient background */}
      <img
        src="/images/cta-landscape.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" aria-hidden="true" />
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-signal-400/30 bg-signal-400/[0.06] px-4 py-1.5 font-mono text-[10.5px] tracking-[0.24em] text-signal-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal-400" />
            <Scramble text="DISCOVERY CALLS · 3 SLOTS LEFT THIS MONTH" />
          </p>
        </Reveal>

        <h2 className="font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-fog sm:text-6xl">
          <Reveal as="span" className="mask-line">
            <span>Your data is already</span>
          </Reveal>
          <Reveal as="span" delay={140} className="mask-line">
            <span>producing value.</span>
          </Reveal>
          <Reveal as="span" delay={280} className="mask-line">
            <span className="text-gradient-signal">We make it act.</span>
          </Reveal>
        </h2>

        <Reveal delay={400}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            One 45-minute call. We'll map your most expensive manual hours and show you the first automation you'd
            run — free, no deck, on your numbers.
          </p>
        </Reveal>

        <Reveal delay={520}>
          {sent ? (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-signal-400/35 bg-signal-400/[0.07] px-7 py-6">
              <p className="flex items-center justify-center gap-2.5 font-display text-lg font-bold text-signal-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-signal-400 text-ink-950">
                  <IconCheck className="h-4 w-4" />
                </span>
                You're on the list.
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-mist">
                A senior (not a sales) engineer will reply within one business day with a time that works.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mx-auto mt-10 max-w-xl">
              <div className="glass flex flex-col gap-2.5 rounded-2xl border border-white/10 p-2.5 shadow-card sm:flex-row sm:rounded-full">
                <label htmlFor="cta-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="you@company.com"
                  aria-invalid={!!error}
                  aria-describedby={error ? "cta-email-error" : undefined}
                  className="w-full flex-1 rounded-full bg-transparent px-5 py-3 text-[15px] text-fog placeholder:text-dim focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal-400 px-7 py-3.5 text-[14.5px] font-bold text-ink-950 transition-all duration-300 hover:bg-signal-300 hover:shadow-glow"
                >
                  Book my call
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              {error && (
                <p id="cta-email-error" role="alert" className="mt-3 font-mono text-[12px] text-error-400">
                  {error}
                </p>
              )}
              <p className="mt-4 font-mono text-[10.5px] tracking-wide text-dim">
                No spam, no drip sequence. One human reply, with your opportunity map attached.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
