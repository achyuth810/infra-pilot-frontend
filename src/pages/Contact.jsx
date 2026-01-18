import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import contactImg from "../assets/images/contact1.png";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export default function Contact() {
  return (
    <AppLayout>
      <motion.div
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-6xl px-4 py-16 text-white"
      >
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* ================= LEFT : INFO ================= */}
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <p className="mt-4 text-white/70 leading-relaxed">
              Tell us about your goals, background, or challenges.  
              Our team will review your details and guide you with the next steps.
            </p>

            <img
              src={contactImg}
              alt="Contact InfraPilot Tech"
              className="mt-8 w-full rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          {/* ================= RIGHT : FORM ================= */}
          <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/50 outline-none focus:border-blue-500 transition"
              />

              <input
                placeholder="Email"
                type="email"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/50 outline-none focus:border-blue-500 transition"
              />

              <input
                placeholder="What do you need help with?"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/50 outline-none focus:border-blue-500 transition"
              />

              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/50 outline-none focus:border-blue-500 transition"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Send Message
              </button>

              <div className="text-xs text-white/50 text-center">
                This form will be connected to backend email & CRM services.
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </AppLayout>
  );
}