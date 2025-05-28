import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements with purple/blue theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/60 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400/60 rounded-full animate-bounce animation-delay-1500"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/230bf664-8323-498a-8145-dcdcd035872c.png"
              alt="DopeDoges Logo"
              className="w-20 h-20 rounded-full border-4 border-purple-400 mr-4 animate-pulse"
            />
            <div className="flex items-center">
              <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  DOPE DOGES
                </span>
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in animation-delay-500">
            DopeDoges: Dual-chain pixel NFTs on <span className="text-cyan-300 font-semibold">Dogecoin</span> and <span className="text-yellow-400 font-semibold">Bellscoin</span>—permanently inscribed, truly owned, and community-driven.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-1000">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            onClick={() => window.open('https://doggy.market/nfts/dopedoges', '_blank')}
          >
            View Doginals Collection <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-400 to-yellow-400 hover:from-purple-500 hover:to-yellow-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 focus:ring-2 focus:ring-yellow-400"
            onClick={() => window.open('https://nintondo.io/market/collection/bells-dope-doges', '_blank')}
          >
            View Bellinals Collection <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in animation-delay-1500">
          {[
            { label: "Floor Price", value: "520", icon: "🪙" },
            { label: "Total Volume", value: "1.13M", icon: "🪙" },
            { label: "Owners", value: "200", icon: "" },
            { label: "Supply", value: "420", icon: "" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="flex items-center justify-center mb-1">
                {stat.icon && <span className="text-cyan-400 mr-1">{stat.icon}</span>}
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-purple-400/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
