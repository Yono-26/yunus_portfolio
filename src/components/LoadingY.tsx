const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-24 h-24 border-2 border-border/30 rounded-full animate-spin">
          <div className="w-full h-full border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Inner rotating ring (reverse direction) */}
        <div className="absolute inset-2 w-20 h-20 border-2 border-border/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
          <div className="w-full h-full border-2 border-transparent border-b-primary border-l-primary rounded-full"></div>
        </div>
        
        {/* Y Logo with glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/f654b2f0-e74d-4c57-91a8-f3052021cd1d.png" 
              alt="Loading Y" 
              className="w-10 h-10 animate-pulse"
              style={{ animationDuration: '2s' }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full blur-md animate-pulse" style={{ animationDuration: '2s' }}></div>
          </div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute inset-0 w-24 h-24">
          <div className="absolute w-2 h-2 bg-primary rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-2 h-2 bg-primary rounded-full top-1/2 right-0 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-2 h-2 bg-primary rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-primary rounded-full top-1/2 left-0 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-foreground text-lg font-medium animate-pulse" style={{ animationDuration: '1.5s' }}>Loading...</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mt-2 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingY;