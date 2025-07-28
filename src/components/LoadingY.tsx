const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-hero">
      <div className="relative">
        {/* Main container for perfect centering */}
        <div className="w-40 h-40 flex items-center justify-center">
          
          {/* Outer pulsing ring */}
          <div className="absolute w-36 h-36 rounded-full border-2 border-primary/30 animate-ping"></div>
          
          {/* Middle rotating ring */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-secondary/50 animate-spin" style={{ animationDuration: '4s' }}></div>
          
          {/* Inner rotating ring (opposite direction) */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-dotted border-accent/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          
          {/* Y Letter perfectly centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-orbitron text-7xl font-black bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent filter drop-shadow-2xl">
              Y
            </span>
          </div>
          
          {/* Glow layers for depth */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-orbitron text-7xl font-black text-primary/30 blur-lg">
              Y
            </span>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-orbitron text-7xl font-black text-secondary/20 blur-xl">
              Y
            </span>
          </div>
          
        </div>
        
        {/* Orbital particles with smooth movement */}
        <div className="absolute inset-0 w-40 h-40">
          <div className="absolute w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50 animate-bounce" 
               style={{ 
                 top: '10%', 
                 left: '50%', 
                 transform: 'translateX(-50%)',
                 animationDelay: '0s',
                 animationDuration: '2s' 
               }}></div>
          <div className="absolute w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/50 animate-bounce" 
               style={{ 
                 top: '50%', 
                 right: '10%', 
                 transform: 'translateY(-50%)',
                 animationDelay: '0.5s',
                 animationDuration: '2.5s' 
               }}></div>
          <div className="absolute w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 animate-bounce" 
               style={{ 
                 bottom: '10%', 
                 left: '50%', 
                 transform: 'translateX(-50%)',
                 animationDelay: '1s',
                 animationDuration: '2s' 
               }}></div>
          <div className="absolute w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-bounce" 
               style={{ 
                 top: '50%', 
                 left: '10%', 
                 transform: 'translateY(-50%)',
                 animationDelay: '1.5s',
                 animationDuration: '2.5s' 
               }}></div>
        </div>
        
        {/* Loading text with hero styling */}
        <div className="mt-16 text-center">
          <p className="hero-text text-2xl font-bold animate-pulse" style={{ animationDuration: '2s' }}>
            Loading...
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full animate-pulse shadow-glow" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingY;