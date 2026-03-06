import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Problem Solver", desc: "Love tackling complex challenges through clean, efficient code." },
  { icon: Lightbulb, title: "Quick Learner", desc: "Always exploring new technologies and frameworks to stay ahead." },
  { icon: Users, title: "Team Player", desc: "Thrive in collaborative environments and enjoy knowledge sharing." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">About Me</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm <span className="text-foreground font-semibold">Devisree</span>, a passionate Computer Science and Engineering student pursuing my Bachelor of Engineering. I'm driven by curiosity and a deep interest in technology, programming, and problem-solving.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I enjoy building projects that solve real-world problems, from web applications to data-driven tools. My goal is to continuously grow as a developer and contribute to impactful, innovative solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new tech trends, participating in hackathons, or collaborating with fellow developers on exciting projects.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
