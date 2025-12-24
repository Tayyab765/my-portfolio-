import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, Code } from "lucide-react";

const roles = ["Software Engineer", "Full-Stack Developer", "AI Developer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(280,55%,30%)] via-[hsl(260,55%,25%)] to-[hsl(200,60%,30%)]">
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Code Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-muted/30 border border-border/50 flex items-center justify-center backdrop-blur-sm">
              <Code className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>

          {/* Name with gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[hsl(280,70%,70%)] via-foreground to-[hsl(280,70%,70%)] bg-clip-text text-transparent">
              Tayyab Attiq
            </span>
          </h1>

          {/* Role/Subtitle */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6">
            <span className="text-lg md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable, secure, and intelligent applications. Passionate about
            full-stack development, DevOps, and AI-driven systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-foreground font-semibold border border-border/50 rounded-full hover:bg-muted/30 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Tayyab765"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/tayyab-attiq-9b233127b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:attiqtayyab543@gmail.com"
              className="p-3 rounded-full bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
