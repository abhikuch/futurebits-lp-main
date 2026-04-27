"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  const buttonRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (!buttonRef.current) return;

    const { width, height } = buttonRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  return (
    <div className="relative inline-block group">
      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.svg
          className="absolute inset-[-9px] z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          width={dimensions.width + 20}
          height={dimensions.height + 20}
          viewBox={`0 0 ${dimensions.width + 20} ${dimensions.height + 20}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <motion.path
            d={`M 10 0 h ${dimensions.width} a 10 10 0 0 1 10 10 v ${dimensions.height} a 10 10 0 0 1 -10 10 h -${dimensions.width} a 10 10 0 0 1 -10 -10 v -${dimensions.height} a 10 10 0 0 1 10 -10`}
            stroke="url(#neon-gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            filter="url(#neon-filter)"
            animate={{
              pathLength: [0, 1],
              pathOffset: [1, 0],
              opacity: [0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
          
          {/* Gradient definition */}
          <linearGradient id="neon-gradient" x1="-10%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#060618" />
              <stop offset="20%" stopColor="#2E2688" />
              <stop offset="30%" stopColor="#2E2688" />
              <stop offset="40%" stopColor="#01B0EA" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FFFFFF" />
              <stop offset="80%" stopColor="#01B0EA" />
              <stop offset="90%" stopColor="#2E2688" />
              <stop offset="100%" stopColor="#060618" />
          </linearGradient>
        </motion.svg>
      )}
      
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`
          relative z-10 
          px-8 py-4 
          rounded-full 
          text-white 
          font-semibold 
          text-lg
          bg-[#4A3AFF]
          hover:bg-[#5D3FD3]
          transition-all 
          duration-300 
          flex 
          items-center 
          gap-2
          ${className}
        `}
      >
        {children}
        <span className="text-white opacity-70 ml-2">›</span>
      </button>
    </div>
  );
};

export default AnimatedButton;