import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header, { HeroSection } from "./components/header"
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
import AKGCDeepDive from "./pages/akgc-deep-dive"
import NotFound from "./pages/not-found"

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
        <PhilosophySection />
        <JourneySection />
        <PositionsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <main className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-primary/20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/akgc" element={<AKGCDeepDive />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

