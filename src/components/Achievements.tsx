import { Award, Calendar, MapPin, Users } from "lucide-react";

export const Achievements = () => {
  const stats = [
    {
      icon: Award,
      number: "800+",
      label: "Events Decorated",
      description: "Successfully delivered celebrations"
    },
    {
      icon: Calendar,
      number: "6",
      label: "Years Experience",
      description: "Creating memorable moments"
    },
    {
      icon: MapPin,
      number: "500+",
      label: "Venues",
      description: "Across multiple locations"
    },
    {
      icon: Users,
      number: "70%",
      label: "Reference Clients",
      description: "Return & recommend us"
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptLTE4IDBjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0zNiAxOGMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-premium group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
