import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import floralBg from "@/assets/floral-bg2.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItem = (label: string, href: string) => (
    <Link
      to={href}
      className={`relative transition font-medium ${
        location.hash === href
          ? "text-primary font-semibold"
          : "text-white hover:text-primary"
      }`}
      onClick={(e) => {
        setOpen(false);
        if (href.startsWith("#")) {
          e.preventDefault();
          scrollToHash(href);
        }
      }}
    >
      {label}
    </Link>
  );

  return (
    <nav
  className="w-full fixed top-0 left-0 z-50 shadow-md bg-no-repeat bg-center"
  style={{
    backgroundImage: `url(${floralBg})`,
    backgroundSize: "30%", // ✅ Less zoom (control this value)
    backgroundPosition: "top center",
  }}
>

  <div className="absolute inset-0 bg-black/35 backdrop-blur-sm"></div>


      {/* ✅ Content above overlay */}
      <div className="relative max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-white drop-shadow-md"
          onClick={() => setOpen(false)}
        >
          Siree Events
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItem("Home", "/")}
          {navItem("Services", "#services")}
          {navItem("Gallery", "#gallery")}
          <Link
            to="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#contact");
              setOpen(false);
            }}
          >
            <Button className="rounded-full px-6 py-2 shadow-sm hover:shadow-lg transition bg-primary text-white">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+919876543210"
            className="text-white p-2 rounded-full hover:bg-white/10 active:scale-90 transition"
          >
            <Phone size={22} />
          </a>
          <Link
            to="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#contact");
              setOpen(false);
            }}
          >
            <Button className="px-4 py-1 rounded-full text-sm font-semibold shadow-sm bg-primary text-white">
              Book
            </Button>
          </Link>
          <button
            className="p-2 text-white hover:text-primary transition active:scale-90"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden relative bg-black/60 backdrop-blur-md animate-slideDown">
          <div className="flex flex-col p-6 space-y-6 text-lg text-white">
            {navItem("Home", "/")}
            {navItem("Services", "#services")}
            {navItem("Gallery", "#gallery")}
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
                setOpen(false);
              }}
            >
              <Button className="w-full rounded-full py-3 text-base font-semibold bg-primary text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
