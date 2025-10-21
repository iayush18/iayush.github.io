import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <Card className="p-8 bg-card border-2 border-border shadow-card hover:shadow-float transition-all animate-fade-in">
          <div className="space-y-4 text-foreground leading-relaxed">
            <p className="text-lg">
              👋 Hi, I'm <span className="text-primary font-semibold">Ayush Kumar</span>, a passionate and curious tech enthusiast currently pursuing my B.Tech from MDU Rohtak.
            </p>
            
            <p className="text-lg">
              From a young age, I've been driven by a deep interest in technology — which led me to explore and gain skills in ethical hacking and app development.
            </p>
            
            <p className="text-lg">
              I completed my schooling under the CBSE board, passing my 10th from GBSSS Nathupura School and 12th from GSBV Burari.
            </p>
            
            <p className="text-lg">
              Currently, I'm focused on enhancing my technical skills, building innovative applications, and exploring the cybersecurity world. I believe in learning by doing and love taking on new challenges that push me out of my comfort zone.
            </p>
            
            <p className="text-lg">
              I'm always open to collaboration, internships, and opportunities where I can grow and contribute to meaningful projects.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
