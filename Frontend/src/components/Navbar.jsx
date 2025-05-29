import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { 
    isDark, 
    toggleTheme, 
    isDynamicLayout, 
    toggleDynamicLayout,
    isSplashEnabled,
    toggleSplashCursor 
  } = useTheme();

  const navItems = [
    { label: "Get Started", path: "/getstarted" },
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Personal", path: "/personal" },
  ];

  return (
    <nav className={`fixed w-full backdrop-blur-md border-b shadow-xl z-50 transition-colors duration-300 
      ${isDark 
        ? 'bg-gradient-to-r from-black/95 via-black/98 to-black/95 border-white/5' 
        : 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 border-black/5'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-widest hover:scale-105 transform transition duration-300">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FitForge
          </span>
        </div>

        {/* Nav Links and Toggle Buttons */}
        <div className="flex gap-3 sm:gap-6 items-center">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative group transition duration-300 text-sm sm:text-base ${
                location.pathname === path
                  ? "text-indigo-400"
                  : isDark 
                    ? "text-gray-300 hover:text-indigo-300"
                    : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group-hover:w-full duration-300 ease-in-out rounded-full"></span>
            </Link>
          ))}

          {/* Settings Buttons */}
          <div className="flex gap-2 sm:gap-3 items-center border-l pl-2 sm:pl-3 border-gray-700/50">
            {/* Dynamic Layout Toggle */}
            <button
              onClick={toggleDynamicLayout}
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800
                ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              aria-label="Toggle Dynamic Layout"
              title={`${isDynamicLayout ? 'Disable' : 'Enable'} dynamic card layout`}
            >
              {isDynamicLayout ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              )}
            </button>

            {/* Splash Cursor Toggle */}
            <button
              onClick={toggleSplashCursor}
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800
                ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              aria-label="Toggle splash cursor"
              title={`${isSplashEnabled ? 'Disable' : 'Enable'} splash cursor effect`}
            >
              {isSplashEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800
                ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              aria-label="Toggle theme"
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 