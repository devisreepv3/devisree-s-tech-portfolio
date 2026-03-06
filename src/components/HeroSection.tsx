import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="gradient-hero min-h-screen flex items-center justify-center relative pt-16">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-hero-accent font-display font-medium tracking-widest uppercase text-sm mb-4"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-5xl md:text-7xl font-bold text-hero-foreground mb-6 leading-tight"
      >
        Hi, I'm <span className="text-gradient">Devisree</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
      >
        Aspiring Computer Science Engineer | Passionate About Technology and Innovation
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <a
          href="#contact"
          className="gradient-primary text-primary-foreground px-8 py-3 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </a>
        <a
          href="#projects"
          className="border border-hero-foreground/20 text-hero-foreground px-8 py-3 rounded-full font-display font-semibold text-sm hover:border-hero-accent hover:text-hero-accent transition-colors"
        >
          View Projects
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-5"
      >
        {[
          { icon: Github, href: "https://github.com/devisree", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/devisree", label: "LinkedIn" },
          { icon: Mail, href: "mailto:devisree@example.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-hero-accent hover:border-hero-accent transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-muted animate-bounce"
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
