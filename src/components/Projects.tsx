import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Teenage Engineering", image: project1 },
  { title: "Figure", image: project2 },
  { title: "Rivian", image: project3 },
  { title: "Nothing", image: project4 },
];

const Projects = () => {
  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          See all projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
