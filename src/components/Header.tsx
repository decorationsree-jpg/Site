import { useState } from "react";
import { Menu, X } from "lucide-react";
import floralBg from "@/assets/floral-bg2.jpeg"; // ✅ Import background image

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "#hero" },
    { name: "About Us", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Contact Us", to: "#contact" },
  ];

  return (
    <header
  className="fixed w-full top-0 left-0 z-50 shadow-md bg-cover bg-center bg-no-repeat border-b-0"

      style={{
        backgroundImage: `url(${floralBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        borderBottom: "none", // ✅ No divider line
      }}
    >
      {/* ✅ Transparent Overlay */}
      <div
        className="w-full h-full"
        style={{
          background: "rgba(0,0,0,0.32)", // ✅ Slight transparency for hero blend
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* ✅ Gold Logo */}
          <h1
            className="text-2xl font-extrabold tracking-wide"
            style={{ color: "#D4AF37" }}
          >
            Siree Events
          </h1>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="font-medium transition-all hover:opacity-80"
                style={{ color: "#FAF3E0" }}
              >
                {item.name}
              </a>
            ))}

            {/* ✅ Book Now Button */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: "#D4AF37",
                color: "#2B1B12",
                border: "2px solid #A67C52",
              }}
            >
              Book Now
            </a>
          </nav>

          {/* ✅ Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} style={{ color: "#D4AF37" }} />
            ) : (
              <Menu size={28} style={{ color: "#D4AF37" }} />
            )}
          </button>
        </div>

        {/* ✅ Mobile Dropdown */}
        {open && (
          <div
            className="md:hidden px-6 py-4 space-y-4"
            style={{
              background: "rgba(0,0,0,0.75)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="block font-medium transition-all"
                style={{ color: "#FAE8C8" }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="block text-center px-5 py-3 rounded-full font-semibold"
              style={{
                backgroundColor: "#D4AF37",
                color: "#2B1B12",
                border: "2px solid #A67C52",
              }}
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
