import { HeroSection } from "@/components/home/hero";
import { AboutPreviewSection } from "@/components/home/about-preview";
import { SkillsOverviewSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <SkillsOverviewSection />
      <WorkSection />
      <TestimonialsSection />
    </>
  );
}
