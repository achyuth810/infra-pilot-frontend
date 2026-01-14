import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
