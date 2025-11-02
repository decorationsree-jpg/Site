import bookBg from "/public/b.jpg";

export const BookNow = () => {
  return (
    <section
      id="book-now"
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 flex items-center"
      style={{
        backgroundImage: `url(${bookBg})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        
        {/* ✅ Left Text Block */}
        <div className="max-w-2xl mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#E2C39A]">
            Ready to Celebrate in Style?
          </h2>
          <p className="text-lg text-gray-200">
            Let <strong>Sree Events Vijayawada</strong> turn your special occasion 
            into a timeless memory. Whether it’s a <strong>wedding</strong>, 
            <strong> reception</strong>, <strong>birthday</strong>, or 
            <strong> corporate celebration</strong> — our creative planners will 
            design it with beauty, culture, and precision.
          </p>
        </div>

        {/* ✅ Book Now Button */}
        <div className="flex justify-start md:justify-end w-full md:w-auto">
          <a
            href="https://wa.me/919700450027?text=Hello!%20I%20want%20to%20book%20an%20event%20with%20Sree%20Events%20Vijayawada."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black font-bold uppercase tracking-wide text-xl md:text-2xl 
                       px-10 py-6 rounded-none shadow-[4px_4px_0_#b8932c] hover:bg-[#b8932c] 
                       transition-all duration-200 border-2 border-[#D4AF37]"
          >
            📅 Book Now
          </a>
        </div>
      </div>
    </section>
  );
};
