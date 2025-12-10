import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  brightness: number;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Create stars with varying properties for depth
    const createStars = (width: number, height: number) => {
      const stars: Star[] = [];
      // More stars for a richer effect
      const starCount = Math.floor((width * height) / 8000);
      
      for (let i = 0; i < starCount; i++) {
        const layer = Math.random(); // 0 to 1, determines depth
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: layer < 0.3 ? Math.random() * 1.2 + 0.8 : Math.random() * 0.8 + 0.3, // Larger stars in foreground
          speed: layer < 0.3 ? Math.random() * 0.4 + 0.2 : Math.random() * 0.15 + 0.05, // Faster stars in foreground
          opacity: layer < 0.3 ? Math.random() * 0.4 + 0.6 : Math.random() * 0.3 + 0.2, // Brighter stars in foreground
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          brightness: Math.random() * 0.3 + 0.7, // Base brightness
        });
      }
      return stars;
    };

    // Set canvas size based on container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Recreate stars when resizing
      starsRef.current = createStars(canvas.width, canvas.height);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const animate = (currentTime: number) => {
      if (!ctx) return;
      
      timeRef.current = currentTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Move star diagonally (top-left to bottom-right)
        // More pronounced diagonal movement
        star.x += star.speed;
        star.y += star.speed * 0.7; // Diagonal angle

        // Reset star position when it goes off screen
        if (star.x > canvas.width + 10 || star.y > canvas.height + 10) {
          // Start from top-left area
          star.x = Math.random() * canvas.width * 0.2 - canvas.width * 0.2;
          star.y = Math.random() * canvas.height * 0.2 - canvas.height * 0.2;
        }

        // Enhanced twinkling effect
        const twinkle = Math.sin(currentTime * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6;
        const currentOpacity = star.opacity * star.brightness * twinkle;

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Different colors for variety (subtle blue/white tints)
        const colorVariation = Math.sin(star.twinkleOffset) * 0.2;
        const r = 255;
        const g = 255 + colorVariation * 30;
        const b = 255 + colorVariation * 50;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        ctx.fill();

        // Enhanced glow effect for larger/brighter stars
        if (star.size > 0.8 || star.brightness > 0.85) {
          const glowSize = star.size * 4;
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            glowSize
          );
          
          const glowOpacity = currentOpacity * 0.4;
          gradient.addColorStop(0, `rgba(255, 255, 255, ${glowOpacity})`);
          gradient.addColorStop(0.3, `rgba(200, 220, 255, ${glowOpacity * 0.6})`);
          gradient.addColorStop(0.6, `rgba(150, 180, 255, ${glowOpacity * 0.3})`);
          gradient.addColorStop(1, "rgba(100, 150, 255, 0)");
          
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 1,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default Starfield;

