import { Card, CardContent } from "@/components/ui/card";

export const Team = () => {
  const founder = {
    name: "Polo",
    role: "Founder & Visionary",
    bio: "Founder of DopeDoges - the only NFT project to mint rare inscription numbers on two different blockchains. Owner of legendary inscriptions linking both Dogecoin (Sub 12k) and Bellscoin (Sub 1k), creating a unique cross-chain NFT experience that bridges communities and showcases the power of multi-chain innovation.",
    image: "/lovable-uploads/3811b541-93aa-43f2-8eea-2fb3ea535a3b.png"
  };

  return (
    <section className="py-20 px-4 relative" id="team">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">Meet the Founder</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The visionary behind DopeDoges, pioneering cross-chain NFT innovation 
            on both Dogecoin and Bellscoin networks.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="relative mb-8">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400/50 group-hover:border-purple-400 transition-all duration-300 shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🐕</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{founder.name}</h3>
              <p className="text-purple-400 font-semibold mb-4 text-lg">{founder.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{founder.bio}</p>
              
              <div className="mt-6 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-lg">Dogecoin</div>
                  <div className="text-gray-300 text-sm">Sub 12k Inscriptions</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-lg">Bellscoin</div>
                  <div className="text-gray-300 text-sm">Sub 1k Inscriptions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
