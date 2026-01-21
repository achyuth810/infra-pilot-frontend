import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo50 from "../assets/images/logo50.png";
import { getCurrentUser, signOut } from "aws-amplify/auth";

export default function Footer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="glass-strong rounded-3xl p-6 md:p-8">
          <div className="grid gap-10 md:grid-cols-4">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo50}
                  alt="InfraPilot Tech"
                  className="h-[50px] w-[50px] rounded-2xl object-cover"
                />
                <div>
                  <div className="text-white font-semibold">
                    InfraPilot Tech
                  </div>
                  <div className="text-white/60 text-sm">
                    Consultancy services
                  </div>
                </div>
              </div>

              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                We turn skills into offers. Premium guidance, polished delivery,
                and results you can measure.
              </p>

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/infrapilot-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon bg="bg-blue-600/90">
                    <FaLinkedin />
                  </Icon>
                </a>

                <a
                  href="https://www.instagram.com/infrapilot.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon bg="bg-pink-500/90">
                    <FaInstagram />
                  </Icon>
                </a>

                {/* X icon redirects to LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/infrapilot-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon bg="bg-white/10">
                    <FaXTwitter />
                  </Icon>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-white font-semibold">Company</div>
              <div className="mt-3 grid gap-2 text-sm">
                <FooterLink to="/about" label="About" />
                <FooterLink to="/services" label="Services" />
                <FooterLink to="/contact" label="Contact" />
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="text-white font-semibold">Contact</div>
              <div className="mt-3 grid gap-2 text-sm text-white/75">
                <div>support@infrapilottech.com</div>
                <div>info@infrapilottech.com</div>
                <div>careers@infrapilottech.com</div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <div className="text-white font-semibold">Get started</div>
              <p className="mt-3 text-sm text-white/70">
                Ready to level up? Create an account and start your plan.
              </p>
              <div className="mt-4 flex gap-2">
                {user ? (
                  <button onClick={handleLogout} className="btn-outline">
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink to="/auth" className="btn-outline">
                      Login
                    </NavLink>
                    <NavLink to="/auth?mode=signup" className="btn-blue">
                      Sign up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-white/15 pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-xs text-white/55">
              Powered by <span className="text-white/75">InfraPilot Tech</span>
            </div>
            <div className="text-xs text-white/55">
              © 2016 InfraPilot Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }) {
  return (
    <NavLink to={to} className="text-white/75 hover:text-white transition">
      {label}
    </NavLink>
  );
}

function Icon({ bg, children }) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${bg} hover:opacity-90 transition`}
    >
      <span className="text-white text-lg">{children}</span>
    </div>
  );
}