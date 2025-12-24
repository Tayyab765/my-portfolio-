import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(260,55%,22%)] to-[hsl(270,50%,20%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:attiqtayyab543@gmail.com"
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">attiqtayyab543@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 text-foreground">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Tayyab765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-muted/30 rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tayyab-attiq-9b233127b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-muted/30 rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Send a Message</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-muted/30 border border-border/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-muted/30 border border-border/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-muted/30 border border-border/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
