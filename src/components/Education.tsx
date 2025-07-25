import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Mohamed Sathak College of Arts and Science',
      period: '2022 – 2025',
      location: 'Chennai, Tamil Nadu',
      status: 'In Progress',
      description: 'Comprehensive computer science program covering software development, database management, and system analysis.',
      highlights: ['Software Engineering', 'Database Systems', 'Web Development', 'Programming Languages']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'AJS Nidhi HR Sec School',
      period: '2021 – 2022',
      location: 'Chennai, Tamil Nadu',
      status: 'Completed',
      description: 'Science stream with focus on Mathematics and Computer Science.',
      highlights: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry']
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'AJS Nidhi HR Sec School',
      period: '2019 – 2020',
      location: 'Chennai, Tamil Nadu',
      status: 'Completed',
      description: 'Foundation education with strong performance in Mathematics and Science subjects.',
      highlights: ['Mathematics', 'Science', 'English', 'Social Studies']
    }
  ];

  const certifications = [
    {
      title: 'Flutter for Beginners',
      provider: 'Udemy',
      icon: <Award className="text-primary" size={20} />,
      color: 'primary'
    },
    {
      title: 'Java Complete Course',
      provider: 'Online Platform',
      icon: <Award className="text-secondary" size={20} />,
      color: 'secondary'
    },
    {
      title: 'Flutter Development',
      provider: 'Simplilearn',
      icon: <Award className="text-accent" size={20} />,
      color: 'accent'
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
    <section ref={sectionRef} id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Education & <span className="hero-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic background and professional certifications that shaped my development journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Academic Journey
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
                
                {education.map((edu, index) => (
                  <div key={index} className="relative ml-12 pb-8 last:pb-0">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[73px] top-6 w-3 h-3 bg-primary rounded-full border-2 border-background glow-effect" />
                    
                    <Card className="bg-gradient-card border-border/50 shadow-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                            <h5 className="text-base font-semibold text-foreground">{edu.institution}</h5>
                          </div>
                          <Badge 
                            variant={edu.status === 'In Progress' ? 'default' : 'outline'}
                            className={edu.status === 'In Progress' ? 'bg-primary text-primary-foreground' : ''}
                          >
                            {edu.status}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{edu.location}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {edu.description}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {edu.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground border border-border"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-secondary" size={24} />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:scale-105 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          cert.color === 'primary' ? 'bg-primary/10 border border-primary/20' :
                          cert.color === 'secondary' ? 'bg-secondary/10 border border-secondary/20' :
                          'bg-accent/10 border border-accent/20'
                        }`}>
                          {cert.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground">{cert.provider}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Learning Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current CGPA</span>
                      <span className="font-medium text-primary">8.2/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Certifications</span>
                      <span className="font-medium text-secondary">3+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Study Hours</span>
                      <span className="font-medium text-accent">2000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;