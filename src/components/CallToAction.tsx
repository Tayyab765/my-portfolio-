import { Rocket, Clock, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Clock,
    label: "Fast Delivery",
    color: "bg-primary",
  },
  {
    icon: Shield,
    label: "Quality Assured",
    color: "bg-[hsl(350,80%,60%)]",
  },
  {
    icon: HeartHandshake,
    label: "Long-term Support",
    color: "bg-muted",
  },
];

const CallToAction = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-border">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Build Something{" "}
              <span className="text-primary">
                Amazing?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's transform your ideas into powerful, scalable web applications. Whether you 
              need a complete solution or want to enhance your existing project, I'm here to help 
              you succeed.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              Start Your Project
            </a>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
