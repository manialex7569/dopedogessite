
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { About } from "@/components/About";
import { Roadmap } from "@/components/Roadmap";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 relative overflow-hidden">
      {/* Dynamic background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-cyan-500/20 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <Hero />
      <About />
      <Collection />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
