import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <stat.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
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
