import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Briefcase } from "lucide-react";
import khalidPhoto from "@/assets/khalid-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Passionate about building the{" "}
              <span className="gradient-text">modern web</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl border border-border bg-card/70 p-2 shadow-xl">
                <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
                  <img src={khalidPhoto} alt="Khalid Sakib" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm <strong className="text-foreground">Khalid Sakib</strong>, a web developer passionate about building modern web applications and digital experiences. With over 4 years of experience, I focus on writing clean code and designing scalable solutions that help businesses grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating responsive, user-focused digital products using modern technologies such as React, Node.js, and Firebase. My focus is delivering fast, visually engaging, and business-driven web solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" /> Dhaka, Bangladesh
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase size={16} className="text-primary" /> 4+ Years
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" /> khalidsakib01@gmail.com
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
