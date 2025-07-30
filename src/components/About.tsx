import { useEffect, useRef, useState } from 'react';
import { Code, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="hero-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">My Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Flutter developer with a BCA degree and 6 months of real-time 
                    internship experience. I specialize in Flutter, Dart, Firebase, and state management 
                    tools like Provider and BLoC. I love building elegant UIs, integrating APIs, and 
                    creating smooth user experiences.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-gradient-card border-border/50 shadow-card text-center p-4 sm:p-8">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-4xl font-bold hero-text mb-2">6+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Months Experience</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card text-center p-4 sm:p-8">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-4xl font-bold hero-text mb-2">10+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Technologies</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card text-center p-4 sm:p-8">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-4xl font-bold hero-text mb-2">5+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Projects Built</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card text-center p-4 sm:p-8">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-4xl font-bold hero-text mb-2">3+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;