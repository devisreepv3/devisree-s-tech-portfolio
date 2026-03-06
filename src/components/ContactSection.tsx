import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  { icon: Mail, label: "devisree@example.com", href: "mailto:devisree@example.com" },
  { icon: Linkedin, label: "linkedin.com/in/devisree", href: "https://linkedin.com/in/devisree" },
  { icon: Github, label: "github.com/devisree", href: "https://github.com/devisree" },
  { icon: MapPin, label: "India", href: "#" },
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="gradient-primary text-primary-foreground px-8 py-3 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              {sent ? "Message Sent!" : <>Send Message <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
