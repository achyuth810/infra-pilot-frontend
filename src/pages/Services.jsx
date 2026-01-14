import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const page = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const card = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const services = [
  {
    title: "Web Development",
    desc: "Modern websites and web apps with React, performance optimization, and clean UI systems.",
    items: ["Landing pages", "Dashboards", "Design systems", "SEO-ready builds"],
  },
  {
    title: "Cloud Architecture",
    desc: "Design and delivery for scalable infrastructure, hosting, CI/CD, and security basics.",
    items: ["AWS setup", "Deployment pipelines", "Scaling", "Cost optimization"],
  },
  {
    title: "Data & Analytics",
    desc: "From pipelines to reporting—build reliable data foundations for decision-making.",
    items: ["ETL/ELT", "Warehousing", "Reporting", "Data quality"],
  },
  {
    title: "Product & Delivery",
    desc: "Execution support—requirements, roadmaps, sprint planning, and stakeholder updates.",
    items: ["Discovery workshops", "Roadmaps", "Agile delivery", "Documentation"],
  },
  {
    title: "Performance & Cleanup",
    desc: "Stabilize and improve existing systems—speed, quality, security, and maintainability.",
    items: ["Refactors", "Bug fixes", "Performance", "Hardening"],
  },
  {
    title: "Consulting Retainer",
    desc: "Ongoing support for teams that need fast, reliable help without hiring full-time.",
    items: ["Weekly support", "Feature builds", "Advisory", "Priority fixes"],
  },
];

export default function Services() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-72px)] bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          Pick a service, or book a consultation and we’ll shape the right plan for your goals.
        </p>

        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="text-xl font-medium">{s.title}</div>
              <div className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-lg font-medium">Want a custom package?</div>
            <div className="text-white/70 text-sm mt-1">
              Tell us your timeline and scope—we’ll propose a plan.
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
}