import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout";
import serviceImg from "../assets/images/service1.png";

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

const plans = [
  {
    title: "1 Month Career Support",
    price: "$199",
    points: [
      "Resume & ATS Optimization",
      "Targeted Job Applications",
      "Professional Submissions",
      "Weekly Progress Tracking",
    ],
  },
  {
    title: "3 Months Career Support",
    price: "$549",
    points: [
      "Everything in 1 Month",
      "Interview Preparation",
      "LinkedIn Profile Optimization",
      "Ongoing Application Strategy",
    ],
  },
  {
    title: "6 Months Career Support",
    price: "$999",
    points: [
      "End-to-End Job Search",
      "Dedicated Career Manager",
      "High Volume Applications",
      "Priority Interview Support",
    ],
  },
];

const cards = [
  {
    title: "Resume Optimization",
    desc: "ATS-ready resume structure, impact-driven bullet points, and a clean premium format recruiters prefer.",
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews, personalized feedback, and role-specific question banks to boost confidence.",
  },
  {
    title: "Career Strategy",
    desc: "A clear weekly roadmap for applications, networking, upskilling, and interview tracking.",
  },
  {
    title: "LinkedIn Profile Makeover",
    desc: "Recruiter-optimized headline, keywords, and profile positioning for inbound opportunities.",
  },
  {
    title: "Portfolio & Projects Review",
    desc: "Present your projects like real products with clear storytelling, visuals, and proof of impact.",
  },
  {
    title: "Targeted Job Applications",
    desc: "Precision job targeting based on role, location, visa status, and company preferences.",
  },
  {
    title: "Managed Job Applications",
    desc: "We apply on your behalf with accuracy, consistency, and zero shortcuts.",
  },
  {
    title: "Application Tracking",
    desc: "Ongoing tracking, follow-ups, and performance insights across all applications.",
  },
  {
    title: "Consultation & Guidance",
    desc: "Clear next steps based on your profile, experience level, and career goals.",
  },
];

export default function Services() {
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
        {/* Hero */}
        <motion.div {...fadeUp(0)} className="text-center">
          <img
            src={serviceImg}
            alt="Services"
            className="mx-auto mb-6 w-full max-w-xl rounded-3xl object-cover shadow-xl"
          />
          <h1 className="text-4xl font-semibold">
            Managed Job Application Support
          </h1>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            We apply to jobs for you — so you can focus on learning, interviews,
            and growing your IT career.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              {...fadeUp(0.1 + i * 0.1)}
              className="glass rounded-3xl p-6 flex flex-col"
            >
              <div>
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <div className="mt-2 text-3xl font-bold text-blue-500">
                  {plan.price}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {plan.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-blue-400">✔</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/contact"
                className="btn-blue mt-6 w-full justify-center"
              >
                Pay Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 text-center text-sm text-white/50"
        >
          Payments currently redirect to contact form. Stripe integration coming
          soon.
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}