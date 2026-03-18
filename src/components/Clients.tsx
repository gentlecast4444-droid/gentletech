import { motion } from "framer-motion";

const clients = ["Apple", "Rivian", "Adobe", "Google", "Microsoft", "Meta", "Nvidia", "Nothing", "Figure"];

const Clients = () => {
  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12"
      >
        Clients
      </motion.h2>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="mx-8 text-2xl md:text-3xl font-semibold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
