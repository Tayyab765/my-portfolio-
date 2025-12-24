import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tayyab Attiq | Software Engineer | Full-Stack & AI Developer</title>
        <meta
          name="description"
          content="Tayyab Attiq is a Software Engineer specializing in full-stack web development, DevOps, and AI-driven systems. Building scalable, secure, and intelligent applications."
        />
        <meta
          name="keywords"
          content="Tayyab Attiq, Software Engineer, Full-Stack Developer, AI Developer, MERN Stack, React, Node.js, Python, RAG, DevOps"
        />
        <meta property="og:title" content="Tayyab Attiq | Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer specializing in full-stack development and AI systems."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tayyabattiq.dev" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
