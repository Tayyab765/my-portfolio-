import { ExternalLink, Github, ShoppingCart, Lock, Brain, Leaf } from "lucide-react";

const projects = [
  {
    title: "POS System",
    subtitle: "FLAGSHIP PROJECT",
    role: "Full-Stack Developer",
    description:
      "A complete Point of Sale system developed using the MERN stack, designed for retail environments. Manages products, billing, transactions, and sales records with a clean and responsive UI.",
    highlights: [
      "Full-stack architecture (React + Node + MongoDB)",
      "RESTful APIs for inventory & sales management",
      "Authentication and role-based access",
      "Responsive dashboard for daily operations",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    icon: ShoppingCart,
    github: "https://github.com/Tayyab765",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "End-to-End Encrypted Messaging",
    subtitle: "e2ee",
    role: "Software Engineer",
    description:
      "A secure communication system implementing end-to-end encryption, ensuring privacy and confidentiality of messages between users.",
    highlights: [
      "Encrypted message exchange",
      "Focus on security and privacy principles",
      "Real-time communication concepts",
      "Strong application of cryptography basics",
    ],
    techStack: ["JavaScript", "Encryption Libraries", "WebSockets"],
    domain: "Cybersecurity + Secure Systems",
    icon: Lock,
    github: "https://github.com/Tayyab765",
    featured: true,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    title: "FYP RAG System",
    subtitle: "Retrieval Augmented Generation",
    role: "AI Developer",
    description:
      "An AI-powered academic assistant built using RAG to help students query and understand Final Year Project handbook data efficiently.",
    highlights: [
      "Combines document retrieval with generative AI",
      "Improves accuracy using contextual knowledge",
      "Designed for academic and knowledge-based use cases",
      "Strong foundation in AI system design",
    ],
    techStack: ["Python", "RAG Architecture", "NLP", "Vector DBs"],
    domain: "Artificial Intelligence, Knowledge Systems",
    icon: Brain,
    github: "https://github.com/Tayyab765",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "Cropify",
    subtitle: "Agriculture Marketplace",
    role: "Full-Stack Developer",
    description:
      "A digital marketplace connecting farmers with buyers, featuring modern UI/UX and robust backend architecture.",
    highlights: [
      "React frontend with Material UI",
      "Spring Boot backend",
      "REST APIs tested via Postman",
      "Modern and intuitive interface",
    ],
    techStack: ["React.js", "Spring Boot", "Material UI", "REST APIs"],
    icon: Leaf,
    github: "https://github.com/Tayyab765",
    featured: false,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(270,50%,18%)] to-[hsl(260,55%,22%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work demonstrating my skills in full-stack development, DevOps, and workflow automation.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all group/link"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Tayyab765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold border border-border/50 rounded-full hover:bg-muted/30 transition-all"
            >
              <Github size={20} />
              View All Projects on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
