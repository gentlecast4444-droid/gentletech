import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What is the starting price?", a: "Each project is unique, so pricing varies based on scope and complexity. Get in touch for a personalized quote." },
  { q: "How long does it usually take?", a: "Most projects take between 4-8 weeks depending on scope, revisions, and content readiness." },
  { q: "What do I need to do?", a: "Provide your brand assets, content, and feedback during the review stages. I handle everything else." },
  { q: "How much does website hosting cost?", a: "Hosting costs depend on the platform used but typically range from $0-$30/month." },
  { q: "Is there ongoing post-launch support?", a: "Yes, I offer ongoing support packages to keep your site updated and performing well." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
      >
        Common questions
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-b border-border"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-foreground font-medium">{faq.q}</span>
              <span className="text-muted-foreground text-xl ml-4">{open === i ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
