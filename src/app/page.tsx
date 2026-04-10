import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <PainPointsSection />
      <TransitionSection />
      <ModulesSection />
      <IncludedSection />
      {/* AboutSection uklonjena */}
      <TestimonialsSection />
      <ForWhoSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
