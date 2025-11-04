import aboutBg from "/public/abg.jpg";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

export const About = () => {
  const { elementRef: textRef, isVisible: isTextVisible } = useAnimateOnScroll();
  const { elementRef: imageRef, isVisible: isImageVisible } = useAnimateOnScroll();
  return (
    <section
      id="about"
      className="relative text-white bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen py-16"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ Title + Text */}
        <div
          ref={textRef}
          className={`text-center md:text-left transform transition-all duration-1000 ${
            isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E2C39A]">
            Crafting Memorable
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            <span className="font-semibold text-white">SireeEvents Vijayawada</span> is one of the 
            <strong> best event management companies in Vijayawada</strong>, 
            offering complete <strong>event planning and decoration services</strong> 
            for all occasions. Whether it’s a grand <strong>wedding celebration</strong>, 
            an elegant <strong>corporate event</strong>, or a fun-filled 
            <strong> birthday party</strong>, our team of 
            <strong> professional event organizers near Vijayawada</strong> ensures every 
            detail is handled with precision and creativity.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            As one of the <strong>top event planners in Vijayawada</strong>, we 
            specialize in <strong>traditional wedding décor</strong>, 
            <strong> engagement decoration</strong>, <strong>reception management</strong>, 
            and <strong>destination weddings</strong>. From <strong>floral decorations</strong>, 
            <strong> balloon décor</strong>, and <strong>lighting setups</strong> 
            to <strong>theme-based event designs</strong>, we create experiences that 
            reflect your style and story. Choose <strong>Sree Events</strong> for 
            <strong> affordable event management in Vijayawada</strong> — your 
            <strong> one-stop solution</strong> for weddings, parties, and 
            <strong> corporate events in Andhra Pradesh</strong>.
          </p>
        </div>

        {/* ✅ Premium Image */}
        <div
          ref={imageRef}
          className={`rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E2C39A] transform transition-all duration-1000 ${
            isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <img
            src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
            alt="Premium Decoration by Sree Events Vijayawada"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};
