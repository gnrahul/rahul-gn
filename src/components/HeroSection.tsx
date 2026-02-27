import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden pt-20">
      {/* Floating orbs */}
      <div className="floating-orb w-72 h-72 top-20 -right-20 animate-float" style={{ background: "var(--orb-cyan)" }} />
      <div className="floating-orb w-96 h-96 -bottom-32 -left-32 animate-float-slow" style={{ background: "var(--orb-blue)", animationDelay: "2s" }} />
      <div className="floating-orb w-64 h-64 top-1/2 right-1/4 animate-float" style={{ background: "var(--orb-purple)", animationDelay: "4s" }} />
      <div className="floating-orb w-48 h-48 top-32 left-1/3 animate-float-slow" style={{ background: "var(--orb-teal)", animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 tag-chip"
          >
            Based in Hamburg, Germany 🇩🇪
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            <span className="gradient-text">AI & Automation</span>{" "}
            Engineer
            <span className="block text-2xl md:text-3xl mt-2 font-medium text-muted-foreground">
              Robotics, Digitalization & Data-Driven Systems
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            M.Sc. Digitalization & Automation (PFH) · Building measurable automation workflows, digital twins, and dashboards using Python, PLC concepts, Node-RED, MQTT, and analytics.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ background: "var(--gradient-primary)" }}>
              View Projects <ExternalLink size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card text-foreground hover-lift">
              Contact Me
            </a>
            <a href="https://linkedin.com/in/rahul-g-n/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card text-foreground hover-lift">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right - Abstract 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-center relative"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Abstract shapes */}
            <div className="absolute inset-0 rounded-3xl rotate-6 opacity-60 animate-float" style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute inset-4 rounded-3xl -rotate-3 opacity-40 animate-float-slow" style={{ background: "var(--gradient-accent)", animationDelay: "1s" }} />
            <div className="absolute inset-8 rounded-3xl glass-card flex flex-col items-center justify-center gap-4 p-6">
              <div className="w-full h-3 rounded-full bg-muted" />
              <div className="w-3/4 h-3 rounded-full bg-muted" />
              <div className="grid grid-cols-3 gap-2 w-full mt-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-12 rounded-lg" style={{ background: i % 2 === 0 ? "hsla(187, 72%, 45%, 0.15)" : "hsla(260, 50%, 65%, 0.12)" }} />
                ))}
              </div>
              <div className="flex gap-2 w-full mt-1">
                <div className="flex-1 h-16 rounded-lg" style={{ background: "hsla(205, 85%, 55%, 0.12)" }} />
                <div className="flex-1 h-16 rounded-lg" style={{ background: "hsla(187, 72%, 45%, 0.1)" }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ArrowDown size={16} className="text-muted-foreground animate-scroll-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
