import AboutSection from "@/components/AboutSection"
import Background from "@/components/Background"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6">
      <Background/>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}