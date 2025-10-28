import ServiceTemplate from "@/components/ServiceTemplate";

export default function EngagementFlowerDecoration() {
  return (
    <ServiceTemplate
      title="Engagement Flower Decoration"
      description="Romantic floral arches, aisle styling and mood lighting crafted to set the perfect tone for your engagement ceremony."
      inclusions={[
        "Floral arch & backdrop",
        "Aisle & table styling",
        "Accent lighting",
        "Consultation & execution",
      ]}
      images={[
        "/services/engage5.jpeg",
        "/services/engage7.jpeg",
        "/services/engage3.jpg",
      ]}
    />
  );
}
