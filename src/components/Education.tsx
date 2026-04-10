import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  { title: "SSC", detail: "GPA: 5.00 - Science Group" },
  { title: "HSC", detail: "GPA: 5.00 - Science Group" },
  { title: "BBA - North South University", detail: "Currently Pursuing" },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/40">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-kicker">Education</span>
          <h2 className="section-heading mt-3">Academic Background</h2>
        </motion.div>

        <div className="relative space-y-5">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass-card p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
