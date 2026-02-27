import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Introduction to Cybersecurity", issuer: "CISCO", date: "Mar 2023" },
  { title: "Data Science Job Simulation", issuer: "Forage", date: "" },
  { title: "Data Visualization", issuer: "LinkedIn", date: "" },
  { title: "Robotics Control & Diagnostics", issuer: "J&J", date: "" },
  { title: "Customer Analytics & Retail Strategy", issuer: "Quantium", date: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="glass-card rounded-2xl p-5 flex gap-4 items-start hover-lift"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsla(187, 72%, 45%, 0.12)" }}>
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{c.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {c.issuer}{c.date ? ` · ${c.date}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
