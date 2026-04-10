import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Firebase", "REST APIs", "Authentication", "Database Management"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Chrome DevTools"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker">Skills</span>
          <h2 className="section-heading mt-3">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <group.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="soft-pill border border-border bg-secondary/65 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
