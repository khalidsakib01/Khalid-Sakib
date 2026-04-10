import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Rocket, Gauge, Palette, Code } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built modern websites designed for speed, performance, and scalability." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting landing pages designed for startups, products, and marketing campaigns." },
  { icon: Gauge, title: "Website Optimization", desc: "Improve website speed, SEO performance, and overall user experience." },
  { icon: Palette, title: "UI / UX Design", desc: "Clean, modern, and user-friendly digital interfaces." },
  { icon: Code, title: "Web Applications", desc: "Scalable web apps using modern frameworks and cloud technologies." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What I <span className="gradient-text">offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:gradient-bg flex items-center justify-center mb-4 transition-all duration-300">
                <s.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
