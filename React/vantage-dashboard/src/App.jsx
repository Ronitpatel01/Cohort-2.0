import React from "react";
import InfluencerCard from "./components/InfluencerCard";
import influencers from "./influencers";
const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {influencers.map((person) => (
          <InfluencerCard key={person.id} influencer={person} />
        ))}
      </div>
    </div>
  );
};
export default App;
