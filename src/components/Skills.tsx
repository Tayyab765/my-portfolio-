const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Full-Stack",
    skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "REST APIs", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "AI & Data",
    skills: ["Python", "RAG Systems", "NLP", "Machine Learning", "Data Processing"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Jenkins", "Docker", "CI/CD", "JMeter", "Jira"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL Server", "PostgreSQL"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-2">// MY SKILLS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Tech Stack</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 border-2 border-border hover:shadow-md transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] group"
              >
                <h3 className="text-lg font-bold mb-4 font-mono border-b-2 border-border pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground border border-border hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
