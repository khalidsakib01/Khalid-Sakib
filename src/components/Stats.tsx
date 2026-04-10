import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Clock, Users, Cpu } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "250+", label: "Projects Completed" },
  { icon: Clock, value: "4+", label: "Years Experience" },
  { icon: Users, value: "240+", label: "Happy Clients" },
  { icon: Cpu, value: "10+", label: "Technologies Used" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding pt-8 md:pt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 md:p-7 hover-lift"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <stat.icon size={20} className="text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
