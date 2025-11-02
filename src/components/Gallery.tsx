import { useState } from "react";

const galleryImages = [
  "/services/gal1.jpeg",
  "/services/gal2.jpeg",
  "/services/gal3.jpeg",
  "/services/gal4.jpeg",
  "/services/gal5.jpeg",
  "/services/gal6.jpeg",
  "/services/gal7.jpeg",
  "/services/gal8.jpeg",
  "/services/gal9.jpeg",
  "/services/gal10.jpeg",
  "/services/haldi2.jpg",
  "/services/anniversary.jpg",
  "/services/engage2.jpg",
  "/services/haldi3.jpg",
  "/services/baby.jpg",
  "/services/baby2.jpg",
  "/services/dhoti3.jpg",
  "/services/office3.jpg",
  "/services/wedding.jpg",
  "/services/engagement.jpg",
  "/services/baby4.jpg",
  "/services/cradle2.jpg",
  "/services/engage3.jpg",
  "/services/gal11.jpeg",
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine images per slide based on screen width
  const getImagesPerSlide = () => {
    if (window.innerWidth >= 1024) return 4; // lg+
    if (window.innerWidth >= 640) return 2; // sm+
    return 1; // mobile
  };

  const imagesPerSlide = getImagesPerSlide();

  // Split images into slides
  const slides = [];
  for (let i = 0; i < galleryImages.length; i += imagesPerSlide) {
    slides.push(galleryImages.slice(i, i + imagesPerSlide));
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-9xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning decorations and celebrations
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slideImages, slideIndex) => (
              <div
                key={slideIndex}
                className={`flex-shrink-0 w-full grid gap-4 ${
                  imagesPerSlide === 4
                    ? "grid-cols-2 lg:grid-cols-4"
                    : imagesPerSlide === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {slideImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden shadow-lg aspect-square cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-white p-2 rounded-full z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-white p-2 rounded-full z-10"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};
