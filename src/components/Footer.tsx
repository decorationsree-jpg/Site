import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative text-[#FAF3E0] py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/f.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#2B1B12]/90 backdrop-blur-[0px]" />
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* Brand Message + Social Icons */}
        <div>
          {/* ✨ Beautiful Quote */}
          <p className="text-sm italic mb-4 text-[#D4AF37]">
            Celebrate Every Moment With Elegance ✨
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mb-6">
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

            {/* ✅ YouTube */}
            <a
              href="https://www.youtube.com/@siree_events"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-all duration-200"
            >
              <Youtube size={28} strokeWidth={1.7} />
            </a>
          </div>

          {/* 🌟 Why Choose Us */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">
              Why Choose Us
            </h4>
            <p className="text-xs leading-relaxed text-[#FAF3E0]/90">
              We are the leading{" "}
              <strong>event management company in Vijayawada</strong> offering
              premium{" "}
              <strong>
                wedding and event planning, birthday party organization,
                corporate event management, floral and stage decoration
              </strong>
              , and more. Whether you're searching for{" "}
              <strong>
                professional event organizers near Vijayawada, affordable event
                planners, or customized theme decoration
              </strong>
              , <strong>Sireeevents Vijayawada</strong> delivers one-stop
              solutions for all your celebration needs.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Services List */}
        <div>
          <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "birthday-balloon-decoration",
              "haldi-flower-decoration",
              "engagement-flower-decoration",
              "wedding-flower-decoration",
              "half-saree-flower-decoration",
              "dhoti-function-decoration",
              "house-warming-flower-decoration",
              "anniversary-event-decoration",
              "baby-shower-flower-decoration",
              "cradle-ceremony-flower-decoration",
              "office-inauguration-decoration",
            ].map((slug) => (
              <li key={slug}>
                <Link
                  to={`/services/${slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-[#D4AF37]"
                >
                  {slug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info + Map */}
        <div>
          <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm mb-6">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#D4AF37]" />
              <a href="tel:+919876543210" className="hover:text-[#D4AF37]">
                +91 9666204467
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#D4AF37]" />
              <a
                href="mailto:sireedecors@gmail.com"
                className="hover:text-[#D4AF37]"
              >
                sireedecors@gmail.com
              </a>
            </li>
          </ul>

          {/* 🗺 Google Maps */}
          <div className="w-48 h-48 border border-[#D4AF37] overflow-hidden mx-auto md:mx-0">
  <iframe
    title="Sree Events Vijayawada"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.024691046447!2d80.54543227471566!3d16.474419027685243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f192c4000001%3A0x28bf968575e25d86!2sSri%20Rama%20Nagar%2C%20Yerrabalem%2C%20Mangalagiri%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1699011551247!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
