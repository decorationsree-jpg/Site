import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  { title: "Birthday Balloon Decoration", image: "/services/birth1.jpeg", slug: "birthday-balloon-decoration" },
  { title: "Haldi Flower Decoration", image: "/services/haldi.jpg", slug: "haldi-flower-decoration" },
  { title: "Engagement Flower Decoration", image: "/services/engage.jpg", slug: "engagement-flower-decoration" },
  { title: "Wedding Flower Decoration", image: "/services/wed.jpeg", slug: "wedding-flower-decoration" },
  { title: "Half Saree Flower Decoration", image: "/services/half.jpg", slug: "half-saree-flower-decoration" },
  { title: "Dhoti Function Decoration", image: "/services/dhoti.jpg", slug: "dhoti-function-decoration" },
  { title: "House Warming Flower Decoration", image: "/services/house1.jpg", slug: "house-warming-flower-decoration" },
  { title: "Anniversary Event Decoration", image: "/services/anniversary1.jpg", slug: "anniversary-event-decoration" },
  { title: "Baby Shower Flower Decoration", image: "/public/bs.jpg", slug: "baby-shower-flower-decoration" },
  { title: "Cradle Ceremony Flower Decoration", image: "/services/cradle.jpg", slug: "cradle-ceremony-flower-decoration" },
  { title: "Office Inauguration Decoration", image: "/services/office.jpg", slug: "office-inauguration-decoration" },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#FFF8E7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4E342E]">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-2 mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.slug}`}>
              <Card className="overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer rounded-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover object-center rounded-none"
                />
                <CardContent className="py-4 text-center bg-white rounded-none">
                  <h3 className="text-lg font-semibold text-[#4E342E]">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
