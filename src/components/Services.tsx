import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-6"
        >
          How I can help you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg leading-relaxed mb-10"
        >
          Design and develop an entire website — from first ideas to global launch. You'll receive the complete package.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3 justify-center"
        >
          <a href="#contact" className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors">
            Book a call
          </a>
          <a href="#contact" className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors">
            Send a text
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
