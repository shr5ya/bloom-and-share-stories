
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Therapists", path: "/find-therapists" },
    { name: "Mental Health Test", path: "/depression-test" },
    { name: "Community", path: "/community" },
    { name: "Resources", path: "/meet-people" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/30">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === item.path
                  ? "bg-white/30 text-gray-800 shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/20"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button className="p-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-white/20 transition-all duration-300">
            <Search size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
