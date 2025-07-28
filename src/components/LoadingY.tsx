const LoadingY = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-hero">
      <div className="flex flex-col items-center justify-center space-y-8">
        
        {/* Main Y Letter Container */}
        <div className="relative flex items-center justify-center w-24 h-24">
          
          {/* Clean rotating ring */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          
          {/* Y Letter - perfectly centered */}
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-orbitron text-5xl font-bold text-primary">
              Y
            </span>
          </div>
          
        </div>
        
        {/* Loading dots animation */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className="text-foreground text-lg font-medium">
            Loading...
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default LoadingY;