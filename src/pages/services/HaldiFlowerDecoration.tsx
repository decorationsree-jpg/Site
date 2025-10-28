import ServiceTemplate from "@/components/ServiceTemplate";

export default function HaldiFlowerDecoration() {
  return (
    <ServiceTemplate
      title="Haldi Flower Decoration"
      description="Traditional haldi mandap designs and floral drapes using fresh seasonal flowers that reflect cultural warmth and charm."
      inclusions={[
        "Fresh flower mandap",
        "Seating & entrance decor",
        "Garland & toran arrangements",
        "On-site maintenance",
      ]}
      images={[
        "/services/haldi.jpg",
        "/services/haldi2.jpg",
        "/services/haldi5.jpeg",
      ]}
    />
  );
}
