
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Zap, Code2, Award, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Modern particle system
    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number, opacity: number}> = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.15;
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
        
        // Draw particle
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 dark:from-background dark:via-blue-950/20 dark:to-purple-950/10">
      {/* Subtle animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-60"
      />
      
      {/* Modern gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-400/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-responsive text-center">
        <div className="reveal active">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-200/30 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 transition-all duration-300 hover:scale-105">
            <Award size={16} className="animate-pulse" />
            Industry-Leading Tech Education
          </div>
          
          {/* Powerful Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Master the
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold">
              Future of Tech
            </span>
            with Inlighn
          </h1>
          
          {/* Compelling Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your career with industry-expert training in 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Cybersecurity</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-medium"> Full Stack Development</span>, and 
            <span className="text-cyan-600 dark:text-cyan-400 font-medium"> Data Science</span>
          </p>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap size={20} className="group-hover:animate-pulse" />
                Start Your Journey
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group w-full sm:w-auto px-8 py-4 border-2 border-foreground/20 dark:border-foreground/30 text-foreground rounded-2xl font-semibold text-lg hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2">
                <Code2 size={20} />
                View Programs
              </span>
            </button>
          </div>
          
          {/* Impressive Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center gap-1">
                <Users size={16} />
                Graduates Hired
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center gap-1">
                <Award size={16} />
                Success Rate
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center gap-1">
                <Globe size={16} />
                Partner Companies
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center gap-1">
                <Sparkles size={16} />
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown size={24} className="text-muted-foreground/60" />
          <div className="w-0.5 h-6 bg-gradient-to-b from-muted-foreground/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
