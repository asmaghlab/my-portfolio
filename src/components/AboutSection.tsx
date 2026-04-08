const traits = ["Fast Learner", "Clean Code", "Modern UI"];

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center m-4">
                <div className="w-100 h-100 rounded-xl bg-card border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img src="/AG.jpg" alt="Asmaa Ghalab" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-xl" />
            </div>
            <div className="flex-1 space-y-6">

              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Asmaa Ghalab</span>. I'm a Front-End Developer
                who loves building fast and clean apps. I have a background in Computer Science and I've worked on
                many web and mobile projects.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-semibold">React</span> and <span className="text-foreground font-semibold">Next.js</span> for
                websites, and <span className="text-foreground font-semibold">React Native</span> for mobile apps. I focus on writing
                simple and clean code that is easy to maintain.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My goal is to create great user experiences using the latest technologies. I'm always 
                looking for new challenges and ways to improve my skills.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
