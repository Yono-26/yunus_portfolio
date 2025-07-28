const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        {/* Y Letter with spinning animation */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img 
            src="/lovable-uploads/3f5b12e8-05bf-4363-bc36-f19f87a53b65.png" 
            alt="Loading Y" 
            className="w-12 h-12 animate-spin"
          />
        </div>
        
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingY;