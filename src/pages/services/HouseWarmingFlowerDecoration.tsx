import ServiceTemplate from "@/components/ServiceTemplate";

export default function HouseWarmingFlowerDecoration() {
  return (
    <ServiceTemplate
      title="House Warming Flower Decoration"
      description="Warm and welcoming floral setups to bless your new home — from simple entry decorations to full living-room floral styling."
      inclusions={[
        "Entry & doorway decor",
        "Living room floral accents",
        "Pooja area styling",
        "Quick setup service",
      ]}
      images={[
        "/services/house1.jpg",
        "/services/house2.jpeg",
        "/services/house4.jpeg",
        "/services/hw.jpeg",
        "/services/hw2.jpeg",
        "/services/hw3.jpeg",
        "/services/hw4.jpeg",
        "/services/hw5.jpeg",
        "/services/hw6.jpeg",
      ]}
    />
  );
}
