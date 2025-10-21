import { Card } from "@/components/ui/card";
import { Shield, Smartphone, Lock, Code } from "lucide-react";

const skills = [
  {
    title: "Ethical Hacking",
    icon: Shield,
    description: "Security testing and vulnerability assessment",
  },
  {
    title: "App Development",
    icon: Smartphone,
    description: "Building mobile applications with modern frameworks",
  },
  {
    title: "Cybersecurity Basics",
    icon: Lock,
    description: "Understanding security principles and best practices",
  },
  {
    title: "Android Development",
    icon: Code,
    description: "Creating native Android applications",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="p-6 bg-card border-2 border-border shadow-card hover:shadow-float hover:border-primary/50 transition-all hover:scale-105 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
