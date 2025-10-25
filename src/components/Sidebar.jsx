import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("home");
  const menuItems = [
    { name: "Home", icon: "fa-solid fa-house", key: "home" },
    {
      name: "Videos",
      icon: "fa-solid fa-video",
      key: "videos"
    },
    {
      name: "Favourites",
      icon: "fa-solid fa-heart",
      key: "favourites" 
    },
    {
      name: "Settings",
      icon: "fa-solid fa-cog",
      key: "settings"
    }
  ];
  
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg border-2 border-orange-500 overflow-hidden">
      {/* Logo Section */}
      <div className="m-4 p-6 flex flex-col items-center space-y-4 border-2 border-orange-500 rounded-2xl shadow-md bg-white">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
          ॐ
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Namah
        </span>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => setActive(item.key)}
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
  );
}

export default Sidebar