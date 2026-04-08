import {
  LayoutGrid,
  MessageSquare,
  PieChart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const icons = [LayoutGrid, MessageSquare, PieChart, Users, Settings];

  return (
    <div className="w-20 h-screen bg-white border-r border-gray-100 flex flex-col items-center py-8 sticky top-0">
      <div className="text-blue-600 mb-10">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-xl">
          C
        </div>
      </div>

      <div className="flex flex-col gap-8 flex-1">
        {icons.map((Icon, idx) => (
          <button
            key={idx}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Icon size={24} strokeWidth={1.5} />
          </button>
        ))}
      </div>

      <button className="text-gray-400 hover:text-red-500">
        <LogOut size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Sidebar;
