import { motion } from "framer-motion";
import { Cpu, Box, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Cpu, title: "End-to-end Automation Pipelines", desc: "From sensor data to actionable insights" },
  { icon: Box, title: "Digital Twin & Simulation Engineering", desc: "Virtual commissioning and validation" },
  { icon: BarChart3, title: "Data-Driven Process Optimization", desc: "KPIs, dashboards, and measurable impact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const AboutSection = () => {
  return (
    <section className="section-padding gradient-bg-section relative overflow-hidden">
      <div className="floating-orb w-64 h-64 -top-20 right-10 animate-float-slow" style={{ background: "var(--orb-teal)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            I am an AI & Automation Engineer with hands-on experience in building automation workflows, digital twin simulations, and data-driven monitoring systems. My background spans robotics, industrial automation concepts, and analytics, enabling me to design solutions that are both technically robust and operationally measurable.
          </motion.p>

          <motion.p variants={fadeUp} custom={1.5} className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            I specialize in transforming real-world processes into structured systems using Python, Node-RED, MQTT, and dashboard-driven KPIs. I bring an engineering mindset focused on reliability, scalability, and continuous improvement, and I am motivated to contribute immediately to production-grade systems in automation, digitalization, and data-driven environments.
          </motion.p>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                custom={i + 2}
                className="glass-card rounded-2xl p-6 hover-lift cursor-default"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsla(187, 72%, 45%, 0.12)" }}>
                  <h.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
