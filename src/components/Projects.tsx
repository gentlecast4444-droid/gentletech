import { motion } from "framer-motion";

type ProjectItem = {
  title: string;
  videoId: string;
};

const projects: ProjectItem[] = [
  { title: "Video Project", videoId: "1eyKhSEvaC-QCgMHDgJWVpTpNVU1StL6w" },
  { title: "Video Project 2", videoId: "1YyMBf5PTlmTiweBIY8t0LqVRyFze6CHx" },
  { title: "Video Project 3", videoId: "1hq2-GY5UNfrO0n9-cC5-_2G-k-97-phZ" },
  { title: "Video Project 4", videoId: "19iNkxvpeHzxV0fL0BpcjLLDzLnn_zXJ2" },
  { title: "Video Project 5", videoId: "1PdDwqzW83T6D9tH-JTpmfFWxgdaat1tz" },
  { title: "Video Project 6", videoId: "1TZsHMDC3EH04y1134fAgec9fyqgyToUL" },
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
              <iframe
                src={`https://drive.google.com/file/d/${project.videoId}/preview`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title={project.title}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="https://drive.google.com/drive/folders/1GLrUF-clWgFxpsoefoZqKMZWgIuYfmqJ?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          See all projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
