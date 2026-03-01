import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const education = [
  {
    degree: "M.Sc. Digitalization & Automation",
    school: "PFH Private University of Applied Sciences",
    duration: "Oct 2023 – March 2026",
    location: "Stade, Lower Saxony, Germany",
    thesis: "Sensor-Driven Remote Control of Robotic Arms Using Human Arm Sensors",
    skills: ["Python", "Node-RED", "MQTT", "IoT", "Digital Twin", "Dashboards", "PLC Basics", "Process Automation"],
    outcomes: [
      "Designed end-to-end sensing → processing → visualization → control workflows",
      "Applied commissioning-style troubleshooting and KPI-based system validation",
      "Integrated digital twin simulations with measurable performance optimization",
    ],
    gradient: "var(--gradient-primary)",
    iconClass: "text-primary-foreground",
  },
  {
    degree: "B.E. Computer Science",
    school: "BNM Institute of Technology",
    duration: "Sep 2018 – Jan 2022",
    location: "Bangalore, Karnataka, India",
    thesis: "Detection of Fake and Clone Accounts Using Machine Learning Techniques",
    skills: ["Python", "Machine Learning", "SQL", "Feature Engineering", "Data Preprocessing", "Analytics"],
    outcomes: [
      "Built ML pipelines for classification and pattern detection",
      "Performed feature engineering to improve model accuracy and reduce false positives",
      "Developed structured datasets and evaluation workflows for scalable analysis",
    ],
    gradient: "var(--gradient-accent)",
    iconClass: "text-accent-foreground",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "Government Polytechnic Chintamani",
    duration: "Sep 2014 – Jun 2018",
    location: "Chintamani, Karnataka, India",
    thesis: "Student Feedback Management System Using HTML & SQL Database",
    skills: ["HTML", "CSS", "SQL", "Database Design", "CRUD Systems", "Web Forms"],
    outcomes: [
      "Designed a structured student feedback collection and reporting system",
      "Implemented SQL-backed data storage and retrieval workflows",
      "Gained strong fundamentals in programming logic and database systems",
    ],
    gradient: "linear-gradient(135deg, hsl(var(--muted-foreground) / 0.7), hsl(var(--muted-foreground) / 0.4))",
    iconClass: "text-primary-foreground",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="floating-orb w-56 h-56 bottom-10 right-20 animate-float-slow" style={{ background: "var(--orb-cyan)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((ed, idx) => (
            <motion.div
              key={ed.degree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx + 1}
              className="glass-card rounded-2xl p-6 hover-lift flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: ed.gradient }}>
                <GraduationCap size={22} className={ed.iconClass} />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground">{ed.degree}</h3>
              <p className="text-sm text-primary font-medium mt-1">{ed.school}</p>
              <p className="text-xs text-muted-foreground mt-1">{ed.duration}</p>
              <p className="text-xs text-muted-foreground mb-3">{ed.location}</p>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium text-foreground">Thesis:</span> {ed.thesis}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {ed.skills.map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>

              <ul className="space-y-2 mt-auto">
                {ed.outcomes.map((o) => (
                  <li key={o} className="text-sm text-muted-foreground flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
