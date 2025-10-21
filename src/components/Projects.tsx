import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "Security Tool", description: "A comprehensive security analysis tool for web applications with automated vulnerability scanning", tags: ["Python", "Security", "API"], status: "In Development" },
  { title: "Mobile App", description: "Cross-platform mobile application with modern UI and seamless user experience", tags: ["React Native", "Firebase", "TypeScript"], status: "Coming Soon" },
  { title: "Portfolio Showcase", description: "Interactive portfolio website with dynamic content management and beautiful animations", tags: ["React", "Tailwind", "Framer"], status: "Completed" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <span className="text-primary font-semibold text-lg">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group p-8 bg-gradient-card border border-border/50 hover:border-primary/50 shadow-soft hover:shadow-float transition-all hover:-translate-y-2 animate-fade-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4"><span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-badge border border-primary/30 text-foreground">{project.status}</span></div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">{project.tags.map((tag) => (<span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>))}</div>
              </div>
              <div className="flex gap-3 mt-6 pt-6 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1 border-border/50 hover:bg-primary/5 hover:border-primary transition-all"><Github className="w-4 h-4 mr-2" />Code</Button>
                <Button variant="outline" size="sm" className="flex-1 border-border/50 hover:bg-primary/5 hover:border-primary transition-all"><ExternalLink className="w-4 h-4 mr-2" />Demo</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
