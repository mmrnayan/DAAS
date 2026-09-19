type IconProps = { className?: string };

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M12 28.5v-17h6.2a7.4 7.4 0 0 1 0 14.8h-3"
        fill="none"
        stroke="var(--color-signal-400)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M27 11.5l3.6 7.5-3.6 7.5"
        fill="none"
        stroke="var(--color-solar-400)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPipeline({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="2.5" y="4" width="6" height="6" rx="1.6" />
      <rect x="15.5" y="14" width="6" height="6" rx="1.6" />
      <path d="M8.5 7h4.2c1.5 0 2.3.8 2.3 2.3v2.9c0 1.5.8 2.3 2.3 2.3" />
      <circle cx="18.5" cy="17" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function IconModel({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 2.8l8 4.4-8 4.4-8-4.4 8-4.4z" />
      <path d="M4 12l8 4.4 8-4.4" />
      <path d="M4 16.8L12 21.2l8-4.4" />
      <circle cx="12" cy="7.2" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M3.5 3.5v15.8c0 1 .8 1.7 1.7 1.7h15.3" />
      <path d="M7.5 14.5v3" />
      <path d="M11.5 10.5v7" />
      <path d="M15.5 12.5v5" />
      <path d="M19.5 8.5v9" />
      <path d="M7.5 8.2l4-3.2 4 2.4 4.5-3.6" strokeDasharray="2.5 2.5" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M13.2 2.6L5.4 13.4h5l-1.6 8 7.8-10.8h-5l1.6-8z" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 3.5c.7 4.5 2.8 6.8 8.2 8.5-5.4 1.7-7.5 4-8.2 8.5-.7-4.5-2.8-6.8-8.2-8.5 5.4-1.7 7.5-4 8.2-8.5z" />
      <circle cx="19" cy="4.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2.2}>
      <path d="M4.5 12.8l4.6 4.6L19.5 6.6" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="M4.5 12h14" />
      <path d="M13 5.8l6.2 6.2L13 18.2" />
    </svg>
  );
}

export function IconArrowDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="M12 4.5v14" />
      <path d="M5.8 13l6.2 6.2L18.2 13" />
    </svg>
  );
}

export function IconPlus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 2.8l7.5 3v6.1c0 5-3.2 8.3-7.5 9.6-4.3-1.3-7.5-4.6-7.5-9.6V5.8l7.5-3z" />
      <path d="M8.8 12.2l2.3 2.3 4.4-4.6" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7v5.4l3.6 2" />
    </svg>
  );
}

export function IconStack({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="3" y="3.5" width="18" height="4.6" rx="1.4" />
      <rect x="3" y="9.7" width="18" height="4.6" rx="1.4" />
      <rect x="3" y="15.9" width="18" height="4.6" rx="1.4" />
      <path d="M6.4 5.8h.01M6.4 12h.01M6.4 18.2h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <circle cx="9" cy="8.2" r="3.4" />
      <path d="M3.2 20.2c.7-3.3 3-5 5.8-5s5.1 1.7 5.8 5" />
      <path d="M15.4 5.4a3.1 3.1 0 010 5.7" />
      <path d="M17.5 15.6c2 .5 3.2 1.9 3.7 4" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.8 3h3.1l-6.9 7.9L22 21h-6.4l-5-6.5L4.9 21H1.8l7.4-8.5L2 3h6.6l4.5 6 5-6zm-1.1 16.2h1.7L7.1 4.7H5.2l11.5 14.5z" />
    </svg>
  );
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.1 2.1 0 11-.02 4.2 2.1 2.1 0 01.02-4.2zM3.4 9.2h3.2V21H3.4V9.2zm5.5 0h3.1v1.6h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v7.1h-3.2v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H8.9V9.2z" />
    </svg>
  );
}

export function IconGitHub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0012 2z" />
    </svg>
  );
}

export const ROLE_ICONS = {
  pipeline: IconPipeline,
  model: IconModel,
  chart: IconChart,
  bolt: IconBolt,
  spark: IconSpark,
};
