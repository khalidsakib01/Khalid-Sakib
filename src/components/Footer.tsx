import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed and developed by <span className="font-medium text-foreground">Khalid Sakib</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:khalidsakib01@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/khalidsakib01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/khalidsakib01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
