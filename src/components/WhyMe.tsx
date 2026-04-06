import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Smartphone } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Scalable Code", desc: "Well-structured, maintainable codebase." },
  { icon: Palette, title: "Modern UI/UX Design", desc: "Beautiful, intuitive interfaces." },
  { icon: Zap, title: "Performance Optimized", desc: "Fast loading, smooth experience." },
  { icon: Smartphone, title: "Mobile-First", desc: "Responsive across all devices." },
];

const WhyMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Why work <span className="gradient-text">with me</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start glass-card p-5 hover-lift"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <h.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
