import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Demo",
    description: "Sample storefront experience with product browsing, category filtering, and a polished responsive UI.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://example.com/demo-store",
    github: "https://github.com/pixelforge-labs",
  },
  {
    title: "Dashboard Demo",
    description: "Analytics dashboard concept with cards, charts, activity tracking, and a clean admin layout.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    live: "https://example.com/demo-dashboard",
    github: "https://github.com/pixelforge-labs",
  },
  {
    title: "Portfolio Concept",
    description: "Creative portfolio demo focused on smooth transitions, strong visual hierarchy, and modern presentation.",
    tech: ["React", "JavaScript", "CSS3"],
    live: "https://example.com/demo-portfolio",
    github: "https://github.com/pixelforge-labs",
  },
  {
    title: "Agency Landing Page",
    description: "Marketing-focused landing page demo with service sections, testimonials, and conversion-first structure.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://example.com/demo-agency",
    github: "https://github.com/pixelforge-labs",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker">Portfolio</span>
          <h2 className="section-heading mt-3">
            Selected <span className="gradient-text">explorations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group hover-lift"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 flex items-end p-6">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/90">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted-foreground mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="soft-pill border border-border bg-secondary/65 px-3 py-1.5 text-xs font-semibold text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <ExternalLink size={15} /> View Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={15} /> Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
