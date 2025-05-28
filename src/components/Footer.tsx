import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-purple-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-4">DopeDoges</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The most exclusive Doginals collection on Dogecoin. Join our pack of digital rebels 
              and be part of the doginals revolution.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              onClick={() => window.open('https://doggy.market/nfts/dopedoges', '_blank')}
            >
              View Collection <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="animate-fade-in animation-delay-500">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="text-gray-300 hover:text-purple-400 transition-colors">Collection</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-purple-400 transition-colors">Roadmap</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-purple-400 transition-colors">Team</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in animation-delay-1000">
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/tJGwdpy9dZ" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">Discord</a></li>
              <li><a href="https://x.com/thedopedoges" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">Twitter/X</a></li>
              <li><a href="https://linktr.ee/dopedoges" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">Linktree</a></li>
              <li><a href="https://t.me/+YOheStXR_cw4YjZh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/30 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 DopeDoges. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
