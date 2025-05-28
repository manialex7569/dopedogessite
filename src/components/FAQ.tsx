import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What are Doginals and Bellinals?",
      answer:
        "Doginals are digital artifacts inscribed directly on the Dogecoin blockchain, while Bellinals are inscribed on the Bellscoin blockchain. Both provide true ownership, immutability, and the fun spirit of meme culture—now on two chains!"
    },
    {
      question: "How many DopeDoges are there?",
      answer:
        "There are exactly 420 unique DopeDoges in the collection, each with distinctive traits and characteristics. No more will ever be created, making each one truly rare—whether on Dogecoin or Bellscoin."
    },
    {
      question: "Where can I buy DopeDoges?",
      answer:
        'You can purchase DopeDoges on <a href="https://doggy.market/nfts/dopedoges" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">Doggy Market (Dogecoin)</a> and <a href="https://nintondo.io/market/collection/bells-dope-doges" target="_blank" rel="noopener noreferrer" class="text-yellow-400 underline">Nintondo (Bellscoin)</a>. Both are official marketplaces for our collection with verified authenticity.'
    },
    {
      question: "What are the benefits of holding DopeDoges?",
      answer:
        "Holders get exclusive access to community events, early access to future drops, potential airdrops, governance voting rights, and access to our private Discord channels."
    },
    {
      question: "How do I store my DopeDoges safely?",
      answer:
        "You can store your DopeDoges in any wallet that supports Doginals (Dogecoin) or Bellinals (Bellscoin). We recommend using hardware wallets for maximum security."
    },
    {
      question: "Is there a roadmap for future development?",
      answer:
        "Yes! We have an extensive roadmap including utility development, metaverse integration, multi-chain marketplace features, and global expansion plans. Check our roadmap section for details."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4 relative" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about DopeDoges, Doginals (Dogecoin), and Bellinals (Bellscoin).
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
