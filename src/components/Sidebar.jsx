import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active state based on current route
  const getActiveKey = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/videos") return "videos";
    if (path === "/favourites") return "favourites";
    if (path === "/settings") return "settings";
    return "home";
  };

  const [active, setActive] = useState(getActiveKey());

  // Update active state when route changes
  useEffect(() => {
    setActive(getActiveKey());
  }, [location.pathname]);

  const menuItems = [
    { 
      name: "Home", 
      icon: "fa-solid fa-house", 
      key: "home",
      route: "/"
    },
    {
      name: "Videos",
      icon: "fa-solid fa-video",
      key: "videos",
      route: "/videos"
    },
    {
      name: "Favourites",
      icon: "fa-solid fa-heart",
      key: "favourites",
      route: "/favourites"
    },
    {
      name: "Settings",
      icon: "fa-solid fa-cog",
      key: "settings",
      route: "/settings"
    }
  ];

  const handleNavigation = (item) => {
    setActive(item.key);
    navigate(item.route);
  };
  
  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile (md:flex) */}
      <div className="hidden md:flex w-72 bg-white rounded-2xl shadow-lg border-2 border-orange-500 overflow-hidden h-screen flex-col">
        {/* Logo Section */}
        <div className="m-4 p-6 flex flex-col items-center space-y-4 border-2 border-orange-500 rounded-2xl shadow-md bg-white">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
            ॐ
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Namah
          </span>
        </div>
        
        <nav className="p-4 flex-1">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => handleNavigation(item)}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-400 ease-in-out ${
                  active === item.key
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                    : "hover:bg-orange-100"
                }`}
              >
                <i className={`${item.icon} ${active === item.key ? "text-white" : "text-orange-600"}`}></i>
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 text-sm text-gray-500 text-center bg-white rounded-xl shadow-md border border-orange-200 m-4">
          © 2025 Namah
        </div>
      </div>

      {/* Mobile Bottom Navigation - Visible only on mobile (md:hidden) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-500 shadow-lg z-50">
        <nav className="px-2 py-3">
          <ul className="flex justify-around items-center">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => handleNavigation(item)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out min-w-[60px] ${
                  active === item.key
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  active === item.key
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 shadow-md"
                    : "bg-transparent"
                }`}>
                  <i className={`${item.icon} text-xl ${
                    active === item.key ? "text-white" : "text-gray-500"
                  }`}></i>
                </div>
                <span className={`text-xs mt-1 font-medium ${
                  active === item.key ? "text-orange-500" : "text-gray-500"
                }`}>
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;