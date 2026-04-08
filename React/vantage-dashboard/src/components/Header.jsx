import { Search, Filter, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="px-8 pt-6 pb-2">
      {/* Top Tabs */}
      <div className="flex items-center gap-8 border-b border-gray-100 mb-8">
        <button className="pb-4 text-sm font-bold border-b-2 border-blue-600 text-gray-900">
          Find Influencers
        </button>
        <button className="pb-4 text-sm font-medium text-gray-400 hover:text-gray-600">
          My Favorites
        </button>
      </div>

      {/* Search Bar Area */}
      <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100 mb-6">
        <Search className="ml-3 text-gray-400" size={20} />
        <div className="flex flex-1 gap-2 overflow-x-auto">
          {["United States ✕", "#fashion ✕", "lifestyle ✕"].map((tag) => (
            <span
              key={tag}
              className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-sm whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pr-3 border-l pl-4 border-gray-100">
          <button className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Filter size={18} /> Filter
          </button>
          <button className="text-gray-500">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <p className="text-sm font-bold text-gray-800 mb-6">
        Found 2,281 influencers
      </p>
    </div>
  );
};
export default Header;
