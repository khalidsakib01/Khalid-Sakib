import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Velleza",
    description: "Modern business website with clean UI, responsive layout, and optimized performance.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "#",
    github: "https://github.com/khalidsakib01",
  },
  {
    title: "Trek Platform",
    description: "Interactive trek platform with dynamic content and modern design architecture.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/khalidsakib01",
  },
  {
    title: "Star Trek Three",
    description: "Feature-rich web application showcasing advanced frontend development skills.",
    tech: ["React", "JavaScript", "CSS3"],
    live: "#",
    github: "https://github.com/khalidsakib01",
  },
  {
    title: "Artemis Web Studio",
    description: "Professional web studio website with stunning visuals and smooth interactions.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "https://github.com/khalidsakib01",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover-lift"
            >
              <div className="h-48 gradient-bg opacity-80 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground opacity-50 group-hover:opacity-80 transition-opacity">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Code
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

