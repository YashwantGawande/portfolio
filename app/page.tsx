import SkillSection from "@/components/SkillSection";
import Background from "@/components/Background";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMeSection from "@/components/AboutMeSection";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
