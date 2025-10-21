import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="py-12 px-4 bg-background/50 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110"
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
