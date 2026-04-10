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
    <section id="services" ref={ref} className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker">Services</span>
          <h2 className="section-heading mt-3">
            Product-minded <span className="gradient-text">web services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/15">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
