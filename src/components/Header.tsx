import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import floralBg from "@/assets/floral-bg2.jpeg"; // ✅ Background image
import logo from "/sreelogo.jpg"; // ✅ Import logo (path from public folder)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const services = [
    { name: "Wedding Decoration", to: "/services/wedding-flower-decoration" },
    { name: "Birthday Balloon Decoration", to: "/services/birthday-balloon-decoration" },
    { name: "Haldi Function Decoration", to: "/services/haldi-flower-decoration" },
    { name: "Engagement Decoration", to: "/services/engagement-flower-decoration" },
    { name: "Half Saree Function", to: "/services/half-saree-flower-decoration" },
    { name: "Dhoti Function", to: "/services/dhoti-function-decoration" },
    { name: "House Warming", to: "/services/house-warming-flower-decoration" },
    { name: "Anniversary Event", to: "/services/anniversary-event-decoration" },
    { name: "Baby Shower", to: "/services/baby-shower-flower-decoration" },
    { name: "Cradle Ceremony", to: "/services/cradle-ceremony-flower-decoration" },
    { name: "Office Inauguration", to: "/services/office-inauguration-decoration" },
  ];

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
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
              <Link
                key={item.name}
                to={item.to}
                className="font-medium transition-all hover:opacity-80"
                style={{ color: "#FAF3E0" }}
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium transition-all hover:opacity-80 focus:outline-none" style={{ color: "#FAF3E0" }}>
                Services <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 border border-[#D4AF37]/20">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      to={service.to}
                      className="text-[#FAF3E0] hover:bg-[#D4AF37]/20 cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              background: "rgba(0,0,0,0.90)",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block font-medium transition-all"
                style={{ color: "#FAE8C8" }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Section */}
            <div className="pt-2 border-t border-[#D4AF37]/20">
              <div className="font-medium mb-2" style={{ color: "#D4AF37" }}>
                Services
              </div>
              <div className="space-y-3 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.to}
                    className="block text-sm font-medium transition-all hover:text-[#D4AF37]"
                    style={{ color: "#FAE8C8" }}
                    onClick={() => setOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
