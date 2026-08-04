import { lazy, Suspense } from "react";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";

/* Lazy-load below-the-fold sections for faster initial paint */
const Integrations = lazy(() =>
  import("@/components/sections/integrations").then((m) => ({
    default: m.Integrations,
  }))
);
const Benefits = lazy(() =>
  import("@/components/sections/benefits").then((m) => ({
    default: m.Benefits,
  }))
);
const Contact = lazy(() =>
  import("@/components/sections/contact").then((m) => ({
    default: m.Contact,
  }))
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function Home() {
  return (
    <LenisProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Suspense fallback={<SectionFallback />}>
          <Integrations />
          <Benefits />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </LenisProvider>
  );
}