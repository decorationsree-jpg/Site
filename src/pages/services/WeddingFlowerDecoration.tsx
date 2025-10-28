import ServiceTemplate from "@/components/ServiceTemplate";

export default function WeddingFlowerDecoration() {
  return (
    <ServiceTemplate
      title="Wedding Flower Decoration"
      description="Bespoke wedding sets: mandap artistry, stage decor, romantic aisle treatments and floral installations for grand celebrations."
      inclusions={[
        "Mandap & stage design",
        "Venue floral installations",
        "Table centerpieces & setups",
        "Full event installation team",
      ]}
      images={[
        "/services/wed.jpeg",
        "/services/wed2.jpeg",
        "/services/wedding.jpg",
      ]}
    />
  );
}
