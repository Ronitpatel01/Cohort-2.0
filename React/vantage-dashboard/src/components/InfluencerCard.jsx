// InfluencerCard.jsx
import React from "react";
import { MoreHorizontal, Star } from "lucide-react";

const InfluencerCard = ({ influencer }) => {
  const {
    name,
    username,
    bio,
    followers,
    following,
    media,
    avatar,
    gallery = [],
  } = influencer || {};

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all">
      {/* 1. Gallery - Height badha di (h-48) taaki card vertical lage */}
      <div className="grid grid-cols-3 gap-0.5 h-48 relative">
        {gallery.slice(0, 3).map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="w-full h-full object-cover"
            alt="post"
          />
        ))}
        {/* Star icon top-left par jaisa reference mein hai */}
        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg text-white">
          <Star size={14} fill="white" />
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="relative flex flex-col items-center px-5 pb-6 text-center">
        {/* Avatar - Slightly bigger and more overlap */}
        <div className="relative -mt-10 mb-3">
          <img
            src={avatar}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-blue-500 border-2 border-white rounded-full p-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Menu button reference jaisa side mein */}
        <button className="absolute top-4 right-4 text-gray-300">
          <MoreHorizontal size={18} />
        </button>

        {/* Text Section - Proper Vertical Spacing */}
        <h3 className="font-bold text-gray-900 text-base">{username}</h3>
        <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          {name}
        </p>

        <p className="mt-3 text-xs font-bold text-gray-500 leading-relaxed line-clamp-3">
          {bio}
        </p>
      </div>

      {/* 3. Stats Section - Ekdum bottom par chipka hua */}
      <div className="mt-auto border-t border-gray-50 grid grid-cols-3 py-4">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-800">{media}</p>
          <p className="text-[10px] text-gray-400 uppercase">Media</p>
        </div>
        <div className="text-center border-x border-gray-100">
          <p className="text-sm font-bold text-gray-800">{followers}</p>
          <p className="text-[10px] text-gray-400 uppercase">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-gray-800">{following}</p>
          <p className="text-[10px] text-gray-400 uppercase">Following</p>
        </div>
      </div>
    </div>
  );
};
export default InfluencerCard;
