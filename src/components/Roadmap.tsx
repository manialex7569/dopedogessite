import { CheckCircle, Circle, Clock } from "lucide-react";

export const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Collection Launch",
      description: "Initial minting of 420 unique DopeDoges as Doginals on Dogecoin",
      status: "completed",
      date: "Q4 2023"
    },
    {
      phase: "Phase 2", 
      title: "Marketplace Integration",
      description: "Integration with leading Doginals marketplaces for seamless trading and discovery",
      status: "completed",
      date: "Q1 2024"
    },
    {
      phase: "Phase 3",
      title: "Community Building",
      description: "Growing the DopeDoges community across multiple platforms and blockchains",
      status: "in-progress",
      date: "Q2 2024"
    },
    {
      phase: "Phase 4",
      title: "Utility Products",
      description: "Building onchain Doginals games, tools, and services that generate revenue for holders",
      status: "upcoming",
      date: "Q3 2024"
    },
    {
      phase: "Phase 5",
      title: "Global Expansion",
      description: "Partnerships, brand collaborations, and physical merchandise",
      status: "upcoming",
      date: "Q4 2024"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-6 w-6 text-green-400" />;
      case "in-progress": return <Clock className="h-6 w-6 text-cyan-400" />;
      default: return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "border-green-400/50 bg-green-400/10";
      case "in-progress": return "border-cyan-400/50 bg-cyan-400/10";
      default: return "border-gray-400/50 bg-gray-400/10";
    }
  };

  return (
    <section className="py-20 px-4 relative" id="roadmap">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">Roadmap</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize the doginals space across multiple blockchains. 
            Follow our progress as we build the future of digital collectibles.
          </p>
        </div>
        
        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="flex-shrink-0">
                {getStatusIcon(item.status)}
              </div>
              <div className={`flex-1 p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(item.status)} hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-purple-400">{item.phase}</span>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "completed" ? "bg-green-400/20 text-green-400" :
                      item.status === "in-progress" ? "bg-cyan-400/20 text-cyan-400" :
                      "bg-gray-400/20 text-gray-400"
                    }`}>
                      {item.status === "completed" ? "Completed" :
                       item.status === "in-progress" ? "In Progress" : "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
