import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech",
    institution: "MDU Rohtak",
    period: "Present",
    description: "Currently pursuing Bachelor of Technology",
  },
  {
    degree: "Class 12th (CBSE)",
    institution: "GSBV Burari",
    period: "Completed",
    description: "Completed senior secondary education",
  },
  {
    degree: "Class 10th (CBSE)",
    institution: "GBSSS Nathupura School",
    period: "Completed",
    description: "Completed secondary education",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-primary">{edu.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
