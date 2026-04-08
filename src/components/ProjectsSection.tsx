import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  codeUrl: string;
  liveUrl: string;
  tags: string[];
  
}


const projects: Project[] = [
  {
    title: "Voya - Flight & Hotel Booking",
    description:
      "A fast travel booking website for hotels and flights. Built with React and Redux for smooth searching and booking. I focused on making it look great and work perfectly on mobile devices.",
    image: "/Voya.png",
    codeUrl: "https://github.com/asmaghlab/Voya--web-.git",
    liveUrl: "https://voya-web-18.vercel.app/",
    tags: ["React", "Redux", "Tailwind CSS"],
  },

  {
    title: "Burgerizza - Food Ordering",
    description:
      "A food ordering app where users can easily browse and order meals. I used Redux to manage the cart and ensured a clean, easy-to-use design that works on all screens.",
    image: "/burgerizza.png",
    codeUrl: "https://github.com/asmaghlab/Burgerizzaa-main.git",
    liveUrl: "https://burgerizzaa-main-8mdp.vercel.app/",
    tags: ["React", "Redux", "Tailwind CSS"],
  },

  {
    title: "Fresh Cart - E-commerce",
    description:
      "An easy-to-use E-commerce store. Built with a clean structure using React and Redux to make the shopping experience fast and reliable.",
    image: "/freshCart.png",
    codeUrl: "https://github.com/asmaghlab/FreshCartt.git",
    liveUrl: "https://fresh-cart17.vercel.app",
    tags: ["React", "Redux", "Bootstrap"],
  },
  {
    title: "Livingo - Furniture Store",
    description:
      "Designed and built a modern e-commerce interface prioritizing UI/UX best practices. Implemented dynamic product filtering and category navigation using optimized JavaScript to ensure lightweight performance and instant interactivity.",
    image: "/livingo.png",
    codeUrl: "https://github.com/asmaghlab/Livingoo.git",
    liveUrl: "https://livingoo-zs64.vercel.app/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },

  {
    title: "Educational Platform",
    description:
      "Created an interactive educational portal prioritizing accessibility and clear content hierarchy. Utilized modern CSS3 animations and semantic HTML5 to deliver an engaging and intuitive user learning experience.",
    image: "/platform_education.jpg",
    codeUrl: "https://github.com/asmaghlab/graduation-project.git",
    liveUrl: "https://graduation-project-zpu4.vercel.app",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Portfolio Template",
    description:
      "Crafted a clean, responsive landing page demonstrating core frontend fundamentals. Integrated third-party libraries for dynamic content presentation and ensured rigorous cross-browser compatibility.",
    image: "/simpleWebsite.png",
    codeUrl: "https://lnkd.in/gnDptke5",
    liveUrl: "https://livingoo.vercel.app/",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    title: "Movies App",
    description:
      "A full-featured React application to view, add, edit, and delete movies. Includes API movies and user-added movies saved in localStorage. Supports search, genre filtering, rating display, and pagination.",
    image: "/movies.png",
    codeUrl: "https://github.com/asmaghlab/Movies-app.git",
    liveUrl: "https://movies-app-kappa-two.vercel.app",
    tags: ["React", "Bootstrap", "JavaScript", "localStorage", "API"],
  }
];    



const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-20 text-center animate-fade-in">
          Selected Works
        </h2>

        <div className="flex flex-col gap-24 md:gap-32 max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative grid grid-cols-12 items-center gap-6"
            >
              {/* Image Section */}
              <div
                className={`col-span-12 md:col-span-7 relative ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                  }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-xl bg-muted/20 relative group overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto md:h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </a>
              </div>

              {/* Content Section */}
              <div
                className={`col-span-12 md:col-span-5 relative z-20 pointer-events-none md:row-start-1 ${index % 2 === 0
                  ? "md:col-start-8 md:text-right"
                  : "md:col-start-1 md:text-left"
                  }`}
              >
                <div
                  className={`
                    relative
                    lg:absolute
                    lg:top-1/2
                    lg:-translate-y-1/2
                    lg:w-[120%]
                    ${index % 2 === 0 ? "lg:right-0" : "lg:left-0"}
                  `}
                >
                  <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
                    Featured Project
                  </p>

                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors pointer-events-auto"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="
                    relative 
                    bg-slate-900/80 
                    backdrop-blur-xl 
                    border border-white/10 
                    p-6 md:p-8 
                    rounded-lg 
                    shadow-2xl 
                    mb-6 
                    pointer-events-auto 
                    text-base 
                    text-slate-300 
                    leading-relaxed 
                    hover:shadow-primary/20 
                    hover:border-primary/30 
                    transition-all 
                    duration-300
                  ">
                    {project.description}
                  </div>

                  <ul
                    className={`flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-8 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 text-primary rounded-full border border-emerald-500/10"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex items-center gap-6 pointer-events-auto ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                  >
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label="View Source Code"
                      title="View Source Code"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label="View Live Demo"
                      title="View Live Demo"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <a
            href="https://github.com/asmaghlab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-mono text-sm tracking-wide"
          >
            View Full Project Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
