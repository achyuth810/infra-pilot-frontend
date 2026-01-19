import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Anjali M", role: "Data Analyst", rating: 5, text: "InfraPilot completely changed my job search. I started getting interview calls within 3 weeks." },
  { name: "Rahul K", role: "Cloud Engineer", rating: 4.5, text: "Their ATS optimization is real. Recruiters started replying after months of silence." },
  { name: "Sneha P", role: "Software Engineer", rating: 5, text: "Mock interviews boosted my confidence massively. I cracked two final rounds." },
  { name: "Vivek S", role: "DevOps Engineer", rating: 4, text: "Structured process, clear feedback, and honest guidance. Worth every dollar." },
  { name: "Karthik R", role: "Backend Developer", rating: 5, text: "They applied to jobs for me while I focused on prep. Game changer." },
  { name: "Priya N", role: "QA Engineer", rating: 4.5, text: "Resume rewrite alone improved my response rate instantly." },
  { name: "Amit T", role: "AWS Engineer", rating: 5, text: "InfraPilot understands hiring deeply. This is not generic coaching." },
  { name: "Neha D", role: "Frontend Developer", rating: 4, text: "LinkedIn makeover helped recruiters find me organically." },
  { name: "Suresh V", role: "IT Support Specialist", rating: 4.5, text: "Clear roadmap and weekly check-ins kept me accountable." },
  { name: "Pooja S", role: "Career Switcher", rating: 5, text: "From zero clarity to interviews in one month. Highly recommend." },
];

export default function Testimonials() {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white">What Our Clients Say</h2>
        <p className="mt-3 text-white/100 max-w-2xl">
          Real stories from professionals who turned skills into interview calls.
        </p>

        {/* FIXED: Using .premium-box for the exact Hero color. 
            Removed manual bg-white/25 and border-white/25.
        */}
        <div className="mt-10 overflow-hidden premium-box">
          <div className="flex gap-6 px-8 py-10 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}