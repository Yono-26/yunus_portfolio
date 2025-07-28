import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Smartphone, TrendingUp, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker App',
      description: 'A comprehensive Flutter app for tracking personal expenses with local storage, filtering capabilities, and detailed analytics.',
      icon: <TrendingUp className="text-primary" size={32} />,
      technologies: ['Flutter', 'Provider', 'Hive'],
      highlights: [
        'Local storage with Hive database',
        'Advanced filters and search',
        'Edit/Delete functionality',
        'Income-expense summary dashboard',
        'Responsive material design UI'
      ],
      github: 'https://github.com/Yono-26/ExpenseTracker',
      demo: 'https://github.com/Yono-26/ExpenseTracker',
      gradient: 'from-primary to-primary-glow'
    },
    {
      id: 2,
      title: 'News App',
      description: 'Modern news application built with Flutter featuring real-time news feeds, search functionality, and responsive design.',
      icon: <Search className="text-secondary" size={32} />,
      technologies: ['Flutter', 'Provider', 'REST API'],
      highlights: [
        'Real-time news integration',
        'Smart search functionality',
        'Pagination for better performance',
        'Responsive UI across devices',
        'Category-based news filtering'
      ],
      github: 'https://github.com/Yono-26/ExpenseTracker',
      demo: 'https://github.com/Yono-26/ExpenseTracker',
      gradient: 'from-secondary to-secondary-glow'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="hero-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing my Flutter development skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`bg-gradient-card border-border/50 shadow-card hover:scale-105 transition-all duration-300 ${isVisible ? 'slide-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-card/50 border border-border/50">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Smartphone size={16} className="text-accent" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="group" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} className="group-hover:text-primary transition-colors" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="group" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA for more projects */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/Yono-26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} className="group-hover:text-primary transition-colors" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;