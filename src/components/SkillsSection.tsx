import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "SQL", level: 75 },
  { name: "Git & GitHub", level: 80 },
];

const softSkills = [
  "Communication", "Team Collaboration", "Problem Solving",
  "Critical Thinking", "Time Management", "Adaptability",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-section-alt">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What I Work With</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
          <div className="space-y-5">
            {technicalSkills.map(({ name, level }, i) => (
              <div key={name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full rounded-full gradient-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2.5 rounded-full bg-card shadow-card text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
