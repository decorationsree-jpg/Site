import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/whychooseus";
import { BookNow } from "@/components/booknow";
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

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

         <section id="achievements">
          <Achievements />
        </section>

        <section id="booknow">
          <BookNow />
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
