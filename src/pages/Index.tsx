import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Clients />
      <Stats />
      <Services />
      <WhyMe />
      <Workflow />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
