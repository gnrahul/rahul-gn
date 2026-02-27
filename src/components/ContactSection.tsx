import { motion } from "framer-motion";
import { Send, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding gradient-bg-section relative overflow-hidden">
      <div className="floating-orb w-80 h-80 -top-20 left-1/4 animate-float-slow" style={{ background: "var(--orb-cyan)" }} />
      <div className="floating-orb w-56 h-56 bottom-0 right-10 animate-float" style={{ background: "var(--orb-purple)" }} />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-muted-foreground mb-8">
          Interested in working together? Let's connect.
        </motion.p>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="flex justify-center gap-4 mb-10">
          <a href="mailto:gnrahul1941@outlook.com" className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 text-sm font-medium text-foreground hover-lift">
            <Mail size={16} className="text-primary" /> gnrahul1941@outlook.com
          </a>
          <a href="https://linkedin.com/in/rahul-g-n/" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 text-sm font-medium text-foreground hover-lift">
            <Linkedin size={16} className="text-primary" /> LinkedIn
          </a>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 md:p-8 text-left space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
              placeholder="Your message..."
            />
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-3 rounded-xl text-sm font-medium"
              style={{ background: "hsla(187, 72%, 45%, 0.1)", color: "hsl(187, 72%, 35%)" }}
            >
              ✓ Message sent successfully!
            </motion.div>
          ) : (
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              Send Message <Send size={16} />
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
