import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Projects />
      <CaseStudy />
      <Services />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
