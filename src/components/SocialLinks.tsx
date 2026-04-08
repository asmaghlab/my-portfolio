import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/asmaghlab", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/asmaa-adel-135352356", label: "LinkedIn" },
  { icon: Mail, href: "mailto:asmaghlab073@gmail.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <div className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 z-40 animate-fade-in-delay-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <link.icon size={20} />
        </a>
      ))}
      <div className="w-px h-24 bg-muted-foreground/50" />
    </div>
  );
};

export default SocialLinks;
