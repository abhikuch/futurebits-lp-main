"use client";

import P1 from "@/assets/design/Agrivijay_after.webp";
import P2 from "@/assets/design/Auragreen.webp";
import P3 from "@/assets/design/Brisil.webp";
import P4 from "@/assets/design/Bubblenutwash_After.webp";
import P5 from "@/assets/design/Earth_tatva_afterr.webp";
import P6 from "@/assets/design/Eco_femme.webp";
import P7 from "@/assets/design/Ekam.webp";
import P9 from "@/assets/design/revy_after.webp";
import P10 from "@/assets/design/start_upcycling_now_after.webp";
import P11 from "@/assets/design/Vaayu_after.webp";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

// Split the reviews into two rows for small screens
const topRowReviews = [
  {
    live: "PortfolioImage",
    txt: "@PortfolioImage",
    img: P1,
  },
  {
    live: "PortfolioImage1",
    txt: "@PortfolioImage1",
    img: P2,
  },
  {
    live: "PortfolioImage2",
    txt: "@PortfolioImage2",
    img: P3,
  },
  {
    live: "PortfolioImage3",
    txt: "@PortfolioImage3",
    img: P4,
  },
  {
    live: "PortfolioImage4",
    txt: "@PortfolioImage4",
    img: P5,
  },
  {
    live: "PortfolioImage5",
    txt: "@PortfolioImage5",
    img: P6,
  },
  {
    live: "PortfolioImage6",
    txt: "@PortfolioImage6",
    img: P7,
  },
  {
    live: "PortfolioImage8",
    txt: "@PortfolioImage8",
    img: P9,
  },
  {
    live: "PortfolioImage9",
    txt: "@PortfolioImage9",
    img: P10,
  },
  {
    live: "PortfolioImage10",
    txt: "@PortfolioImage10",
    img: P11,
  },
];
const bottomRowReviews = [
  {
    live: "PortfolioImage6",
    txt: "@PortfolioImage6",
    img: P7,
  },
  {
    live: "PortfolioImage8",
    txt: "@PortfolioImage8",
    img: P9,
  },
  {
    live: "PortfolioImage9",
    txt: "@PortfolioImage9",
    img: P10,
  },
  {
    live: "PortfolioImage10",
    txt: "@PortfolioImage10",
    img: P11,
  },
  {
    live: "PortfolioImage",
    txt: "@PortfolioImage",
    img: P1,
  },
  {
    live: "PortfolioImage1",
    txt: "@PortfolioImage1",
    img: P2,
  },
  {
    live: "PortfolioImage2",
    txt: "@PortfolioImage2",
    img: P3,
  },
  {
    live: "PortfolioImage3",
    txt: "@PortfolioImage3",
    img: P4,
  },
  {
    live: "PortfolioImage4",
    txt: "@PortfolioImage4",
    img: P5,
  },
  {
    live: "PortfolioImage5",
    txt: "@PortfolioImage5",
    img: P6,
  }
];

// Combined array for larger screens
const allReviews = [...topRowReviews, ...bottomRowReviews];

const ReviewCard = ({ img, live, txt }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(116.82deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)",
      }}
      className="p-[0px] rounded-2xl md:w-[563px] w-[300px] cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
    >
      <div className="rounded-xl overflow-hidden">
        <Image
          src={img.src}
          alt={live}
          className="w-full object-contain"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

// Carousel row component for reusability
const CarouselRow = ({ reviews, direction = "normal", containerRef, contentRef }) => {
  return (
    <div 
      className="flex items-center" 
      ref={containerRef}
      // style={{ willChange: "transform" }}
    >
      <div 
        className="flex items-center" 
        ref={contentRef}
        data-direction={direction}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="inline-block mx-4 transition-all duration-300 ease-in"
          >
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export function PortfolioCard() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Refs for single row (large screens)
  const containerRefTop = useRef(null);
  const contentRefTop = useRef(null);

  const containerRefBottom = useRef(null);
  const contentRefBottom = useRef(null);
  
  // Refs for dual rows (small screens)
  const topContainerRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const bottomContentRef = useRef(null);

  useEffect(() => {
    // Check screen size on mount and when window resizes
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkScreenSize(); // Check on initial render
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      // Handle small screen with two rows
      setupCarousel(topContainerRef, topContentRef, 160, 1);
      setupCarousel(bottomContainerRef, bottomContentRef, 160, -1); // Negative speed for reverse direction
    } else {
      // Handle large screen with one row
      setupCarousel(containerRefTop, contentRefTop, 160, 1);
      setupCarousel(containerRefBottom, contentRefBottom, 160, -1);
    }
  }, [isSmallScreen]); // Re-run when screen size changes

  const setupCarousel = (containerRef, contentRef, duration, direction) => {
    if (!containerRef.current || !contentRef.current) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    
    // Cleanup previously added clones
    while (container.children.length > 1) {
      container.removeChild(container.lastChild);
    }
    
    const clonedContent = content.cloneNode(true);
    container.appendChild(clonedContent);
    
    let animationFrameId;
    const totalWidth = content.offsetWidth;
    
    let startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000; // in seconds
      const distance = (elapsed * totalWidth) / duration;
      
      // Direction affects the sign of translateX
      const translateX = direction * -distance % totalWidth;
      container.style.transform = `translateX(${translateX}px)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.children.length > 1) {
        container.removeChild(container.lastChild);
      }
    };
  };
  
  return (
    <div className="relative w-full overflow-hidden py-0 sm:py-4 xl:py-0 flex flex-col items-center justify-center">
        {/* Mobile view (sm:hidden) */}
        <div className="sm:hidden flex flex-col w-full py-4">
          <div className="relative">
            <div className="flex items-center justify-center">
              <CarouselRow 
                reviews={topRowReviews} 
                direction="normal" 
                containerRef={topContainerRef} 
                contentRef={topContentRef} 
              />
            </div>
          </div>
          {/* Setting mx-4 to match the mx-4 in the carousel items */}
          <div className="relative mt-4">
            <div className="flex items-center justify-center">
              <CarouselRow 
                reviews={bottomRowReviews} 
                direction="reverse" 
                containerRef={bottomContainerRef} 
                contentRef={bottomContentRef} 
              />
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:block h-[650px] w-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <CarouselRow 
              reviews={topRowReviews} 
              containerRef={containerRefTop} 
              contentRef={contentRefTop} 
            />
          </div>
        </div>
        {/* Second row with adjusted margin to make y-spacing equal to x-spacing */}
        <div className="hidden sm:block h-[650px] w-full relative overflow-hidden -mt-[220px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <CarouselRow 
              reviews={bottomRowReviews} 
              containerRef={containerRefBottom} 
              contentRef={contentRefBottom} 
            />
          </div>
        </div>
    </div>
  );
}