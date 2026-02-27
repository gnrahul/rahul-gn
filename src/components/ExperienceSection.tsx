import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Flink",
    role: "Werkstudent Rider",
    period: "Jan 2024 – Dec 2024",
    bullets: [
      "Improved on-time deliveries to 98% through workflow bottleneck analysis.",
      "Trained 15 team members → 25% efficiency increase.",
      "Achieved 95% on-time fulfillment via cross-team coordination and simulations.",
    ],
  },
  {
    company: "Kalyani Motors",
    role: "Insurance Coordinator Executive",
    period: "Apr 2022 – Jan 2023",
    bullets: [
      "Reduced complaints by 12% via standardized verification workflows.",
      "Optimized 200+ records using SQL/Excel → 40% faster retrieval.",
      "Integrated AI-driven process improvements → 80% operational efficiency gain.",
    ],
  },
  {
    company: "Rahul Electrical Works Pvt Ltd",
    role: "Electrical Associate Engineer",
    period: "",
    bullets: [
      "Delivered customer-facing troubleshooting and electrical system support.",
      "Assisted design of power distribution, lighting, and motor systems.",
      "Improved reliability through structured testing and documentation.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding gradient-bg-section relative overflow-hidden">
      <div className="floating-orb w-72 h-72 top-20 -left-20 animate-float" style={{ background: "var(--orb-purple)" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center z-10" style={{ background: "var(--gradient-primary)" }}>
                  <Briefcase size={18} className="text-primary-foreground" />
                </div>

                <div className="glass-card rounded-2xl p-6 flex-1 hover-lift">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">{exp.company}</h3>
                    {exp.period && (
                      <span className="text-xs text-muted-foreground">· {exp.period}</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{exp.role}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
