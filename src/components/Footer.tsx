import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>and</span>
            <Code className="text-primary" size={16} />
            <span>by J Mohamed Yunus</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 J Mohamed Yunus. All rights reserved.
          </div>
          
          <div className="text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;