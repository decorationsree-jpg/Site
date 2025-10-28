import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />

  {/* ✅ scroll offset for fixed header (reduced to match header height) */}
  <div className="pt-12" />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
