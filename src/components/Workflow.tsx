import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understand you and your business. What's your vision and future goals?" },
  { num: "02", title: "Research", desc: "Analyze your industry, competitors, and local market." },
  { num: "03", title: "Strategy", desc: "Develop a strategic plan to help you reach your goals." },
  { num: "04", title: "Content", desc: "Show the right things to your audience." },
  { num: "05", title: "Copywriting", desc: "Refine your message down to the exact wording." },
  { num: "06", title: "Design", desc: "Strengthen your message through the visual language." },
  { num: "07", title: "Development", desc: "Transform the design into a fully functional website." },
  { num: "08", title: "Handover", desc: "Walk you through all features and functionality." },
  { num: "09", title: "Support", desc: "Provide post-launch assistance and updates." },
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
