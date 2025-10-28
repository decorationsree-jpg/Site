import ServiceTemplate from "@/components/ServiceTemplate";

export default function BirthdayBalloonDecoration() {
  return (
    <ServiceTemplate
      title="Birthday Balloon Decoration"
      description="Vibrant balloon installations, themed arches, custom balloon walls and photo zones to make birthdays lively and memorable."
      inclusions={[
        "Custom balloon arch / backdrop",
        "Table & cake decor",
        "Photo zone setup",
        "On-site installation team",
      ]}
      images={[
        "/services/birth1.jpeg",
        "/services/birthday4.jpeg",
        "/services/birthday3.jpeg",
      ]}
    />
  );
}

