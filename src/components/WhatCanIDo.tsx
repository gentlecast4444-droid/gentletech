import { motion } from "framer-motion";

const services = [
  "AI Video Creation",
  "Professional Video Editing",
  "Custom Video Production",
  "Game Testing",
  "Content Recording",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
};

const WhatCanIDo = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12"
        >
          What can I do
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {services.map((service) => (
            <motion.span
              key={service}
              variants={item}
              className="px-5 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-full"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          High-quality services with fast delivery, reliable communication, and affordable pricing.
        </motion.p>
      </div>
    </section>
  );
};

export default WhatCanIDo;
