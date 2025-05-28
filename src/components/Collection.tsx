import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Dog, Smile, User } from "lucide-react";
import nftsDogecoin from "@/data/nfts.json";
import nftsBells from "@/data/bells.json";

// Frame style classes
const frameStyles = [
  "border-2 border-yellow-400 shadow-md", // gold
  "border-2 border-black shadow-lg",      // black
  "border-2 border-white shadow",         // white
  "border-2 border-purple-400 shadow-purple-500/20", // purple
  "border-2 border-blue-400 shadow-blue-500/20"      // blue
];

function getRandomFrame() {
  return frameStyles[Math.floor(Math.random() * frameStyles.length)];
}

function getRandomNFTs(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled;
}

const bellsLogo = (
  <img src="/bells-logo.png" alt="Bells" className="inline w-4 h-4 mr-1 align-text-bottom" style={{display:'inline'}} />
);

export const Collection = () => {
  const [chain, setChain] = useState("doge");
  const nfts = chain === "doge" ? nftsDogecoin : nftsBells;

  // Remove empty/undefined options
  const dogeOptions = Array.from(new Set(nfts.map(nft => nft.Doge))).filter(opt => !!opt && opt !== "");
  const faceOptions = Array.from(new Set(nfts.map(nft => nft.Face))).filter(opt => !!opt && opt !== "");
  const headOptions = Array.from(new Set(nfts.map(nft => nft.Head))).filter(opt => !!opt && opt !== "");

  const [doge, setDoge] = useState("");
  const [face, setFace] = useState("");
  const [head, setHead] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredNFTs = nfts.filter(nft =>
    (!doge || nft.Doge === doge) &&
    (!face || nft.Face === face) &&
    (!head || nft.Head === head)
  );
  const randomNFTs = getRandomNFTs(filteredNFTs, filteredNFTs.length);

  // Strict grid layout (no blank spaces, no offsets)
  const gridNFTs = randomNFTs.slice(0, visibleCount);

  return (
    <section className="py-16 px-1 sm:px-2 relative overflow-hidden" id="collection">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 via-pink-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse animation-delay-2000" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 mb-2 drop-shadow-lg">Featured Doginals & Bellinals</h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-4">
            Explore the dopest doges from our exclusive <span className="font-bold text-purple-300">Doginals</span> (Dogecoin) and <span className="font-bold text-yellow-300">Bellinals</span> (Bellscoin) collections. Each piece is a unique work of pixel art inscribed permanently on its respective blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-4">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-1.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:ring-2 focus:ring-blue-400"
              onClick={() => window.open('https://doggy.market/nfts/dopedoges', '_blank')}
            >
              View Doge Collection <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-400 to-yellow-400 hover:from-purple-500 hover:to-yellow-500 text-white px-4 py-1.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 focus:ring-2 focus:ring-yellow-400"
              onClick={() => window.open('https://nintondo.io/market/collection/bells-dope-doges', '_blank')}
            >
              View Bells Collection <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Chain Toggle */}
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant={chain === "doge" ? "default" : "outline"}
            className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${chain === "doge" ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105" : "border-purple-400 text-purple-300 hover:bg-purple-400/10"}`}
            onClick={() => { setChain("doge"); setDoge(""); setFace(""); setHead(""); setVisibleCount(12); }}
          >
            Dogechain
          </Button>
          <Button
            variant={chain === "bells" ? "default" : "outline"}
            className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${chain === "bells" ? "bg-gradient-to-r from-purple-400 to-yellow-400 text-white shadow-lg scale-105" : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"}`}
            onClick={() => { setChain("bells"); setDoge(""); setFace(""); setHead(""); setVisibleCount(12); }}
          >
            Bellschain
          </Button>
        </div>
        {/* Compact Filter Block */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 justify-center items-center bg-white/20 backdrop-blur-lg rounded-xl border border-purple-500/30 px-3 py-2 shadow ring-1 ring-white/20" style={{position:'relative', zIndex:2}}>
          <div className="flex items-center gap-1">
            <Dog className="h-3 w-3 text-cyan-400" />
            <select value={doge} onChange={e => setDoge(e.target.value)} className="rounded px-1.5 py-0.5 text-xs bg-purple-900/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 max-h-32 overflow-y-auto min-w-[70px] transition-all duration-200 hover:bg-purple-700/80" style={{backgroundColor:'#2d2250'}}>
              <option value="">Doge</option>
              {dogeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-1">
            <Smile className="h-3 w-3 text-blue-400" />
            <select value={face} onChange={e => setFace(e.target.value)} className="rounded px-1.5 py-0.5 text-xs bg-purple-900/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 max-h-32 overflow-y-auto min-w-[70px] transition-all duration-200 hover:bg-blue-700/80" style={{backgroundColor:'#2d2250'}}>
              <option value="">Face</option>
              {faceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3 text-purple-400" />
            <select value={head} onChange={e => setHead(e.target.value)} className="rounded px-1.5 py-0.5 text-xs bg-purple-900/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 max-h-32 overflow-y-auto min-w-[70px] transition-all duration-200 hover:bg-yellow-700/80" style={{backgroundColor:'#2d2250'}}>
              <option value="">Head</option>
              {headOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          {(doge || face || head) && (
            <Button variant="outline" size="sm" className="ml-1 px-2 py-0.5 text-xs border-purple-400 text-purple-300 hover:bg-purple-400/20 transition-all duration-200" onClick={() => { setDoge(""); setFace(""); setHead(""); }}>
              Clear
            </Button>
          )}
        </div>
        {/* NFT Wall - Strict Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {gridNFTs.map((nft, index) => {
            const url = chain === "doge"
              ? `https://doggy.market/inscription/${nft["Inscription ID"]}`
              : `https://nintondo.io/belinals/${nft["Inscription ID"]}`;
            return (
              <div
                key={nft["Inscription ID"]}
                className={`rounded-xl bg-white/10 ${getRandomFrame()} transition-all duration-200 group hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/40 cursor-pointer`}
                style={{boxShadow:'0 2px 12px 0 rgba(80,60,180,0.10)'}}
                onClick={() => window.open(url, '_blank')}
                tabIndex={0}
                role="button"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open(url, '_blank'); }}
                aria-label={`View NFT details for inscription ${nft["Inscription Number"]}`}
              >
                <div className="relative overflow-hidden rounded-t-lg" style={{aspectRatio: '1/1'}}>
                  <img 
                    src={nft.Image} 
                    alt={`Doginal #${nft["Inscription Number"]}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[10px] text-white font-semibold flex items-center">
                    {chain === "doge" ? <Dog className="inline w-3 h-3 text-yellow-400 mr-1" /> : bellsLogo}
                    #{nft["Inscription Number"]}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-xs font-bold text-white mb-0.5 truncate">{nft.Doge}{nft.Head ? ` - ${nft.Head}` : ""}</h3>
                  <p className="text-gray-400 text-[10px] mb-0.5 truncate">Face: {nft.Face}</p>
                  <p className="text-purple-400 text-[10px]">Inscribed on {chain === "doge" ? "Dogecoin" : "Bellscoin"}</p>
                </div>
              </div>
            );
          })}
        </div>
        {visibleCount < filteredNFTs.length && (
          <div className="flex justify-center mt-6">
            <Button onClick={() => setVisibleCount(visibleCount + 12)} className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-600/80 transition-all">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
