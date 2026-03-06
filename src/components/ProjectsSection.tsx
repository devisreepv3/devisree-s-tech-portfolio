import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    desc: "A full-stack web application for managing student records, attendance, and grades with a clean dashboard interface.",
    tech: ["Python", "Flask", "MySQL", "HTML/CSS"],
  },
  {
    title: "Weather Forecast App",
    desc: "A responsive weather application that fetches real-time data using a public API and displays forecasts with dynamic visuals.",
    tech: ["JavaScript", "React", "API Integration", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Landing Page",
    desc: "A modern, responsive landing page for an online store featuring product showcases, animations, and a contact form.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Chat Application",
    desc: "A real-time messaging app with user authentication, message history, and live notifications built for collaborative teams.",
    tech: ["Python", "Socket.IO", "React", "MongoDB"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Things I've Built</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border hover:border-primary/30"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
