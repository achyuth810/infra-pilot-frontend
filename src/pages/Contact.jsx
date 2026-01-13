import { motion } from "framer-motion";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function Contact() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-72px)] bg-black text-white"
    >
      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-4 text-white/70">
          Send a message and we’ll reply with next steps.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-4"
        >
          <input
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/25"
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/25"
          />
          <input
            placeholder="What do you need help with?"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/25"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/25"
          />

          <button className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition">
            Send Message
          </button>

          <div className="text-xs text-white/50">
            (Form UI only for now — we can connect email/CRM later.)
          </div>
        </form>
      </div>
    </motion.div>
  );
}