import heroBg from "../assets/images/hero3.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* dark overlay for readability */}
      <div className="min-h-screen bg-black/1">
        <Navbar />
        <main className="pt-24 text-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
}