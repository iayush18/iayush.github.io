import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-sm font-medium text-primary">Available for Internships</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Ayush Kumar
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                B.Tech Student | Ethical Hacker | App Developer
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Passionate tech enthusiast exploring cybersecurity and building innovative applications. 
                Currently studying at MDU Rohtak.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-float transition-all hover:scale-105 hover:shadow-glow"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all font-semibold"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
              </div>
              
              {/* Quick Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a href="#" className="p-2 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110">
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" className="p-2 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-float bg-gradient-card backdrop-blur-sm">
                  {/* Placeholder for profile photo */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-primary">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-6xl font-bold text-white">AK</span>
                      </div>
                      <p className="text-white text-sm font-medium">Add Your Photo Here</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-50 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-50 blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
