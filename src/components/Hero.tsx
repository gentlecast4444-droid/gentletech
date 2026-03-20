import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-lines">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
          I'm Gentle. I am freelancing video editor and play tester
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="flex gap-3 mt-10"
      >
        <a
          href="#contact"
          className="px-6 py-3 rgb-breathe text-white text-sm font-medium rounded-lg transition-all duration-300"
        >
          Book a call
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-300"
        >
          Send a text
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
