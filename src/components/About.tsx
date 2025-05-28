export const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in animation-delay-500">
            <h3 className="text-3xl font-bold text-white">Why DopeDoges?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              DopeDoges NFTs are both <span className="font-semibold text-cyan-300">Doginals</span> and <span className="font-semibold text-yellow-300">Bellinals</span>—digital artifacts inscribed directly onto the <span className="font-semibold text-purple-300">Dogecoin</span> and <span className="font-semibold text-yellow-400">Bellscoin</span> blockchains. This makes them unique, permanent, and truly owned by you, no matter which chain you prefer. Our collection features 420+ unique, hand-crafted pixel doges, each with distinctive traits and characteristics that embody the doge spirit. True ownership, true rarity, and much wow—now on two chains!
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're not just creating NFTs; we're building a cross-chain community of Dogecoin and Bellscoin enthusiasts, digital art lovers, and meme fans who believe in fun, decentralized ownership, and the future of multi-chain collectibles. Join us and be part of the Doginals & Bellinals revolution!
            </p>
          </div>
          <div className="relative animate-fade-in animation-delay-1000">
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-4 sm:p-6 md:p-8 max-w-xs mx-auto backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <img 
                src="/lovable-uploads/230bf664-8323-498a-8145-dcdcd035872c.png"
                alt="DopeDoges Collection Preview"
                className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
