import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const featuredProjects = [
  {
    title: "Sensor-Driven Remote Control of Robotic Arm",
    date: "May 2025 – Oct 2025",
    tags: ["Python", "Node-RED", "MQTT", "Digital Twin", "Sensors"],
    summary: "Designed sensor-driven robotic arm control system with real-time dashboards and joint-angle KPIs.",
  },
  {
    title: "3-Axis Linear Gantry Robot using Beckhoff TwinCAT",
    date: "Feb 2025 – Mar 2025",
    tags: ["TwinCAT", "PLC Concepts", "Motion Control"],
    summary: "Built structured automation logic including homing, safety interlocks, and motion optimization.",
  },
  {
    title: "Agency Marketing Report Automation",
    date: "Jan 2026 – Feb 2026",
    tags: ["Python", "ETL", "Reporting Automation"],
    summary: "Automated KPI report generation and structured data visualization pipeline.",
  },
];

const allProjects = [
  {
    title: "Water Level Management System using IoT",
    date: "Jan 2025 – Mar 2025",
    tags: ["IoT", "MQTT", "Sensors", "Python"],
    summary: "Real-time water level monitoring using IoT sensors with automated alerting and data logging.",
  },
  {
    title: "Building 3D KUKA KR4 R600 Simulation",
    date: "Dec 2024 – Jan 2025",
    tags: ["Robotics", "Simulation", "3D Modeling"],
    summary: "Created detailed 3D simulation of KUKA robot with kinematics and motion planning.",
  },
  {
    title: "Mall Customer Segmentation using ML",
    date: "Nov 2025 – Jan 2026",
    tags: ["Machine Learning", "Python", "Analytics"],
    summary: "Applied clustering algorithms to segment customers based on behavioral and spending patterns.",
  },
  {
    title: "Detection of Fake and Clone Accounts",
    date: "Jun 2021 – Sep 2021",
    tags: ["Machine Learning", "Python", "NLP"],
    summary: "ML-based system for detecting fake and cloned social media accounts using profile features.",
  },
  {
    title: "Dam Management System",
    date: "Jan 2021 – Apr 2021",
    tags: ["IoT", "Python", "Database"],
    summary: "Monitoring and management system for dam water levels with automated gate control logic.",
  },
  {
    title: "Currency Recognition – MATLAB DIP",
    date: "Jul 2020 – Aug 2020",
    tags: ["MATLAB", "Image Processing"],
    summary: "Digital image processing pipeline for recognizing and classifying currency denominations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ProjectsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="floating-orb w-80 h-80 -bottom-20 -right-20 animate-float" style={{ background: "var(--orb-blue)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Featured */}
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-muted-foreground mb-10">
          Key engineering projects showcasing automation & AI capabilities
        </motion.p>

        {/* Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-16 snap-x snap-mandatory scrollbar-hide">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              onHoverStart={() => setActiveIdx(i)}
              className={`min-w-[320px] md:min-w-[380px] snap-center glass-card rounded-2xl p-6 cursor-default transition-all duration-300 ${
                activeIdx === i ? "scale-[1.02] shadow-lg" : ""
              }`}
              style={activeIdx === i ? { borderColor: "hsl(187, 72%, 45%)" } : {}}
            >
              <span className="text-xs text-muted-foreground font-medium">{p.date}</span>
              <h3 className="font-display text-lg font-semibold mt-2 mb-3 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Grid */}
        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-2xl font-bold mb-6 text-foreground">
          All Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glass-card rounded-2xl p-5 hover-lift cursor-default"
            >
              <span className="text-xs text-muted-foreground">{p.date}</span>
              <h4 className="font-display text-base font-semibold mt-1.5 mb-2 text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
