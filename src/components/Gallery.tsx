

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
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning decorations and celebrations
          </p>
        </div>

        {/* ✅ Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
            >
            <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
