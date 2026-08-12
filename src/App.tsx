import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ControlTowerSection } from "@/components/sections/control-tower-section"
import { CoreTechSection } from "@/components/sections/core-tech-section"
import { SandboxSection } from "@/components/sections/sandbox-section"
import { ResearchSection } from "@/components/sections/research-section"

export default function App() {
  return (
    <div id="top" className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ControlTowerSection />
        <CoreTechSection />
        <SandboxSection />
        <ResearchSection />
      </main>
      <SiteFooter />
    </div>
  )
}
