export default function Contact() {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mt-4 text-white/70">
            Reach out to discuss your project or ideas.
          </p>
  
          <div className="mt-8 space-y-4">
            <input
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
            />
            <input
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
            />
  
            <button className="w-full py-3 rounded-xl bg-white text-black font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }