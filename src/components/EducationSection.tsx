import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="floating-orb w-56 h-56 bottom-10 right-20 animate-float-slow" style={{ background: "var(--orb-cyan)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* MSc */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="glass-card rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
              <GraduationCap size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">M.Sc. Digitalization & Automation</h3>
            <p className="text-sm text-primary font-medium mt-1">PFH Private University of Applied Sciences</p>
            <p className="text-xs text-muted-foreground mt-1 mb-3">Oct 2023 – March 2026</p>
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-medium text-foreground">Thesis:</span> Sensor-Driven Remote Control of Robotic Arms
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Python", "Node-RED", "MQTT", "IoT", "Digital Twin", "Dashboards", "PLC Basics"].map((t) => (
                <span key={t} className="tag-chip">{t}</span>
              ))}
            </div>

            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} />
                Built sensing → processing → visualization → control workflows
              </li>
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} />
                Applied commissioning-style troubleshooting and KPI validation
              </li>
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} />
                Integrated simulation with measurable performance optimization
              </li>
            </ul>
          </motion.div>

          {/* BE */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="glass-card rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-accent)" }}>
              <GraduationCap size={22} className="text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">B.E. Computer Science</h3>
            <p className="text-sm text-primary font-medium mt-1">BNM Institute of Technology</p>
            <p className="text-xs text-muted-foreground mt-1 mb-3">Sep 2018 – Jan 2022</p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Thesis:</span> Detection of Fake and Clone Accounts using Machine Learning
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
