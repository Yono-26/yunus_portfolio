const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-border rounded-full animate-spin border-t-primary">
        </div>
        
        {/* Y Letter with pulsing glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/3f5b12e8-05bf-4363-bc36-f19f87a53b65.png" 
              alt="Loading Y" 
              className="w-8 h-8 rounded-full bg-background p-1 shadow-lg"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 w-8 h-8 bg-primary/30 rounded-full animate-pulse blur-sm" />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        
        {/* Loading text with gradient */}
        <div className="mt-8 text-center">
          <p className="hero-text text-lg font-medium animate-pulse">Loading...</p>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto mt-2 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingY;