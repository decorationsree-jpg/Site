import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ServiceTemplate({ title, description, inclusions, images }) {

  // ✅ Always open page from top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="bg-[#1b1420] text-[#FAF3E0] min-h-screen pb-24">
      <div className="container mx-auto px-4 py-12">

        {/* ✅ Back Home Button */}
        <div className="mb-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <Button className="bg-[#D4AF37] text-black hover:bg-[#b8932c]">
              ← Back to Home
            </Button>
          </Link>
        </div>

        {/* ✅ Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#D4AF37] mb-6">
          {title}
        </h1>

        {/* ✅ Description */}
        <p className="text-center text-[#BBAE9D] max-w-3xl mx-auto mb-10">
          {description}
        </p>

        {/* ✅ Inclusions */}
        {inclusions && (
          <div className="bg-[#2b1b2e] p-6 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">
              What’s Included:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#FAF3E0]">
              {inclusions.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} image ${i + 1}`}
              className="rounded-xl shadow-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* ✅ Book Now Button (Now works on all services!) */}
        <div className="text-center">
          <Button
            onClick={() =>
              window.open(
                `https://wa.me/919700450027?text=${encodeURIComponent(
                  `Hello! I'm interested in the ${title} decoration service. Please contact me.`
                )}`,
                "_blank"
              )
            }
            className="bg-[#D4AF37] text-black font-semibold px-8 py-4 text-lg rounded-xl hover:bg-[#b8932c] transition"
          >
            📩 Book Now
          </Button>
        </div>

      </div>
    </main>
  );
}
