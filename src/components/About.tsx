import aboutBg from "@/assets/floral-bg.jpg"; // ✅ Add a soft floral background image to assets folder

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#3b2a23] relative text-white"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ Title + Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#E2C39A]">
            Crafting Moments into Memories
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At <span className="font-semibold text-white">Siree Events</span>, we believe every celebration deserves 
            to shine with beauty and emotion. From <strong>elegant weddings </strong> 
            to joyful <strong>birthday celebrations</strong> and traditional 
            <strong> cultural ceremonies</strong>, we transform your space with 
            premium floral and balloon decorations — tailored to your dreams.
          </p>
          <p className="mt-4 text-lg text-gray-200">
            With expert craftsmanship, creative designs, and high-quality décor
            materials, we ensure your special day is unforgettable.
          </p>
        </div>

        {/* ✅ Premium Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#E2C39A]">
          <img
            src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
            alt="Premium Decoration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};
