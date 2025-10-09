import { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatExperiencePeriod } from '@/lib/dateUtils';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fallback timer for mobile devices
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
        }
      },
      { 
        threshold: 0.1, // Lower threshold for mobile
        rootMargin: '50px' // Add some margin for early trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
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

          <div className="relative space-y-8">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden sm:block" />
            
            {/* Current Position */}
            <Card className="bg-gradient-card border-border/50 shadow-card relative sm:ml-16">
              {/* Timeline Dot - Hidden on mobile */}
              <div className="absolute -left-[73px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect hidden sm:block" />
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Building className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">Mobile Application Developer</h3>
                        <h4 className="text-lg font-semibold text-foreground">Uncia Technologies Pvt. Ltd</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{formatExperiencePeriod({ month: 7, year: 2025 })}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>Chennai, Tamil Nadu · On-site</span>
                      </div>

                      <div className="space-y-3 pt-4">
                        <h5 className="font-semibold flex items-center gap-2">
                          <Code2 size={16} className="text-accent" />
                          Current Role & Responsibilities
                        </h5>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                          <h6 className="font-medium text-primary mb-2">Current Project: ICICI Onboarding Application</h6>
                          <p className="text-sm text-muted-foreground">Working on bug fixes and issue handling for production banking application</p>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Leading mobile application development using Flutter and Dart
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            Implementing BLoC pattern for state management in production apps
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Working on ICICI Onboarding application for bug fixes and issue resolution
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Collaborating with cross-functional teams on full-time banking projects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-4">
                    <h5 className="font-semibold">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST API', 'Git'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internship */}
            <Card className="bg-gradient-card border-border/50 shadow-card relative sm:ml-16">
              {/* Timeline Dot - Hidden on mobile */}
              <div className="absolute -left-[73px] top-8 w-4 h-4 bg-secondary rounded-full border-4 border-background glow-effect hidden sm:block" />
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                        <Building className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary">Flutter Developer Intern</h3>
                        <h4 className="text-lg font-semibold text-foreground">Uncia Technologies Pvt. Ltd</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{formatExperiencePeriod({ month: 1, year: 2025 }, { month: 7, year: 2025 })}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>Chennai, Tamil Nadu, India · On-site</span>
                      </div>

                      <div className="space-y-3 pt-4">
                        <h5 className="font-semibold flex items-center gap-2">
                          <Code2 size={16} className="text-accent" />
                          Responsibilities & Experience
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Gained hands-on experience in Flutter framework and Dart language for mobile app development
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            Learned and implemented various Flutter architectures and state management techniques like Provider
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Worked with REST APIs for data integration and display in dynamic UI components
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Implemented Firebase services such as Authentication and Firestore for real-time database and user management
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            Built CRUD functionality using Hive DB for local data persistence
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Developed multiple mini-projects: Expense Tracker App, News App, Google Sign-In App, Simple Notes App
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Acquired complete understanding of end-to-end Flutter app development lifecycle, including UI/UX, API handling, state management, and deployment practices
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-4">
                    <h5 className="font-semibold">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'Dart', 'Firebase', 'Provider', 'Hive', 'REST API', 'BLoC'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs bg-secondary/10 text-secondary border border-secondary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <h5 className="font-semibold mb-2">Projects Built</h5>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <div className="flex justify-between">
                          <span>Expense Tracker</span>
                          <span className="font-medium text-primary">Provider + Hive</span>
                        </div>
                        <div className="flex justify-between">
                          <span>News App</span>
                          <span className="font-medium text-secondary">REST API</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Google Sign-In</span>
                          <span className="font-medium text-accent">Firebase Auth</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Notes App</span>
                          <span className="font-medium text-primary">CRUD + Hive</span>
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