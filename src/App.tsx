import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Proof } from "./components/Proof";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Calculator } from "./components/Calculator";
import { Steps } from "./components/Steps";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 font-body text-fog">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-signal-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink-950"
      >
        Skip to content
      </a>
      <div className="noise-layer" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <Proof />
        <Features />
        <Showcase />
        <Calculator />
        <Steps />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
