import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Finished projects" },
  { value: "9+", label: "Clients" },
  { value: "94%", label: "Conversion increase" },
  { value: "24+", label: "Months of work" },
  { value: "2+", label: "Industries" },
  { value: "2+", label: "Years of experience" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

const Stats = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
      >
        Numbers don't lie
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item} className="text-center">
            <div className="text-4xl md:text-5xl font-bold rgb-breathe-text mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
