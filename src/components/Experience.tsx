import { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="hero-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world experience building production-ready Flutter applications
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
            
            <Card className="bg-gradient-card border-border/50 shadow-card relative ml-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[73px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect" />
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Building className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">Flutter Developer Intern</h3>
                        <h4 className="text-lg font-semibold text-foreground">Uncia Technologies Pvt. Ltd</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>January 2025 – June 2025</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>Remote / Hybrid</span>
                      </div>

                      <div className="space-y-3 pt-4">
                        <h5 className="font-semibold flex items-center gap-2">
                          <Code2 size={16} className="text-accent" />
                          Key Responsibilities & Achievements
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Developed real-time Flutter applications with modern architecture patterns
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            Collaborated with cross-functional development teams on multiple projects
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Implemented state management solutions using Provider and BLoC patterns
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Integrated Firebase services for backend functionality and real-time data
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            Built responsive UIs following Material Design guidelines
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Gained hands-on experience with version control, code reviews, and agile methodologies
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-4">
                    <h5 className="font-semibold">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'Dart', 'Firebase', 'Provider', 'BLoC', 'REST API', 'Git', 'Material Design'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <h5 className="font-semibold mb-2">Impact</h5>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <div className="flex justify-between">
                          <span>Projects Contributed</span>
                          <span className="font-medium text-primary">5+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Code Reviews</span>
                          <span className="font-medium text-secondary">20+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Learning Hours</span>
                          <span className="font-medium text-accent">800+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;