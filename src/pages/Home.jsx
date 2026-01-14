import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
});
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-6xl px-4 py-10 text-white">
        {/* Your long scroll content + video sections go here */}
        <div className="text-4xl font-semibold">Home</div>
        <div className="mt-4 text-white/70">
          Add your 4–5 scroll sections here.
        </div>
      </div>
    </AppLayout>
  );
}

export default function Home() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-72px)] bg-gradient-to-br from-black via-zinc-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Consulting • Strategy • Delivery
        </motion.div>

        <motion.h1
          {...fadeUp(0.12)}
          className="mt-6 text-5xl md:text-6xl font-semibold leading-tight"
        >
          We help teams build modern,
          <span className="text-white/70"> scalable digital solutions.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.18)} className="mt-5 text-white/70 max-w-2xl leading-relaxed">
          InfraPilot Tech provides consulting services across web engineering, cloud architecture,
          data platforms, and delivery excellence—designed for speed, quality, and long-term scale.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Book a Consultation
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            View Services
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Fast Delivery", desc: "Ship with clarity—roadmaps, sprints, and real outcomes." },
            { title: "Senior Engineering", desc: "Clean architecture, performance, and maintainability." },
            { title: "Scalable Systems", desc: "Cloud-ready solutions built to grow with your business." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium">{c.title}</div>
              <div className="mt-2 text-white/70 text-sm leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}