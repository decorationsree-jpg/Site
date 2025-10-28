import ServiceTemplate from "@/components/ServiceTemplate";

export default function AnniversaryEventDecoration() {
  return (
    <ServiceTemplate
      title="Anniversary Event Decoration"
      description="Romantic themes, memory lanes and elegant centerpieces for anniversary celebrations that feel personal and timeless."
      inclusions={[
        "Memory lane displays",
        "Table centerpieces",
        "Backdrop & lighting",
        "Coordination with venue",
      ]}
      images={[
        "/services/anniversary1.jpg",
        "/services/anniversary.jpg",
        "/services/anni.jpeg",
      ]}
    />
  );
}

