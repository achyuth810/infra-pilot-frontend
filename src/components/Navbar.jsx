import { NavLink } from "react-router-dom";

const base =
  "px-3 py-2 rounded-xl text-sm transition border border-transparent";
const active = "bg-white text-black";
const idle = "text-white/80 hover:text-white hover:bg-white/10";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-white font-semibold tracking-wide">
          InfraPilot Tech
        </NavLink>

        <nav className="flex gap-2">
          <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}