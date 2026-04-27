import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WavyBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions based on parent container
    const setDimensions = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    // Initial setup
    setDimensions();
    
    // Handle resize events
    const handleResize = () => {
      setDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Wave parameters with subtle gray colors
    const waves = [
      { wavelength: 300, amplitude: 40, speed: 0.06, offset: 0, colorStart: 'rgba(120, 120, 130, 0.4)', colorEnd: 'rgba(0, 0, 0, 0)' },
      { wavelength: 220, amplitude: 30, speed: 0.08, offset: 2, colorStart: 'rgba(100, 100, 110, 0.5)', colorEnd: 'rgba(0, 0, 0, 0)' },
      { wavelength: 180, amplitude: 25, speed: 0.04, offset: 4, colorStart: 'rgba(80, 80, 90, 0.4)', colorEnd: 'rgba(0, 0, 0, 0)' },
    ];
    
    let time = 0;
    
    // Animation loop
    const animate = () => {
      time += 0.1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill with transparent black to allow parent background to show through
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach((wave, waveIndex) => {
        // Create filled waves with gradients
        const points = [];
        
        // Calculate all wave points
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = Math.sin(x / wave.wavelength + time * wave.speed + wave.offset) * wave.amplitude;
          const baseY = canvas.height / 2 + 50 * waveIndex;
          points.push({ x, y: baseY + y });
        }
        
        // Draw the wave as a closed shape to be filled
        ctx.beginPath();
        ctx.moveTo(0, canvas.height); // Start at bottom left
        ctx.lineTo(points[0].x, points[0].y); // Move to first wave point
        
        // Draw the top of the wave
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        
        // Close the shape
        ctx.lineTo(canvas.width, canvas.height); // Bottom right
        ctx.closePath();
        
        // Create gradient that blends better with black background
        const gradient = ctx.createLinearGradient(0, points[0].y - wave.amplitude, 0, canvas.height);
        gradient.addColorStop(0, wave.colorStart);
        gradient.addColorStop(0.6, wave.colorEnd); // Faster fade to transparent
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </motion.div>
  );
};

export default WavyBackground;