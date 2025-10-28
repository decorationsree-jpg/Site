import ServiceTemplate from "@/components/ServiceTemplate";

export default function BabyShowerFlowerDecoration() {
  return (
    <ServiceTemplate
      title="Baby Shower Flower Decoration"
      description="Soft pastel floral setups and playful props perfect for baby showers and intimate family celebrations."
      inclusions={[
        "Pastel floral backdrops",
        "Photo props & signage",
        "Table decor & sweets corner",
        "Hassle-free setup",
      ]}
      images={[
        "/services/download.jpeg",
        "/services/baby2.jpg",
        "/services/baby3.jpg",
      ]}
    />
  );
}
