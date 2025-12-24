import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Protect Lab",
    duration: "Summer 2024",
    description:
      "Developed MalDef, a signature-based malware detection system. Worked on secure coding practices and cybersecurity fundamentals. Collaborated in a team environment and followed structured development workflows.",
    highlights: [
      "Built malware detection system",
      "Secure coding practices",
      "Team collaboration",
      "Cybersecurity fundamentals",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor of Science in Software Engineering",
    organization: "FAST-NUCES, Islamabad",
    duration: "Aug 2022 – June 2026",
    description:
      "National University of Computer & Emerging Sciences. Studying core software engineering principles, algorithms, data structures, and modern development practices.",
    highlights: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
      "AI & Machine Learning",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(260,55%,22%)] to-[hsl(270,50%,18%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-2">// MY JOURNEY</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Experience & Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {/* Work Experience */}
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground border-2 border-background md:-translate-x-1/2 z-10" />

                  {/* Content - Left side on desktop */}
                  <div className="md:text-right md:pr-8">
                    <div className="p-6 border-2 border-border hover:shadow-md transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] bg-background">
                      <div className="flex items-center gap-2 mb-2 md:justify-end">
                        <Briefcase size={20} className="text-muted-foreground" />
                        <span className="text-sm font-mono text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium mb-4">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {exp.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground border border-border"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty right side */}
                  <div className="hidden md:block" />
                </div>
              ))}

              {/* Education */}
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground border-2 border-background md:-translate-x-1/2 z-10" />

                  {/* Empty left side */}
                  <div className="hidden md:block" />

                  {/* Content - Right side on desktop */}
                  <div className="md:pl-8">
                    <div className="p-6 border-2 border-border hover:shadow-md transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] bg-background">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={20} className="text-muted-foreground" />
                        <span className="text-sm font-mono text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{edu.title}</h3>
                      <p className="text-muted-foreground font-medium mb-4">{edu.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground border border-border"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
