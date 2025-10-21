import { Card } from "@/components/ui/card";
import { Code2, Shield, Smartphone, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">About Me</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Crafting Digital <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>👋 Hi, I'm <span className="text-foreground font-semibold">Ayush Kumar</span>, a passionate and curious tech enthusiast currently pursuing my <span className="text-foreground font-semibold">B.Tech from MDU Rohtak</span>.</p>
              <p>From a young age, I've been driven by a deep interest in technology — which led me to explore and gain skills in <span className="text-foreground font-semibold">ethical hacking</span> and <span className="text-foreground font-semibold">app development</span>.</p>
              <p>I completed my schooling under the CBSE board, passing my 10th from GBSSS Nathupura School and 12th from GSBV Burari.</p>
              <p>Currently, I'm focused on enhancing my technical skills, building innovative applications, and exploring the cybersecurity world. I believe in <span className="text-foreground font-semibold">learning by doing</span> and love taking on new challenges that push me out of my comfort zone.</p>
              <p>I'm always open to collaboration, internships, and opportunities where I can grow and contribute to meaningful projects.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 bg-gradient-card border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-card transition-all hover:scale-105 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div><h3 className="text-xl font-bold text-foreground mb-2">Security First</h3><p className="text-sm text-muted-foreground">Ethical hacking & cybersecurity</p></div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-card border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-card transition-all hover:scale-105 group mt-8">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div><h3 className="text-xl font-bold text-foreground mb-2">App Dev</h3><p className="text-sm text-muted-foreground">Building innovative solutions</p></div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-card border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-card transition-all hover:scale-105 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div><h3 className="text-xl font-bold text-foreground mb-2">Clean Code</h3><p className="text-sm text-muted-foreground">Maintainable & efficient</p></div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-card border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-card transition-all hover:scale-105 group mt-8">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div><h3 className="text-xl font-bold text-foreground mb-2">Goal Driven</h3><p className="text-sm text-muted-foreground">Always learning & growing</p></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
