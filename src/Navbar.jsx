
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ onToggleTheme }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(prev => !prev);
    if (onToggleTheme) onToggleTheme(!darkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 py-3 md:py-4 border-b
        ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-blue-500/20 shadow-[0_2px_8px_rgba(59,130,246,0.15)]"}
      `}
    >
      <h1 className="md:text-xl text-lg font-semibold font-title">
        <span className="text-blue-500">Quick</span><span className="tracking-tight">Convert</span>
      </h1>

      <button
        onClick={handleToggle}
        className="text-xl focus:outline-none"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-600" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
