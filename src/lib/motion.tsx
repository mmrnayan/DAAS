import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ---------------- reduced motion ---------------- */

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------------- in-view ---------------- */

export function useInView<T extends HTMLElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.18, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/* ---------------- Reveal wrapper ---------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** direction variant */
  variant?: "up" | "left" | "right" | "scale";
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "figure" | "article";
  style?: CSSProperties;
  id?: string;
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  style,
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const variantClass =
    variant === "left" ? "rv-left" : variant === "right" ? "rv-right" : variant === "scale" ? "rv-scale" : "";
  return (
    <Tag
      // @ts-expect-error polymorphic ref is fine here
      ref={ref}
      id={id}
      className={cn("reveal", variantClass, inView && "is-in", className)}
      style={{ ...style, ["--rd" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- animated counter ---------------- */

function formatNumber(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

type CounterProps = {
  to: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function Counter({
  to,
  from = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(value, decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- scramble / decode text ---------------- */

const GLYPHS = "01<>/\\|=+*#$%&@ABCDEFXZ";

export function Scramble({
  text,
  className,
  speed = 26,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(text);
  const done = useRef(false);

  const run = useCallback(() => {
    if (done.current) return;
    done.current = true;
    if (reduced) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const total = text.length;
    const id = window.setInterval(() => {
      frame += 1;
      const settled = Math.floor(frame / 2.2);
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " " || ch === "." || ch === ",") return ch;
          if (i < settled) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(out);
      if (settled >= total) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, reduced]);

  useEffect(() => {
    if (inView) run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}

/* ---------------- tweened number (for calculator) ---------------- */

export function useTweenedNumber(target: number, duration = 550) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(target);
  const currentRef = useRef(target);

  useEffect(() => {
    if (reduced) {
      currentRef.current = target;
      setValue(target);
      return;
    }
    const from = currentRef.current;
    if (from === target) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (target - from) * eased;
      currentRef.current = v;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, reduced]);

  return value;
}
