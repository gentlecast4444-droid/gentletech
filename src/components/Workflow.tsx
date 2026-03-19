import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Brief", desc: "Understand your vision, style preferences, and project goals." },
  { num: "02", title: "Footage Review", desc: "Go through all raw footage and select the best clips." },
  { num: "03", title: "Rough Cut", desc: "Assemble the timeline with structure, pacing, and flow." },
  { num: "04", title: "Editing", desc: "Add transitions, effects, color grading, and sound design." },
  { num: "05", title: "Revisions", desc: "Refine the edit based on your feedback until it's perfect." },
  { num: "06", title: "Delivery", desc: "Export in your preferred format and resolution, ready to publish." },
];

const Workflow = () => {
  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
      >
        My workflow
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6 py-6 border-b border-border"
          >
            <span className="text-sm text-muted-foreground font-mono pt-1">{step.num}</span>
            <div>
              <h3 className="text-foreground font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
