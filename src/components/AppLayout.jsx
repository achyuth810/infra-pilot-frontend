import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
