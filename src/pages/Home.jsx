import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";

// If you have a hero video, put it in: src/assets/videos/hero.mp4
// and uncomment the import below.
// import heroVideo from "../assets/videos/hero.mp4";

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount: 0.25 },
});

export default function Home() {
  return (
    <AppLayout>
      <motion.div
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="text-white"
      >
        {/* HERO (video/image area) */}
        <section className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl px-4">
          <div className="relative mt-2 rounded-3xl overflow-hidden glass">
            {/* If you want video background, use this:
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/60" />
            */}
            <div className="relative px-6 py-16 md:px-10 md:py-20 bg-black/40">
              <motion.h1
                {...fadeUp(0)}
                className="text-4xl md:text-6xl font-semibold leading-tight"
              >
                Premium Career Consulting
                <span className="block text-white/75">
                  We turn skills into offers.
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.1)}
                className="mt-5 max-w-2xl text-white/70 text-base md:text-lg"
              >
                Resume optimization, interview prep, and career strategy with a
                premium glossy experience across mobile and desktop.
              </motion.p>

              <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-3">
                <a href="/services" className="btn-blue">
                  Explore Services
                </a>
                <a href="/auth?mode=signup" className="btn-outline">
                  Get Started
                </a>
              </motion.div>

              <motion.div
                {...fadeUp(0.25)}
                className="mt-10 grid gap-3 sm:grid-cols-3"
              >
                {["ATS-ready resumes", "Mock interviews", "Job strategy"].map(
                  (x) => (
                    <div
                      key={x}
                      className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-white/85 text-sm"
                    >
                      {x}
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SCROLL SECTIONS */}
        <section className="mx-auto max-w-6xl px-4 py-14 space-y-12">
          <motion.div {...fadeUp(0)} className="glass rounded-3xl p-7 md:p-9">
            <div className="text-2xl font-semibold">Why InfraPilot Tech</div>
            <p className="mt-3 text-white/70">
              You get clarity, structure, and execution—built like a real product.
              Premium UI, premium delivery.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0)}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              { t: "Resume + LinkedIn", d: "Premium rewrite with ATS alignment." },
              { t: "Interview Prep", d: "Mock rounds + question bank." },
              { t: "Career Strategy", d: "Plan + weekly execution cadence." },
            ].map((c) => (
              <div key={c.t} className="glass rounded-3xl p-6">
                <div className="text-lg font-semibold">{c.t}</div>
                <div className="mt-2 text-white/70 text-sm">{c.d}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0)} className="glass rounded-3xl p-7 md:p-9">
            <div className="text-2xl font-semibold">Ready to begin?</div>
            <p className="mt-3 text-white/70">
              Create an account and choose a plan that fits your timeline.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a className="btn-blue" href="/auth?mode=signup">
                Sign up
              </a>
              <a className="btn-outline" href="/contact">
                Contact
              </a>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </AppLayout>
  );
}