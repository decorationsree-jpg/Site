import ServiceTemplate from "@/components/ServiceTemplate";

export default function OfficeInaugurationDecoration() {
  return (
    <ServiceTemplate
      title="Office Inauguration Decoration"
      description="Professional corporate decor for ribbon-cuttings, stage backdrops and entrance styling to match your brand identity."
      inclusions={[
        "Ribbon-cutting backdrop",
        "Stage & podium styling",
        "Flower arrangements for executives",
        "Coordination with event manager",
      ]}
      images={[
        "/services/office7.jpeg",
        "/services/office5.jpeg",
        "/services/office6.jpeg",
      ]}
    />
  );
}
