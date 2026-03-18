import { motion } from "framer-motion";

const reasons = [
  { title: "Fast", description: "I focus on delivering fast results, without compromising on quality." },
  { title: "Custom", description: "I emphasize creating unique designs, ensuring your brand stands out." },
  { title: "Effective", description: "I make sure the website not only looks great but brings real-life results for your business." },
];

const WhyMe = () => {
  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
      >
        Why choose me
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary rounded-xl p-8 text-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;
