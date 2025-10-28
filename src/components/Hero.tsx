import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-decoration-1.jpg";
import heroImage2 from "@/assets/hero-decoration-2.jpg";
import heroImage3 from "@/assets/hero-decoration-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Exquisite Floral Elegance",
    subtitle: "Transform Your Special Moments",
  },
  {
    image: heroImage2,
    title: "Magical Celebration Designs",
    subtitle: "Creating Memories That Last Forever",
  },
  {
    image: heroImage3,
    title: "Traditional & Modern Décor",
    subtitle: "Bringing Your Vision to Life",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
    id="hero"
    className="relative h-[88vh] md:h-screen overflow-hidden -mt-[1px] pt-0 w-full max-w-full block"
  style={{
    overflowX: "hidden",
    marginTop: "-1px",
  }}
>


      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B12]/95 via-[#2B1B12]/60 to-[#2B1B12]/90" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fadeIn duration-700">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-xl mb-4 sm:mb-6 leading-tight"
            style={{ color: "#FAF3E0" }}
          >
            {slides[currentSlide].title}
          </h1>

          <p
            className="text-lg sm:text-2xl drop-shadow-xl mb-6 sm:mb-8"
            style={{ color: "#EAD7B7" }}
          >
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#services">
              <Button
                size="lg"
                className="w-full sm:w-auto font-semibold rounded-full shadow-md transition-all hover:scale-105"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#2B1B12",
                  borderColor: "#A67C52",
                }}
              >
                Explore Services
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #D4AF37",
                  color: "#FAF3E0",
                }}
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide ? "w-6 sm:w-8 h-2" : "w-2 h-2"
            }`}
            style={{
              backgroundColor:
                index === currentSlide ? "#D4AF37" : "#D4AF37AA",
            }}
          />
        ))}
      </div>
    </section>
  );
};
