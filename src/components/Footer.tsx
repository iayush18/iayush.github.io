import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/iayush18", target: "_blank" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ayush9718", target: "_blank" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ayush.singh_124/", target: "_blank" },
  ];

  return (
    <footer className="py-12 px-4 bg-card border-t-2 border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="border-2 border-primary/30 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 shadow-card hover:shadow-glow"
                asChild
              >
                <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
