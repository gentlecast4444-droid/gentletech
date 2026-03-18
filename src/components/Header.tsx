import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6">
      <nav className="flex items-center gap-1 rounded-lg bg-secondary/80 backdrop-blur-md p-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
              active === item.label
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === item.label && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 bg-accent rounded-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
