import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation" />
      <div className="hidden sm:block absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="hero-text">J Mohamed Yunus</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Flutter Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Building clean, efficient, and scalable cross-platform apps.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="mailto:mohamedyunus2604@gmail.com" className="flex items-center gap-2">
                <Mail size={20} className="group-hover:text-primary transition-colors" />
                <span className="hidden sm:inline">mohamedyunus2604@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="http://linkedin.com/in/yunus2604" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} className="group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/Yono-26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} className="group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" className="group" asChild>
              <a href="/MohamedYunus_Resume.pdf" download="MohamedYunus_Resume.pdf" className="flex items-center gap-2">
                <Download size={20} className="group-hover:text-primary transition-colors" />
                Resume
              </a>
            </Button>
          </div>

          {/* CTA */}
          <Button size="lg" className="glow-effect" onClick={scrollToAbout}>
            Explore My Work
            <ArrowDown size={20} className="ml-2 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;