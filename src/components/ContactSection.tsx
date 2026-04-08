import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/asmaghlab073@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New submission from ${formData.name}`,
          }),
        }
      );

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Get In Touch
          </h2>

          <p className="text-muted-foreground text-center mb-12">
            I'm currently looking for new opportunities. My inbox is always
            open!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="+1 234 567 890"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSuccess ? (
                "Message Sent!"
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
            {isSuccess && (
              <p className="text-center text-green-500 mt-4">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>

          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Or find me on
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/asmaghlab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/asmaa-adel-135352356"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:asmaghlab073@gmail.com"
                className="p-4 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
