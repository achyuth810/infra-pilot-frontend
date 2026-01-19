import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import ContactSection from "../sections/ContactSection";

export default function Contact() {
  return (
    <AppLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pb-20"
      >
       {/* Main contact form + image */}
<ContactSection />

{/* ================= CONTACT INFO (BOTTOM) ================= */}
<section className="mx-auto max-w-6xl px-4 mt-16">
  <div className="glass-strong rounded-3xl p-7 md:p-9">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      {/* Left info */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Call Or Message Us
        </h3>

        <p className="mt-3 text-white/75 max-w-xl leading-relaxed">
          Connect directly to our team for quick support or guidance.
        </p>

        <div className="mt-6 space-y-5 text-white/85">
          {/* Email */}
          <div>
            <div className="text-sm text-white/60">Email</div>

            <div className="mt-3 space-y-3">
              <div>
                <div className="text-xs text-white/50">General Enquiry</div>
                <a
                  href="mailto:support@infrapilottech.com"
                  className="block underline underline-offset-4 hover:text-white"
                >
                  support@infrapilottech.com
                </a>
              </div>

              <div>
                <div className="text-xs text-white/50">Business / Partnerships</div>
                <a
                  href="mailto:hello@infrapilottech.com"
                  className="block underline underline-offset-4 hover:text-white"
                >
                  hello@infrapilottech.com
                </a>
              </div>

              <div>
                <div className="text-xs text-white/50">Careers</div>
                <a
                  href="mailto:careers@infrapilottech.com"
                  className="block underline underline-offset-4 hover:text-white"
                >
                  careers@infrapilottech.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="text-sm text-white/60">Phone</div>
            <a
              href="tel:+19713793060"
              className="underline underline-offset-4 hover:text-white"
            >
              +1 (971) 379-3060
            </a>
          </div>

          {/* Address */}
          <div>
            <div className="text-sm text-white/60">Address</div>
            <div className="leading-relaxed text-white/80">
              14205 N Mo Pac Expy Ste 570<br />
              PMB 350257<br />
              Austin, Texas 78728-6529<br />
              United States
            </div>
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex flex-col gap-3 min-w-[220px]">
        <a href="tel:+19713793060" className="btn-blue text-center">
          Call Now
        </a>

        <a
          href="mailto:support@infrapilottech.com"
          className="btn-outline text-center"
        >
          Email Us
        </a>
      </div>
    </div>
  </div>
</section>
      </motion.div>
    </AppLayout>
  );
}