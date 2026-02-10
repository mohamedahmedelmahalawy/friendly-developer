import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activelinkColors = {
    base: "transition hover:text-blue-400",
    active: "text-blue-400 font-semibold",
  };
  const navlinkHandler = ({ isActive }: { isActive: boolean }) =>
    isActive ? activelinkColors.active : activelinkColors.base;
  const closeMobileNav = () => setMenuOpen(false);
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          onClick={closeMobileNav}
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>Friendly Developer</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink to="/" className={navlinkHandler}>
              Home
            </NavLink>
            <NavLink to="/projects" className={navlinkHandler}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={navlinkHandler}>
              Blog
            </NavLink>
            <NavLink to="/about" className={navlinkHandler}>
              About
            </NavLink>
            <NavLink to="/contact" className={navlinkHandler}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            title="Menu"
            className="text-blue-400 text-xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Nav*/}
      {menuOpen && (
        <div>
          <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
            <NavLink to="/" onClick={closeMobileNav} className={navlinkHandler}>
              Home
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMobileNav}
              className={navlinkHandler}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              onClick={closeMobileNav}
              className={navlinkHandler}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobileNav}
              className={navlinkHandler}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMobileNav}
              className={navlinkHandler}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
