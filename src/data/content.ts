export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "Economics", href: "#economics" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const LOGOS = [
  { name: "Northwind", style: "font-display font-bold tracking-tight" },
  { name: "HELIX BIO", style: "font-mono font-semibold tracking-[0.3em]" },
  { name: "Fjord & Co", style: "font-display font-semibold italic" },
  { name: "quantica", style: "font-body font-extrabold tracking-[-0.04em] lowercase" },
  { name: "MERIDIAN", style: "font-display font-medium tracking-[0.35em]" },
  { name: "stackloop", style: "font-mono font-medium tracking-tight lowercase" },
  { name: "Aster Freight", style: "font-body font-bold tracking-tight" },
  { name: "VANTIQ", style: "font-display font-bold tracking-[0.18em]" },
];

export const HERO_STATS = [
  { value: 48200, suffix: "+", label: "hours automated / month" },
  { value: 19, suffix: "B", label: "events processed daily" },
  { value: 6.4, suffix: "×", decimals: 1, label: "median first-year ROI" },
  { value: 31, suffix: "d", label: "median time to first delivery" },
];

export type Role = {
  id: string;
  title: string;
  salary: [number, number]; // kUSD range
  blurb: string;
  delivers: string[];
  icon: "pipeline" | "model" | "chart" | "bolt" | "spark";
};

export const ROLES: Role[] = [
  {
    id: "de",
    title: "Data Engineering",
    salary: [165, 210],
    blurb: "Ingestion, warehouses, streaming and quality guards — the plumbing nobody wants to babysit.",
    delivers: ["ELT & streaming pipelines", "Warehouse & lakehouse builds", "Data contracts + monitoring"],
    icon: "pipeline",
  },
  {
    id: "ae",
    title: "Analytics Engineering",
    salary: [150, 195],
    blurb: "A semantic layer your whole company can trust. One definition of revenue. Finally.",
    delivers: ["dbt-style modeled marts", "Semantic layer & metrics", "Self-serve, self-serve-ish"],
    icon: "model",
  },
  {
    id: "an",
    title: "Data Analysis",
    salary: [130, 175],
    blurb: "Dashboards that answer the Monday question before it's asked. Reports that read themselves.",
    delivers: ["KPI & exec dashboards", "Automated weekly briefs", "Anomaly alerts, not surprises"],
    icon: "chart",
  },
  {
    id: "au",
    title: "Automation Engineering",
    salary: [150, 195],
    blurb: "Every copy-paste between two tools is a bug. We delete the busywork, end to end.",
    delivers: ["Workflow & API automations", "Document + ops RPA", "Integration mesh, 50+ tools"],
    icon: "bolt",
  },
  {
    id: "ai",
    title: "Applied AI",
    salary: [190, 250],
    blurb: "LLM agents and forecasting wired into your stack — governed, evaluated, actually in production.",
    delivers: ["Internal copilots & agents", "Forecasting & scoring models", "Eval, guardrails & audit trail"],
    icon: "spark",
  },
];

export const SHOWCASE = [
  {
    id: "pipeline",
    index: "01",
    tag: "PIPELINE STUDIO",
    title: "Watch your data become decisions",
    body: "Every source, transform and destination on one living map. Failures page a human in minutes, not after the board meeting. You see the same thing our engineers see — nothing is hidden in a black box.",
    points: ["Real-time lineage", "Backfill in one click", "Quality checks on every run"],
  },
  {
    id: "metrics",
    index: "02",
    tag: "METRICS HUB",
    title: "One number everyone agrees on",
    body: "We model your KPIs once, in a semantic layer, then publish them to dashboards, Slack, email and the apps your team already opens. When finance and sales finally quote the same revenue — that's us.",
    points: ["Single source of truth", "Anomaly alerts before 9am", "Board-ready PDFs, automatically"],
  },
  {
    id: "flows",
    index: "03",
    tag: "FLOW BUILDER",
    title: "The busywork just… stops",
    body: "Quotes drafted, invoices chased, tickets triaged, leads enriched. We map your repetitive hours into flows that run themselves, with approvals and audit logs where a human should stay in the loop.",
    points: ["50+ native integrations", "Human-in-the-loop approvals", "Every action auditable"],
  },
  {
    id: "copilot",
    index: "04",
    tag: "DAAS COPILOT",
    title: "Ask your data in plain English",
    body: "A governed copilot trained on your warehouse answers 'why did churn spike in EMEA?' with the query, the chart and the caveat — so juniors move fast and seniors never babysit ad-hoc requests.",
    points: ["Row-level permissions", "Cites every table it uses", "Zero prompt leakage to clients"],
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Discover",
    weeks: "Weeks 1–2",
    body: "A working session with your ops, finance and eng leads. We map every manual hour, every stale report, every 'who actually knows the real number?' moment. You get a scored opportunity map — keep it even if we part ways.",
    detail: "Outputs: opportunity map · unit-economics model · 90-day roadmap",
  },
  {
    n: "02",
    title: "Build",
    weeks: "Weeks 3–8",
    body: "Senior engineers ship in weekly increments: pipeline first, then the metric that changes the conversation, then the first automation that deletes hours. Every Friday, a demo on your data — not a slide deck.",
    detail: "Cadence: weekly demos · shared Slack squad · full code ownership",
  },
  {
    n: "03",
    title: "Compound",
    weeks: "Ongoing",
    body: "Your system eats itself: new sources, new agents, new flows. A quarterly 'hours saved' audit keeps the ROI honest, and when you outgrow us, everything — code, docs, dashboards — is yours to keep.",
    detail: "Guarantees: exit handover SLA · quarterly ROI audit · no lock-in",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We interviewed 40 people for a data engineering role over five months. DAAS shipped our pipeline, warehouse and first three automations in the same period. I stopped writing job descriptions — I started writing roadmap.",
    name: "Mara Lindqvist",
    role: "COO, Fjord & Co",
    metric: "5 mo hiring → 6 wks shipped",
    initials: "ML",
    tint: "signal",
  },
  {
    quote:
      "Our Monday exec review used to take two people three days to prep. Now the brief is in the group chat at 8:04am with anomalies already flagged. The board asked who we hired. We told them: one team.",
    name: "Devon Okafor",
    role: "CFO, Aster Freight",
    metric: "64 hrs/mo → 3.5 hrs/mo reporting",
    initials: "DO",
    tint: "solar",
  },
  {
    quote:
      "The copilot answers 'why did this SKU underperform' faster than our analysts did — and it shows its work. My team stopped being a query farm and started actually analyzing.",
    name: "Priya Raghavan",
    role: "VP Growth, quantica",
    metric: "11 hr query cycle → 40 sec",
    initials: "PR",
    tint: "signal",
  },
  {
    quote:
      "Finance, ops and sales quote the same revenue number now. The semantic layer was the cheapest culture change we've ever bought.",
    name: "Tomás Herrera",
    role: "CEO, Vantiq",
    metric: "1 metric definition, 4 departments",
    initials: "TH",
    tint: "solar",
  },
  {
    quote:
      "We were going to hire two analysts and an engineer. Instead we run 14 automations and a forecasting model, and the invoice is less than one engineer's fully-loaded cost.",
    name: "Hana Sato",
    role: "Head of Ops, Helix Bio",
    metric: "6.2× first-year ROI",
    initials: "HS",
    tint: "signal",
  },
];

export const TIERS = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For teams drowning in spreadsheets and meetings.",
    monthly: 6900,
    annual: 5900,
    cta: "Start with Launch",
    features: [
      "1 data pipeline + warehouse home",
      "2 production dashboards",
      "3 automations, maintained",
      "Weekly exec brief, automated",
      "Shared Slack squad + 48h SLA",
      "Monthly ROI checkpoint",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "The full five-role team, minus five payrolls.",
    monthly: 14800,
    annual: 12600,
    cta: "Book Scale",
    popular: true,
    features: [
      "Everything in Launch",
      "Unlimited dashboards & marts",
      "Up to 12 active automations",
      "AI copilot + 1 custom agent",
      "Forecasting / scoring model",
      "Dedicated squad lead + 12h SLA",
      "Quarterly strategy offsite (virt.)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Embedded squad, your stack, your rules.",
    monthly: 0,
    annual: 0,
    cta: "Design your engagement",
    features: [
      "Dedicated 4–6 person squad",
      "On-prem / hybrid / air-gapped",
      "Unlimited flows & agents",
      "Security review + SOC 2 evidence",
      "Data residency configuration",
      "24/7 monitoring & 4h SLA",
      "Executive sponsorship plan",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "What exactly are we hiring — a tool, a platform, or a team?",
    a: "A senior team. DAAS is a service, not SaaS. You get named engineers, analysts and AI specialists who work inside your Slack, your cloud and your rituals. The platform you see in demos is our internal machinery — it's how we stay senior-only without charging enterprise-only prices.",
  },
  {
    q: "How is this cheaper than hiring in-house?",
    a: "A fully-loaded data engineer in most markets costs $200–270k/year including benefits, tooling and management overhead — and you'll need three to five different people. Our Scale plan covers all five disciplines for less than one senior engineer's salary, with no recruiting cycle, no ramp-up quarter, and no single point of failure when someone resigns.",
  },
  {
    q: "Who owns the code, the data models, and the dashboards?",
    a: "You do, unconditionally. Everything is built in your cloud account, in your repositories, with your CI. Our exit clause is a feature: a written handover SLA means any future in-house team inherits documentation, not archaeology.",
  },
  {
    q: "What does onboarding actually look like?",
    a: "Two weeks of discovery — working sessions with ops, finance and engineering, a map of every manual hour and every stale number. Then weekly demo cycles on your real data. Most clients see their first automation in week 3 and their first governed dashboard in week 5.",
  },
  {
    q: "Is our data safe? Where does it live?",
    a: "Your data stays in your environment — we connect to your cloud, we don't hoist it into ours. SOC 2 Type II, least-privilege access, SSO/SCIM, full audit trails, and data-residency configuration for enterprise engagements. We sign your DPA and MSA, plus NDAs before discovery starts.",
  },
  {
    q: "What happens when we outgrow you — or when something breaks?",
    a: "Breakage: SLA-backed response (48h on Launch, 12h on Scale, 4h/24-7 on Enterprise) with a named engineer, not a ticket queue. Outgrowing: the exit handover SLA kicks in — runbooks, lineage docs, and a 30-day knowledge-transfer window, at no extra charge.",
  },
  {
    q: "Can we start with just one service, like only automation?",
    a: "Yes. Many clients start with a single pipeline or a single automation to de-risk the relationship. The economics improve when the disciplines compound — data feeds the dashboard, the dashboard informs the agent — but there's no obligation to start broad.",
  },
];

export const CALC_ROLES = [
  { id: "de", label: "Data Engineer", cost: 242000 },
  { id: "ae", label: "Analytics Engineer", cost: 218000 },
  { id: "an", label: "Data Analyst", cost: 176000 },
  { id: "au", label: "Automation Engineer", cost: 214000 },
  { id: "ai", label: "AI / ML Engineer", cost: 278000 },
];

export const FOOTER_COLS = [
  {
    title: "Services",
    links: ["Data Engineering", "Analytics Engineering", "AI Automation", "Data Analysis", "Flow Automation"],
  },
  {
    title: "Company",
    links: ["About the squad", "Careers", "Case studies", "Security", "Contact"],
  },
  {
    title: "Resources",
    links: ["ROI calculator", "Data maturity quiz", "Blog", "Status", "Changelog"],
  },
];
