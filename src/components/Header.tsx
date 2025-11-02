import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import floralBg from "@/assets/floral-bg2.jpeg"; // ✅ Background image
import logo from "/sreelogo.jpg"; // ✅ Import logo (path from public folder)

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "#services" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 shadow-md bg-cover bg-center bg-no-repeat border-b-0"
      style={{
        backgroundImage: `url(${floralBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        borderBottom: "none",
      }}
    >
      {/* ✅ Transparent Overlay */}
      <div
        className="w-full h-full"
        style={{
          background: "rgba(0,0,0,0.32)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* ✅ Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Siree Events Logo"
              className="w-10 h-10 object-cover rounded-full border-2 border-[#D4AF37]"
            />
            <h1
              className="text-2xl font-extrabold tracking-wide"
              style={{ color: "#D4AF37" }}
            >
              Siree Events
            </h1>
          </div>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.to.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.to}
                  className="font-medium transition-all hover:opacity-80"
                  style={{ color: "#FAF3E0" }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="font-medium transition-all hover:opacity-80"
                  style={{ color: "#FAF3E0" }}
                >
                  {item.name}
                </Link>
              )
            ))}
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
              item.to.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.to}
                  className="block font-medium transition-all"
                  style={{ color: "#FAE8C8" }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block font-medium transition-all"
                  style={{ color: "#FAE8C8" }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
