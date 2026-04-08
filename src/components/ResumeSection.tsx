import { Download, Eye } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Resume</h2>
          <h3 className="text-xl text-primary mb-6">Professional CV</h3>

          <p className="text-muted-foreground mb-10 leading-relaxed">
            Unlock the full details of my journey, skills, and experience. Grab
            a copy of my resume below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1JYThXrKDZUVxyW_NhuM539vMN0XP7dV_/view?usp=sharing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full glow hover:scale-105 transition-transform"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a
              href="https://drive.google.com/file/d/1JYThXrKDZUVxyW_NhuM539vMN0XP7dV_/view?usp=sharing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Eye size={20} />
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
