import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import PositionsSection from "@/components/positions-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatedBackground />
      <CustomCursor />
      <main className="min-h-screen bg-background/80 backdrop-blur-sm">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <AboutSection />
          <ProjectsSection />
          <PositionsSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}

