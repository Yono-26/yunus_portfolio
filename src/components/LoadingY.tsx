const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative flex items-center justify-center">
        {/* Y Letter */}
        <div className="relative z-10">
          <img 
            src="/lovable-uploads/f654b2f0-e74d-4c57-91a8-f3052021cd1d.png" 
            alt="Loading Y" 
            className="w-12 h-12"
          />
        </div>
        
        {/* Animated bars around Y */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Top bar */}
          <div 
            className="absolute w-8 h-1 bg-primary rounded-full -top-8"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          
          {/* Top-right bar */}
          <div 
            className="absolute w-6 h-1 bg-primary rounded-full -top-6 right-4 rotate-45"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '0.2s'
            }}
          />
          
          {/* Right bar */}
          <div 
            className="absolute w-1 h-8 bg-primary rounded-full -right-8"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '0.4s'
            }}
          />
          
          {/* Bottom-right bar */}
          <div 
            className="absolute w-6 h-1 bg-primary rounded-full -bottom-6 right-4 -rotate-45"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '0.6s'
            }}
          />
          
          {/* Bottom bar */}
          <div 
            className="absolute w-8 h-1 bg-primary rounded-full -bottom-8"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '0.8s'
            }}
          />
          
          {/* Bottom-left bar */}
          <div 
            className="absolute w-6 h-1 bg-primary rounded-full -bottom-6 left-4 rotate-45"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          
          {/* Left bar */}
          <div 
            className="absolute w-1 h-8 bg-primary rounded-full -left-8"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '1.2s'
            }}
          />
          
          {/* Top-left bar */}
          <div 
            className="absolute w-6 h-1 bg-primary rounded-full -top-6 left-4 -rotate-45"
            style={{ 
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: '1.4s'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingY;