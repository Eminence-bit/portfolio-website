import Header from "./components/header"
import AboutSection from "./components/about-section"
import StatsSection from "./components/stats-section"
import ProjectsSection from "./components/projects-section"
import CertificationsSection from "./components/certifications-section"
import PhilosophySection from "./components/philosophy-section"
import JourneySection from "./components/journey-section"
import PositionsSection from "./components/positions-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import AnimatedBackground from "./components/animated-background"

function App() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen bg-background/80 backdrop-blur-sm">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <AboutSection />
          <StatsSection />
          <ProjectsSection />
          <CertificationsSection />
          <PhilosophySection />
          <JourneySection />
          <PositionsSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App

