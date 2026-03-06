import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Your College Name",
    year: "2021 – 2025 (Expected)",
    detail: "Relevant coursework: Data Structures, Algorithms, DBMS, OS, Web Development, Machine Learning.",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Your School Name",
    year: "2021",
    detail: "Focused on Mathematics and Computer Science.",
  },
];

const certifications = [
  "Python for Everybody – Coursera",
  "Web Development Bootcamp – Udemy",
  "Data Structures & Algorithms – HackerRank",
  "AWS Cloud Practitioner Essentials",
];

const EducationSection = () => (
  <section id="education" className="py-24 bg-section-alt">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">Background</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Education & Certifications</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h3>
          <div className="space-y-6 border-l-2 border-primary/30 pl-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full gradient-primary" />
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{e.year}</p>
                <h4 className="font-display font-semibold text-foreground">{e.degree}</h4>
                <p className="text-sm text-muted-foreground">{e.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Award size={22} className="text-primary" /> Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-card border border-border"
              >
                <div className="w-2 h-2 rounded-full gradient-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
