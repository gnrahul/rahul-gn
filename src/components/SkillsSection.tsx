import { motion } from "framer-motion";

const skillCategories = [
  { label: "Technical", skills: ["Python", "MATLAB", "SQL", "IoT", "Automation", "Machine Learning"], color: "187, 72%, 45%" },
  { label: "Data Tools", skills: ["Jupyter", "Power BI", "Excel"], color: "205, 85%, 55%" },
  { label: "Automation", skills: ["Digital Twins", "Servo Control", "PLC Concepts", "TwinCAT"], color: "170, 60%, 45%" },
  { label: "Platforms", skills: ["GitHub", "Linux", "Windows Server", "VMware", "Office 365"], color: "260, 50%, 60%" },
  { label: "Languages", skills: ["English (Fluent)", "German (Intermediate)", "Telugu (Fluent)", "Kannada (Fluent)", "Hindi (Conversational)"], color: "220, 60%, 55%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding gradient-bg-section relative overflow-hidden">
      <div className="floating-orb w-72 h-72 top-10 right-0 animate-float" style={{ background: "var(--orb-teal)" }} />
      <div className="floating-orb w-48 h-48 bottom-10 left-10 animate-float-slow" style={{ background: "var(--orb-purple)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
          <span className="gradient-text">Skills</span> & Expertise
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="glass-card rounded-2xl p-5 hover-lift"
            >
              <h3 className="font-display text-base font-semibold mb-3 text-foreground">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="inline-block px-3 py-1.5 text-xs font-medium rounded-full cursor-default transition-colors"
                    style={{
                      background: `hsla(${cat.color}, 0.12)`,
                      color: `hsl(${cat.color})`,
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
