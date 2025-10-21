import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "Coming soon - An exciting project showcasing my skills",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project 2",
    description: "Coming soon - Another innovative application",
    tags: ["Android", "Java", "Firebase"],
  },
  {
    title: "Project 3",
    description: "Coming soon - A security-focused tool",
    tags: ["Python", "Security", "API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-card border-2 border-border shadow-card hover:shadow-float hover:border-primary/50 transition-all hover:scale-105 hover:-translate-y-2 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1 border-2 border-primary/30 hover:bg-primary hover:text-white transition-all">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-2 border-primary/30 hover:bg-primary hover:text-white transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
