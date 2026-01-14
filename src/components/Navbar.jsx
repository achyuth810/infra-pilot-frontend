import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo40.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className={`rounded-2xl px-4 py-3 transition ${scrolled ? "glass-strong" : "glass"}`}>
          <div className="flex items-center justify-between">
            {/* Brand */}
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="InfraPilot Tech logo"
                className="h-10 w-10 rounded-xl object-cover"
              />
              <div className="leading-tight">
                <div className="text-white font-semibold text-base">InfraPilot Tech</div>
                <div className="text-white/60 text-xs">Consultancy services</div>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/auth" className="btn-outline">
                Login
              </NavLink>
              <NavLink to="/auth?mode=signup" className="btn-blue">
                Sign up
              </NavLink>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden btn-outline px-3 py-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile menu */}
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 grid gap-3"
            >
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-white/85 hover:bg-blue-500/25 transition"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <NavLink to="/auth" className="btn-outline w-full">
                  Login
                </NavLink>
                <NavLink to="/auth?mode=signup" className="btn-blue w-full">
                  Sign up
                </NavLink>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink to={to} className="nav-link">
      {({ isActive }) => (
        <span className="relative">
          <span className={isActive ? "text-white" : ""}>{label}</span>
          {isActive ? (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-blue-400"
            />
          ) : null}
        </span>
      )}
    </NavLink>
  );
}