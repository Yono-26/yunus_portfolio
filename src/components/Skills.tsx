import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const topSkills = [
    { name: 'Flutter', level: 90, color: 'primary' },
    { name: 'Dart', level: 85, color: 'secondary' },
    { name: 'Firebase', level: 80, color: 'accent' },
    { name: 'Provider', level: 85, color: 'primary' },
    { name: 'BLoC', level: 75, color: 'secondary' },
    { name: 'REST API', level: 88, color: 'accent' }
  ];

  const otherSkills = [
    'Hive', 'Java', 'JavaScript', 'HTML', 'CSS', 'Git', 'UI/UX Design', 
    'State Management', 'Material Design', 'Responsive Design'
  ];

  useEffect(() => {
    // Fallback timer for mobile devices
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);

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

  const SkillMeter = ({ skill, index }: { skill: typeof topSkills[0], index: number }) => (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="relative">
          <div className="skill-meter">
            <div 
              className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
                skill.color === 'primary' ? 'bg-primary' :
                skill.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
              }`}
              style={{ 
                width: isVisible ? `${skill.level}%` : '0%',
                transitionDelay: `${index * 200}ms`
              }}
            />
          </div>
          <div className={`absolute -top-1 rounded-full w-3 h-3 transition-all duration-1000 ease-out ${
            skill.color === 'primary' ? 'bg-primary shadow-primary' :
            skill.color === 'secondary' ? 'bg-secondary shadow-secondary' : 'bg-accent'
          } glow-effect`}
            style={{ 
              left: isVisible ? `calc(${skill.level}% - 6px)` : '-6px',
              transitionDelay: `${index * 200}ms`
            }}
          />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Top Skills with Meters */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {topSkills.map((skill, index) => (
              <SkillMeter key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Other Skills */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Other Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {otherSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full border border-border text-sm font-medium transition-all duration-300 hover:scale-105 hover:glow-effect ${
                      index % 3 === 0 ? 'hover:text-primary hover:border-primary' :
                      index % 3 === 1 ? 'hover:text-secondary hover:border-secondary' :
                      'hover:text-accent hover:border-accent'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
