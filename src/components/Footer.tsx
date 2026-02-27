import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold gradient-text">Rahul G N</p>
          <p className="text-xs text-muted-foreground mt-1">Hamburg, Germany · © 2026</p>
        </div>

        <div className="flex items-center gap-4">
          {["Home", "Projects", "Experience", "Skills", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:gnrahul1941@outlook.com" className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/rahul-g-n/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
