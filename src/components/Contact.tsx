import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsapp = () => {
    const whatsappNumber = "919700450027";
    const text = `Hello! My name is ${name}. My phone number is ${phone}. Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your event and create something beautiful together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ✅ Contact Details */}
          <div className="space-y-10">

            {/* ✅ Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-full">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+919666204467" className="hover:underline">
                    +91 96662 04467
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:+919700450027" className="hover:underline">
                    +91 97004 50027
                  </a>
                </p>
              </div>
            </div>

            {/* ✅ Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-full">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">sireeeventshyd@gmail.com</p>
              </div>
            </div>

            {/* ✅ Location + Button */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-full">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Sri Rama Nagar, Yerrabalem, Mangalagiri<br />
                  Pin code: 522503
                </p>

                {/* ✅ Maps button — not iframe */}
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=Sri+Rama+Nagar+Yerrabalem+Mangalagiri+522503",
                      "_blank"
                    )
                  }
                  className="mt-3 bg-[#D4AF37] text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#b8932c] transition"
                >
                  📍 View Location on Maps
                </Button>
              </div>
            </div>
          </div>

          {/* ✅ WhatsApp Contact Form */}
          <Card className="border-border shadow-md">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-background"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-background"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Textarea
                  placeholder="Tell us about your event..."
                  className="bg-background min-h-[130px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={sendToWhatsapp}
                >
                  Send Message on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
