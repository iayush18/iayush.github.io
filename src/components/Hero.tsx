import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Soft floating shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-badge rounded-full border border-primary/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for Internships</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">Hello There! 👋</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                  I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Ayush Kumar</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
                B.Tech Student | Ethical Hacker | App Developer
              </p>
              
              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Passionate tech enthusiast exploring cybersecurity and building innovative applications. 
                Currently studying at MDU Rohtak.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft hover:shadow-float transition-all hover:scale-105 px-8 rounded-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all font-semibold px-8 rounded-full"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Work
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start pt-6">
                <a href="https://github.com/iayush18" target="_blank" className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 border-2 border-border hover:border-primary transition-all hover:scale-110 flex items-center justify-center shadow-soft">
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a href="https://linkedin.com/in/ayush9718" target="_blank" className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 border-2 border-border hover:border-primary transition-all hover:scale-110 flex items-center justify-center shadow-soft">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="flex-shrink-0 relative">
              {/* Main image container */}
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                  {/* Border ring */}
                  <div className="absolute inset-0 rounded-full border-[6px] border-card shadow-float"></div>
                  
                  {/* Photo placeholder */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-card backdrop-blur-sm">
                    <img
                      src="/Ayush.png"
                      alt="Ayush Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on screens < lg (<=1023px) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden lg:flex" onClick={scrollToAbout}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
