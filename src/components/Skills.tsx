import { Card } from "@/components/ui/card";
import { Shield, Smartphone, Lock, Code2 } from "lucide-react";

const skills = [
  { icon: Shield, title: "Ethical Hacking", description: "Penetration testing and vulnerability assessment", gradient: "from-primary to-accent" },
  { icon: Smartphone, title: "App Development", description: "Building native and cross-platform applications", gradient: "from-accent to-secondary" },
  { icon: Lock, title: "Cybersecurity", description: "Security fundamentals and best practices", gradient: "from-primary to-secondary" },
  { icon: Code2, title: "Android Development", description: "Native Android apps with modern architecture", gradient: "from-accent to-primary" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <span className="text-primary font-semibold text-lg">My Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Abilities</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.title} className="group p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-card transition-all hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} p-0.5 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
