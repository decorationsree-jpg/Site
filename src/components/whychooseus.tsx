import whyBg from "/public/w.jpg";
import whyImg from "/public/w2.jpg";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

export const WhyChooseUs = () => {
  const { elementRef: textRef, isVisible: isTextVisible } = useAnimateOnScroll();
  const { elementRef: imageRef, isVisible: isImageVisible } = useAnimateOnScroll();

  return (
    <section
      id="why-choose-us"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white py-20"
      style={{
        backgroundImage: `url(${whyBg})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ✅ Text Content with gliding animation */}
        <div
          ref={textRef}
          className={`space-y-6 text-center md:text-left transform transition-all duration-1000 ${
            isTextVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E2C39A]">
            Why Choose <span className="text-white">Sireeevents</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Choosing <strong>Sireeevents Vijayawada</strong> means partnering with
            a team that transforms your ideas into unforgettable experiences. 
            As one of the <strong>top event planners in Vijayawada</strong>, we bring 
            creativity, precision, and elegance to every celebration.
          </p>

          <ul className="space-y-3 text-gray-300 text-base md:text-lg">
            <li>🌟 Decade of expertise in <strong>event management services in Vijayawada</strong>.</li>
            <li>💐 Stunning <strong>wedding, engagement, and reception décor</strong> concepts.</li>
            <li>🎈 Innovative <strong>birthday and themed party planning</strong> ideas.</li>
            <li>💼 Trusted <strong>corporate event organizers near Vijayawada</strong>.</li>
            <li>🎨 Custom <strong>floral, balloon, lighting, and stage decoration</strong> designs.</li>
            <li>💰 <strong>Affordable packages</strong> with premium quality assurance.</li>
          </ul>

          <p className="mt-6 text-gray-300 text-base md:text-lg">
            We take pride in being among the{" "}
            <strong>best event planners in Andhra Pradesh</strong>, delivering
            seamless <strong>wedding, corporate, and cultural events</strong> 
            that leave lasting impressions.
          </p>
        </div>

        {/* ✅ Image with gliding animation */}
        <div
          ref={imageRef}
          className={`rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E2C39A] transform transition-all duration-1000 ${
            isImageVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <img
            src={whyImg}
            alt="Elegant Event Setup by Sree Events Vijayawada"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};
