import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo50 from "../assets/images/logo50.png";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-200">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <img
                  src={logo50}
                  alt="InfraPilot Tech"
                  className="h-[50px] w-[50px] rounded-2xl object-cover"
                />
                <div>
                  <div className="text-black font-semibold">InfraPilot Tech</div>
                  <div className="text-black/60 text-sm">Consultancy services</div>
                </div>
              </div>

              <p className="mt-4 text-black/70 text-sm leading-relaxed">
                We turn skills into offers. Premium guidance, polished delivery, and results you can measure.
              </p>

              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/90 hover:bg-blue-600 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-black text-lg" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/90 hover:bg-pink-500 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-black text-lg" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 hover:bg-white transition border border-white/15"
                  aria-label="X"
                >
                  <FaXTwitter className="text-black text-lg" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <div className="text-black font-semibold">Company</div>
              <div className="mt-3 grid gap-2 text-sm">
                <FooterLink to="/about" label="About" />
                <FooterLink to="/services" label="Services" />
                <FooterLink to="/contact" label="Contact" />
                <FooterLink to="/privacy" label="Privacy Policy" />
              </div>
            </div>

            {/* Contact emails */}
            <div>
              <div className="text-black font-semibold">Contact</div>
              <div className="mt-3 grid gap-2 text-sm text-black/75">
                <div>support@infrapilottech.com</div>
                <div>hello@infrapilottech.com</div>
                <div>careers@infrapilottech.com</div>
              </div>
              <div className="mt-4 text-xs text-black/50">
                (You can edit these later)
              </div>
            </div>

            {/* CTA */}
            <div>
              <div className="text-black font-semibold">Get started</div>
              <p className="mt-3 text-sm text-black/70">
                Ready to level up? Create an account and start your plan.
              </p>
              <div className="mt-4 flex gap-2">
                <NavLink to="/auth" className="btn-outline">
                  Login
                </NavLink>
                <NavLink to="/auth?mode=signup" className="btn-blue">
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/10 pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-xs text-black/55">
              Powered by <span className="text-black/75">InfraPilotTech</span>
            </div>
            <div className="text-xs text-black/55">
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
    <NavLink
      to={to}
      className="text-black/75 hover:text-black transition"
    >
      {label}
    </NavLink>
  );
}