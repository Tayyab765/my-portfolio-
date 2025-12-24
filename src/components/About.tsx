import { Code2, Server, Brain, Rocket, Download } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern frameworks",
  },
  {
    icon: Server,
    title: "DevOps & CI/CD",
    description: "Automating deployments and infrastructure management",
  },
  {
    icon: Brain,
    title: "AI Systems",
    description: "Developing intelligent solutions with RAG and NLP",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(260,55%,22%)] to-[hsl(270,50%,18%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated <span className="text-foreground font-semibold">Software Engineer</span> with 
                strong foundations in full-stack web development, hands-on experience with DevOps & CI/CD, 
                and growing expertise in AI-driven systems such as RAG (Retrieval Augmented Generation).
              </p>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed mb-8">
                Currently pursuing my Bachelor's in Software Engineering at{" "}
                <span className="text-foreground font-semibold">FAST-NUCES, Islamabad</span>. 
                Passionate about building scalable, secure, and intelligent applications that solve 
                real-world problems.
              </p>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6 text-foreground">Quick Facts</h3>
              <div className="grid gap-4">
                {[
                  { label: "1 Year", sublabel: "Experience" },
                  { label: "5+", sublabel: "Projects Completed" },
                  { label: "Islamabad", sublabel: "Based in Pakistan" },
                  { label: "Available", sublabel: "Open to Opportunities" },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{fact.label}</span>
                    </div>
                    <span className="text-muted-foreground dark:text-muted-foreground">{fact.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
