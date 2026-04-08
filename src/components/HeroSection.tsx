import { useEffect, useState } from "react";

const roles = [
  "React Developer",
  "Next.js Developer",
  "React Native Developer",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-accent text-lg mb-4 animate-fade-in">
          Hi, my name is
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-delay-1">
          Asmaa Ghalab.
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-delay-2 leading-tight">
          I build <span className="text-primary">high-quality</span> web and mobile apps.
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-delay-3">
          I am a specialized{" "}
          <span className="text-accent">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-delay-3 leading-relaxed">
          I specialize in <span className="text-foreground font-semibold">React</span>, <span className="text-foreground font-semibold">Next.js</span>, and <span className="text-foreground font-semibold">React Native</span>. 
          I focus on making apps fast, clean, and easy to use.
        </p>

        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full glow hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-delay-4"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
