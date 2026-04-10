import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Wrench, BarChart3 } from "lucide-react";

const CaseStudy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker">Case Study</span>
          <h2 className="section-heading mt-3">
            Business website <span className="gradient-text">thinking</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Lightbulb,
              title: "Problem",
              text: "Many small businesses struggle to create modern, professional websites that attract customers and represent their brand effectively.",
            },
            {
              icon: Wrench,
              title: "Solution",
              text: "Designed and developed a high-performance website with a modern UI, responsive layout, and optimized user experience using React, Tailwind CSS, and Firebase.",
            },
            {
              icon: BarChart3,
              title: "Result",
              text: "Delivered a fast and visually engaging website that improved online presence and helped the business reach more customers.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-6">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
