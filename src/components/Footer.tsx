import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2B1B12] text-[#FAF3E0] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Message + Social Icons */}
<div>
  {/* ✨ Beautiful Quote */}
  <p className="text-sm italic mb-4 text-[#D4AF37]">
    Celebrate Every Moment With Elegance ✨
  </p>

  {/* Social Icons */}
  <div className="flex space-x-5">
    {/* ✅ Instagram */}
    <a
      href="https://www.instagram.com/siree_events?igsh=MTJpNzl4YmVvbng3dg%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#D4AF37] transition-all duration-200"
    >
      <Instagram size={28} strokeWidth={1.7} />
    </a>

    {/* ✅ Facebook */}
    <a
      href="https://www.facebook.com/share/1MPn8BPCP8/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#D4AF37] transition-all duration-200"
    >
      <Facebook size={28} strokeWidth={1.7} />
    </a>
  </div>
</div>



        {/* Services List */}
        <div>
          <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/birthday-balloon-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Birthday Balloon Decoration</Link></li>
            <li><Link to="/services/haldi-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Haldi Flower Decoration</Link></li>
            <li><Link to="/services/engagement-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Engagement Flower Decoration</Link></li>
            <li><Link to="/services/wedding-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Wedding Flower Decoration</Link></li>
            <li><Link to="/services/half-saree-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Half Saree Flower Decoration</Link></li>
            <li><Link to="/services/dhoti-function-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Dhoti Function Decoration</Link></li>
            <li><Link to="/services/house-warming-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">House Warming Flower Decoration</Link></li>
            <li><Link to="/services/anniversary-event-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Anniversary Event Decoration</Link></li>
            <li><Link to="/services/baby-shower-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Baby Shower Flower Decoration</Link></li>
            <li><Link to="/services/cradle-ceremony-flower-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Cradle Ceremony Flower Decoration</Link></li>
            <li><Link to="/services/office-inauguration-decoration" onClick={() => window.scrollTo(0,0)} className="hover:text-[#D4AF37]">Office Inauguration Decoration</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#D4AF37]" />
              <a href="tel:+919876543210" className="hover:text-[#D4AF37]">
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#D4AF37]" />
              <a href="mailto:sireedecors@gmail.com" className="hover:text-[#D4AF37]">
                sireedecors@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-[#3e2f2a] pt-6 text-center text-xs text-[#BBAE9D]">
        © {new Date().getFullYear()} Siree Decors. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
