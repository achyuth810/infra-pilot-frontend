export default function Services() {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-semibold mb-10">Services</h1>
  
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-medium">Web Development</h3>
              <p className="mt-2 text-white/70">
                Modern, fast, responsive websites using React and Tailwind.
              </p>
            </div>
  
            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-medium">AI Resume Tools</h3>
              <p className="mt-2 text-white/70">
                ATS-optimized resumes and AI-driven career tools.
              </p>
            </div>
  
            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-medium">Cloud & Data</h3>
              <p className="mt-2 text-white/70">
                Scalable cloud systems and data engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }