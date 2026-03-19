import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Workflow from "@/components/Workflow";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Stats />
      <Services />
      <WhyMe />
      <Workflow />
      
      <Footer />
    </div>
  );
};

export default Index;
