import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import LogoMarquee from "../components/LogoMarquee";
import heroVideo from "../assets/videos/herov.mp4";

// ✅ sections
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";

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
        className="text-black"
      >
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl px-4 pt-24">
          <div className="relative mt-2 rounded-3xl overflow-hidden glass h-[520px]">
            {/* VIDEO */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10 px-6 py-16 md:px-10 md:py-20 h-full flex flex-col justify-center">
              <motion.h1
                {...fadeUp(0)}
                className="text-4xl md:text-6xl font-semibold leading-tight text-white"
              >
                Premium Career Consulting
                <span className="block text-white/80">We turn skills into offers.</span>
              </motion.h1>

              <motion.p
  {...fadeUp(0.1)}
  className="mt-5 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed"
>
  You focus on growth. We focus on{" "}
  <span className="font-semibold text-white">results.</span>
  <br />
  With tailored resumes, consistent applications, and expert guidance, we turn effort into real interview calls.
</motion.p>

              <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-3">
                <a href="/services" className="btn-blue">
                  Explore Services
                </a>
                <a href="/auth?mode=signup" className="btn-blue">
                  Get Started
                </a>
              </motion.div>

              <motion.div {...fadeUp(0.25)} className="mt-10 grid gap-3 sm:grid-cols-3">
                {["ATS-ready resumes", "Mock interviews", "Job strategy"].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl bg-white/10 border border-white/50 px-4 py-3 text-white text-sm"
                  >
                    {x}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 py-14 space-y-12">
        <motion.div {...fadeUp(0)} className="glass rounded-3xl p-7 md:p-9">
  {/* Title */}
  <div className="text-3xl font-semibold text-white drop-shadow-sm">
    Why InfraPilot Tech
  </div>

  {/* Highlight line */}
  <p className="mt-4 text-xl font-medium text-white">
    We don’t just prepare resumes.    we prepare careers.
  </p>

  {/* Description */}
  <p className="mt-3 text-white/85 text-sm md:text-base leading-relaxed">
    Infrapilot Tech works closely with students and IT professionals to create
    job-ready profiles backed by practical guidance, personalized feedback, and
    a clear execution plan. Every service is built with real hiring standards in
    mind, helping candidates confidently navigate interviews and secure the
    right opportunities faster.
  </p>
</motion.div>

          <motion.div {...fadeUp(0)} className="grid gap-8 md:grid-cols-3">
  {[
    {
      t: "Our Mission",
      d: "At InfraPilot Tech, our mission is to help students and IT professionals build strong, job-ready profiles. We focus on practical guidance, honest feedback, and structured support to help candidates succeed in today’s competitive IT job market.",
    },
    {
      t: "Our Services",
      d: "We offer end-to-end IT career support, including ATS-optimized resume creation, interview preparation, certification guidance, and managed job application assistance. Our services are designed to match real hiring requirements and individual career goals.",
    },
    {
      t: "Our Process",
      d: "We follow a simple and transparent process. First, we understand your background and career goals. Then we create a customized plan that includes resume improvements, interview preparation, and job search guidance. We keep you informed at every step and provide continuous support throughout the journey.",
    },
  ].map((c) => (
    <div
      key={c.t}
      className="glass rounded-3xl p-8 flex flex-col"
    >
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
        {c.t}
      </h3>

      {/* Divider for premium separation */}
      <div className="mt-3 h-[2px] w-12 bg-white/30 rounded-full" />

      {/* Description */}
      <p className="mt-4 text-white text-base md:text-md leading-relaxed">
        {c.d}
      </p>
    </div>
  ))}
</motion.div>

          <LogoMarquee />

          {/* ✅ SECTIONS ON HOME */}
          <AboutSection />
          <ServicesSection />
          <ContactSection />

          <motion.div {...fadeUp(0)} className="glass rounded-3xl p-7 md:p-9">
            <div className="text-2xl font-semibold text-white drop-shadow-sm">
              Ready to begin?
            </div>
            <p className="mt-3 text-white">
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