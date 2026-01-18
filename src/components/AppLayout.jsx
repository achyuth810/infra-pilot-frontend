import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="pt-24 text-white">{children}</main>
      <Footer />
    </div>
  );
}
