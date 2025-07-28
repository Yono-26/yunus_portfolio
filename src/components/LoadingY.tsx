const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        {/* Outer rotating ring with gradient */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-spin">
          <div className="w-full h-full bg-background rounded-full"></div>
        </div>
        
        {/* Inner rotating ring (reverse direction) */}
        <div className="absolute inset-4 w-24 h-24 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
        
        {/* Y Letter with custom font and effects */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Y Letter */}
            <span className="font-orbitron text-6xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '2s' }}>
              Y
            </span>
            
            {/* Glow effect behind Y */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron text-6xl font-bold text-primary/20 blur-lg">
                Y
              </span>
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron text-6xl font-bold text-primary/40 blur-md">
                Y
              </span>
            </div>
          </div>
        </div>
        
        {/* Floating orbital dots */}
        <div className="absolute inset-0 w-32 h-32">
          <div className="absolute w-3 h-3 bg-primary rounded-full top-2 left-1/2 transform -translate-x-1/2 animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/2 right-2 transform -translate-y-1/2 animate-bounce shadow-lg shadow-secondary/50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-3 h-3 bg-accent rounded-full bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce shadow-lg shadow-accent/50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-primary rounded-full top-1/2 left-2 transform -translate-y-1/2 animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Loading text with gradient */}
        <div className="mt-12 text-center">
          <p className="font-inter text-xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '1.5s' }}>
            Loading...
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-3 rounded-full animate-pulse shadow-lg" style={{ animationDuration: '1.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingY;