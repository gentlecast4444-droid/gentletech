import { motion } from "framer-motion";

const services = [
  "AI Video Creation",
  "Professional Video Editing",
  "Custom Video Production",
  "Game Testing",
  "Content Recording",
];

const WhatCanIDo = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12"
        >
          What can I do
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {services.map((service, i) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="px-5 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-full"
            >
              {service}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          High-quality services with fast delivery, reliable communication, and affordable pricing.
        </motion.p>
      </div>
    </section>
  );
};

export default WhatCanIDo;
