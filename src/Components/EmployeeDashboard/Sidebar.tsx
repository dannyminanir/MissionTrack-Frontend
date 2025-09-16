import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FiUser, FiFileText, FiList, FiPlusCircle } from "react-icons/fi";
import { VscHome } from "react-icons/vsc";
import { BiWallet } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";

const Sidebar: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const twTheme = (light: string, dark: string) =>
    theme === "light" ? light : dark;

  // Sidebar navigation
  const navItems = [
    { icon: VscHome, label: "Dashboard", path: "/dashboard" },
    { icon: CiBellOn, label: "Notifications", path: "/notifications" },
    { icon: FiUser, label: "Profile", path: "/profile" },
  ];

  // Quick actions (fixed icons)
  const quickActions = [
    { icon: FiPlusCircle, label: "New Mission Request", path: "/request" },
    { icon: FiList, label: "Request List/Tracking", path: "/requestList" },
    { icon: BiWallet, label: "Expense Logging", path: "/missions/history" },
    { icon: FiFileText, label: "Mission Reporting", path: "/report" },
  ];

  return (
    <div className="">
      <aside
      className={`fixed top-20 h-full left-0 w-64 flex flex-col justify-between shadow-md z-40 overflow-y-auto ${twTheme(
        "bg-blue-50",
        "bg-gray-900 text-white"
      )}`}
    >
      <div className="p-5">
        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`flex items-center text-lg font-bold gap-3 px-3 py-2 rounded-md  transition-colors ${
                  isActive
                    ? "bg-gray-200 text-black font-bold text-lg"
                    : twTheme(
                        "text-gray-700 hover:bg-gray-100",
                        "text-gray-300 hover:bg-gray-700"
                      )
                }`}
              >
                <Icon size={20} className={isActive ? "text-black" : "text-black"} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="mt-10">
          <p className="mb-3 ml-10 text-lg font-bold">Quick Actions</p>
          <div className="space-y-2">
            {quickActions.map(({ icon: Icon, label, path }) => (
              <Link
                key={label}
                to={path}
                className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 hover:text-blue-600"
              >
                <Icon size={18} className="text-black" />
                {label}
              </Link>
            ))}
          </div>
           {/* Logout Button */}
      <div className="p-5 mt-58 bg-accent-500 w-30 text-center ml-10 hover:bg-green-600 text-white font-semibold py-2 rounded-2xl">
        <Link to={"/login"}>
          Logout
        </Link>
      </div>
        </div>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
