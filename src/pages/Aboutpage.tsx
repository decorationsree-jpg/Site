import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BookNow } from "@/components/booknow";
import aboutBg from "/public/abt.jpg"; // Make sure to add this image to public folder

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* ✅ scroll offset for fixed header */}
      <div className="pt-12" />

      <main className="flex-grow">
        {/* About Us Section */}
        <section
          className="relative text-white py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div className="relative container mx-auto px-6 max-w-4xl z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#E2C39A]">
                About Us
              </h1>
              <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                Welcome to Sireeevents Vijayawada, your premier destination for exceptional event management and decoration services. As one of the leading event management companies in Vijayawada, we specialize in transforming ordinary spaces into extraordinary experiences through our creative and professional approach to event planning and decoration.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                Our expertise spans across a wide spectrum of celebrations, from grand wedding ceremonies and elegant corporate events to intimate birthday parties. We take pride in our ability to deliver complete event planning and decoration services that perfectly align with our clients' visions and exceed their expectations.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                At Sree Events, we offer comprehensive services including traditional wedding décor, engagement decoration, reception management, and destination wedding planning. Our talented team excels in creating stunning floral arrangements, innovative balloon decorations, and sophisticated lighting setups that bring your dream event to life.
              </p>

              <p className="text-lg leading-relaxed text-gray-200">
                What sets us apart is our commitment to providing affordable event management solutions without compromising on quality. Whether you're planning a wedding, corporate event, or family celebration in Vijayawada or across Andhra Pradesh, our professional team ensures every detail is handled with precision, creativity, and care.
              </p>
            </div>
          </div>
        </section>

        {/* Book Now Section */}
        <BookNow />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default AboutPage;
