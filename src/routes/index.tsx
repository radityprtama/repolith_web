import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/sections/contact/contact";
import Footer from "@/sections/footer/footer";
import Features from "@/sections/landing/features";
import FinalCta from "@/sections/landing/final-cta";
import LandingHero from "@/sections/landing/hero";
import HowItWorks from "@/sections/landing/how-it-works";
import PricingPreview from "@/sections/landing/pricing-preview";
import ProblemSolution from "@/sections/landing/problem-solution";
import ProductDemo from "@/sections/landing/product-demo";
import SocialProof from "@/sections/landing/social-proof";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-start md:border-x border-border divide-y divide-border/80">
      <LandingHero />
      <ProductDemo />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <SocialProof />
      <PricingPreview />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}
