import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import aboutImg from "../assets/images/about1.png";
import Testimonials from "../components/Testimonials";

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

export default function About() {
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
        {/* ================= HERO / INTRO ================= */}
        <motion.div {...fadeUp(0)} className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl font-semibold">
              About InfraPilot Tech
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed">
              InfraPilot Tech is a premium career consultancy focused on helping
              software professionals convert skills into real job offers.
              We don’t guess. We execute with structure, strategy, and proof.
            </p>
          </div>

          {/* Right: Image */}
          <img
            src={aboutImg}
            alt="About InfraPilot Tech"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        {/* ================= WHAT WE DO ================= */}
        <motion.section {...fadeUp(0.1)} className="mt-20">
          <h2 className="text-3xl font-semibold">What We Do</h2>
          <p className="mt-4 text-white/70 max-w-3xl">
            We manage the most time-consuming and confusing parts of the job
            search so you can focus on learning, interviews, and growth.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* You can add/remove cards freely */}
            <div className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Strategy First</h3>
              <p className="mt-2 text-sm text-white/70">
                Every candidate gets a role-based plan — not generic advice.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Execution Driven</h3>
              <p className="mt-2 text-sm text-white/70">
                We apply, track, optimize, and follow up consistently.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Results Focused</h3>
              <p className="mt-2 text-sm text-white/70">
                Interviews, feedback, and offers — not just activity.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= WHY US (Q&A STYLE) ================= */}
        <motion.section {...fadeUp(0.2)} className="mt-20">
          <h2 className="text-3xl font-semibold">Why InfraPilot Tech?</h2>

          <div className="mt-8 space-y-6 max-w-4xl">
            {/* Q&A blocks — add more easily */}
            <div className="glass rounded-3xl p-6">
              <h4 className="font-semibold">
                Q: How are you different from resume services?
              </h4>
              <p className="mt-2 text-white/70 text-sm">
                We don’t stop at resumes. We manage the entire job application
                lifecycle — from positioning to interview prep.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h4 className="font-semibold">
                Q: Do you apply to jobs for candidates?
              </h4>
              <p className="mt-2 text-white/70 text-sm">
                Yes. Our managed application service ensures consistency,
                accuracy, and volume without shortcuts.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h4 className="font-semibold">
                Q: Who is this best suited for?
              </h4>
              <p className="mt-2 text-white/70 text-sm">
                Software engineers, data professionals, and IT specialists
                who want structured guidance and measurable progress.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= TESTIMONIALS PLACEHOLDER ================= */}
        <motion.section {...fadeUp(0.3)} className="mt-20">
        <Testimonials />
          
        </motion.section>
      </motion.div>
    </AppLayout>
  );
}