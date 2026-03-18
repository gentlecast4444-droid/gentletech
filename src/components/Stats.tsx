import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Finished projects" },
  { value: "9+", label: "Clients" },
  { value: "94%", label: "Conversion increase" },
  { value: "36+", label: "Months of work" },
  { value: "7+", label: "Industries" },
  { value: "2+", label: "Years of experience" },
];

const Stats = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
      >
        Numbers don't lie
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
