import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-lines">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
          I'm Gentle. I am freelancing video editor and play tester
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex gap-3 mt-10"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors"
        >
          Book a call
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors"
        >
          Send a text
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
