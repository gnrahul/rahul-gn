import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Linkedin } from "lucide-react";
import portraitImg from "@/assets/rahul-portrait.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden pt-20">
      {/* Floating orbs */}
      <div className="floating-orb w-72 h-72 top-20 -right-20 animate-float" style={{ background: "var(--orb-cyan)" }} />
      <div className="floating-orb w-96 h-96 -bottom-32 -left-32 animate-float-slow" style={{ background: "var(--orb-blue)", animationDelay: "2s" }} />
      <div className="floating-orb w-64 h-64 top-1/2 right-1/4 animate-float" style={{ background: "var(--orb-purple)", animationDelay: "4s" }} />
      <div className="floating-orb w-48 h-48 top-32 left-1/3 animate-float-slow" style={{ background: "var(--orb-teal)", animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        {/* Mobile: portrait above text */}
        <div className="flex flex-col items-center md:hidden mb-8">
          <PortraitCard />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Robotics • Digitalization • Data/BI
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              AI & Automation Engineer building measurable automation workflows, digital twin dashboards, and data pipelines using Python, Node-RED, MQTT, PLC concepts, and analytics.
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

          {/* Right - Portrait (desktop/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <PortraitCard />
          </motion.div>
        </div>
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

const PortraitCard = () => (
  <div className="relative w-72 md:w-[420px] lg:w-[480px]">
    {/* Gradient border glow */}
    <div
      className="absolute -inset-[2px] rounded-[28px] md:rounded-[32px] opacity-60"
      style={{ background: "var(--gradient-primary)", filter: "blur(2px)" }}
    />
    {/* Glass card */}
    <div className="relative rounded-[26px] md:rounded-[30px] overflow-hidden backdrop-blur-md bg-white/70 border border-white/40 shadow-xl">
      <img
        src={portraitImg}
        alt="Rahul G N – AI & Automation Engineer"
        className="w-full aspect-[4/5] object-cover object-top"
        loading="eager"
      />
      {/* Availability pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md bg-white/75 border border-white/50 shadow-md text-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Working Student / Internship
        </span>
      </div>
    </div>
  </div>
);

export default HeroSection;
