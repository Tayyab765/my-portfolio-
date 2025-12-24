import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[hsl(270,50%,15%)] border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">
            <span className="text-foreground">Tayyab </span>
            <span className="text-primary">Attiq</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            © {currentYear} Tayyab Attiq. Built with
            <Heart size={14} className="text-primary" />
            and code.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Tayyab765"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tayyab-attiq-9b233127b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:attiqtayyab543@gmail.com"
              className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
