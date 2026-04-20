import { useState } from "react"; // Tambahkan import useState
import SplashScreen from "../components/SplashScreen"; // Import SplashScreen ke sini
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import CurvyPath from "../components/CurvyPath";

const CV = () => {
  const [loading, setLoading] = useState(true);

  // Splash Screen hanya aktif di halaman ini
  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <CurvyPath />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Education />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection>
        <PortfolioSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default CV;
