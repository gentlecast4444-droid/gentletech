import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8"
        >
          Have a video project in mind? Let's make it look incredible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3 justify-center"
        >
          <a href="mailto:gentlecast4444@gmail.com" className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors">
            Send an email
          </a>
          <a href="https://discord.com/users/gentle__tech" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors">
            Discord: gentle__tech
          </a>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">© 2024 Gentle. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
