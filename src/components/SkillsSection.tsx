import { useState } from "react";

type SkillCategory = "ALL" | "TECH" | "TOOLS" | "STRENGTHS";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate";
  category: "TECH" | "TOOLS" | "STRENGTHS";
}

const skills: Skill[] = [
  { name: "React / Next.js", level: "Advanced", category: "TECH" },
  { name: "React Native", level: "Advanced", category: "TECH" },
  { name: "JavaScript / TS", level: "Advanced", category: "TECH" },
  { name: "HTML / CSS", level: "Advanced", category: "TECH" },
  { name: "Redux / Toolkit", level: "Advanced", category: "TECH" },
  { name: "Git / GitHub", level: "Advanced", category: "TOOLS" },
  { name: "Firebase", level: "Intermediate", category: "TOOLS" },
  { name: "Rest APIs", level: "Advanced", category: "TOOLS" },
  { name: "Problem Solving", level: "Advanced", category: "STRENGTHS" },
  { name: "UI/UX Awareness", level: "Advanced", category: "STRENGTHS" },
  { name: "Performance", level: "Advanced", category: "STRENGTHS" },
];

const categories: SkillCategory[] = ["ALL", "TECH", "TOOLS", "STRENGTHS"];

const ITEMS_PER_PAGE = 12;

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSkills =
    activeCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: SkillCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Optional: Scroll to top of skills section smoothly
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-muted"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass p-4 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-foreground font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <span
                className={`text-xs ${skill.level === "Advanced"
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/5"
            >
              Prev
            </button>

            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/5"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
