import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    message: ""
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToWhatsapp = () => {
    const whatsappNumber = "919700450027";
    const text = `Hello! I'm interested in your event services.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nEvent Type: ${formData.eventType}\nPreferred Date: ${formData.date}\n\nMessage: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#2B1B12] text-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptLTE4IDBjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0zNiAxOGMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-6xl md:text-7xl font-bold text-[#E2C39A] mb-4 drop-shadow-2xl">
            Contact Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's plan your event and make it unforgettable! Reach out to Sree Events Vijayawada today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-1 space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-[#D4AF37]/20 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#E2C39A] mb-6">Get in Touch</h3>
            
            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors">
                <Phone className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#E2C39A] mb-2 text-lg">Phone</h4>
                <p className="space-y-1">
                  <a href="tel:+919666204467" className="block hover:text-[#D4AF37] transition-colors">
                    +91 96662 04467
                  </a>
                  <a href="tel:+919700450027" className="block hover:text-[#D4AF37] transition-colors">
                    +91 97004 50027
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors">
                <Mail className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#E2C39A] mb-2 text-lg">Email</h4>
                <a href="mailto:sireeeventshyd@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  sireeeventshyd@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors">
                <MapPin className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#E2C39A] mb-2 text-lg">Location</h4>
                <p className="leading-relaxed">
                  Sri Rama Nagar, Yerrabalem,<br />
                  Mangalagiri - 522503
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-[#D4AF37]/20 shadow-2xl backdrop-blur-sm bg-black/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#E2C39A] mb-6">Send us a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/5 border-[#D4AF37]/20 text-white rounded-lg focus:border-[#D4AF37] transition-colors text-lg"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/5 border-[#D4AF37]/20 text-white rounded-lg focus:border-[#D4AF37] transition-colors text-lg"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border-[#D4AF37]/20 text-white rounded-lg focus:border-[#D4AF37] transition-colors text-lg"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  name="date"
                  type="date"
                  placeholder="Preferred Date"
                  className="bg-white/5 border-[#D4AF37]/20 text-white rounded-lg focus:border-[#D4AF37] transition-colors text-lg"
                  value={formData.date}
                  onChange={handleInputChange}
                />
                <div className="relative md:col-span-2">
                 <select
  name="eventType"
  className="w-full appearance-none bg-white/5 border border-[#D4AF37]/20 text-white rounded-lg text-lg p-2 pr-10 focus:border-[#D4AF37] cursor-pointer [&_option]:bg-white [&_option]:text-black [&_option:hover]:bg-[#2B1B12] [&_option:hover]:text-white"
  value={formData.eventType}
  onChange={handleInputChange}
  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
>
  <option value="">Select Event Type</option>
  <option value="Wedding Decoration">Wedding Decoration</option>
  <option value="Birthday Balloon Decoration">Birthday Balloon Decoration</option>
  <option value="Haldi Function Decoration">Haldi Function Decoration</option>
  <option value="Engagement Decoration">Engagement Decoration</option>
  <option value="Half Saree Function">Half Saree Function</option>
  <option value="Dhoti Function">Dhoti Function</option>
  <option value="House Warming">House Warming</option>
  <option value="Anniversary Event">Anniversary Event</option>
  <option value="Baby Shower">Baby Shower</option>
  <option value="Cradle Ceremony">Cradle Ceremony</option>
  <option value="Office Inauguration">Office Inauguration</option>
  <option value="Other">Other</option>
</select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D4AF37]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your event requirements..."
                  className="bg-white/5 border-[#D4AF37]/20 text-white min-h-[150px] rounded-lg focus:border-[#D4AF37] transition-colors text-lg md:col-span-2"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button
                  size="lg"
                  className={`w-full md:col-span-2 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#b8932c] transition-all duration-300 text-xl h-14 ${
                    isHovered ? 'scale-[1.02] shadow-lg' : ''
                  }`}
                  onClick={sendToWhatsapp}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Send Message on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="rounded-lg overflow-hidden border-2 border-[#D4AF37] shadow-2xl h-[400px]">
            <iframe
              title="Sree Events Vijayawada Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.024691046447!2d80.54543227471566!3d16.474419027685243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f192c4000001%3A0x28bf968575e25d86!2sSri%20Rama%20Nagar%2C%20Yerrabalem%2C%20Mangalagiri%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1699011551247!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
