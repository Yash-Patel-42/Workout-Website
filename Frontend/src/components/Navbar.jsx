import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Personal", path: "/personal" },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-black/95 via-black/98 to-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-widest hover:scale-105 transform transition duration-300">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FitForge
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex gap-3 sm:gap-6 items-center">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative group transition duration-300 text-sm sm:text-base ${
                location.pathname === path
                  ? "text-indigo-400"
                  : "text-gray-300 hover:text-indigo-300"
              }`}
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 sm:ml-4 p-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 