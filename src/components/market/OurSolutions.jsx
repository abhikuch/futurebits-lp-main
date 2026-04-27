"use client";
import React from "react";
import ShimerButton from "./ShimerButton";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";

// Data extracted to top level
const data = [
  {
    text: "Backtesting",
    desc: "Event-driven backtests with slippage, fees, partial fills — so the equity curve isn't a fantasy.",
  },
  {
    text: "Forward Testing",
    desc: "Paper and shadow mode against live feeds before a rupee is at risk.",
  },
  {
    text: "Live Strategies",
    desc: "Production execution with retries, idempotency, and audit trails.",
  },
  {
    text: "Real-time Monitor",
    desc: "Live PnL, exposure, and health checks with alerting that pages a human.",
  },
  {
    text: "Advance Reports",
    desc: "Daily and per-trade analytics — slippage, factor attribution, edge decay — built into the workflow.",
  },
  {
    text: "Research",
    desc: "Hypothesis-driven research notebooks that turn into production-ready code.",
  },
  {
    text: "Consulting",
    desc: "Code and risk audits for existing systems. Findings, severity, fix plan.",
  },
  {
    text: "System Monitoring",
    desc: "Uptime, latency, and venue-side health, end-to-end.",
  },
  {
    text: "TradingView Customs",
    desc: "Custom indicators, alerts, and Pine Script tuned to your strategy.",
  },
  {
    text: "Tech Maintenance",
    desc: "On-call engineering for your trading stack so weekends stay weekends.",
  },
  {
    text: "Anything else",
    desc: "If it's electronic and it trades, we've probably built around it. Tell us.",
  },
];

// Modified card component with responsive zoom animation
const SolutionCard = ({ item, index }) => {
  return (
    <div
      className="w-full mx-auto rounded-xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:-skew-x-1 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 ease-in-out border border-transparent group cursor-pointer"
      style={{
        background:
          "linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, rgba(51, 51, 51, 0.6) 100%)",
      }}
    >
      <div className="h-full relative">
        {/* Gradient border using pseudo-element for better compatibility */}
        <div
          className="absolute inset-0 rounded-xl opacity-40 cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 49.4%, rgba(1, 176, 234, 0.2) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        ></div>

        {/* Blue hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 76.4%, rgba(255, 255, 255, 0.1) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        ></div>

        {/* Title tab with responsive text sizing */}
        <div className="absolute top-0 left-2 -mt-5 bg-[#080808] px-3 py-1">
          <h3 className="fb-h3 text-white text-base sm:text-lg transition-all duration-300 group-hover:text-lg sm:group-hover:text-[22px]">
            {item.text}
          </h3>
        </div>

        {/* Content */}
        <div className="pt-[30px] sm:pt-[37px] pb-[25px] sm:pb-[32px] pl-[20px] sm:pl-[36px] pr-[15px] sm:pr-[20px]">
          <p className="text-[#FFFFFF99] text-xs sm:text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main component
const OurSolutions = () => {
  // Function to detect current grid columns based on screen size
  const [totalColumns, setTotalColumns] = React.useState(3);
  
  React.useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setTotalColumns(3); // lg screens - 3 columns
      } else if (window.innerWidth >= 768) {
        setTotalColumns(2); // md screens - 2 columns
      } else {
        setTotalColumns(1); // sm screens - 1 column
      }
    };
    
    // Initial call
    updateColumns();
    
    // Add event listener
    window.addEventListener('resize', updateColumns);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="w-full mx-auto px-3 sm:px-4 md:px-16 lg:px-20 py-12 sm:py-16 relative overflow-hidden">
      {/* Background glow effects without animation */}
      <div
        className="xl:block hidden absolute left-[-25%] -top-[5%] w-[350px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(40deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute lg:right-[-22%] xl:right-[-25%] -top-[5%] w-[410px] h-[45px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-30deg) translateX(-60%)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[20%] right-0 w-[200px] md:w-[100px] h-[200px] md:h-[400px] opacity-70 rounded-full z-0 bg-[#2670881A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[20%] left-0 w-[200px] md:w-[100px] h-[300px] md:h-[400px] opacity-70 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#2670881A",
        }}
      ></div>
      <div className="container mx-auto px-2 sm:px-4 xl:px-12 relative z-20">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-1 sm:mb-4">
            <AnimatedShinyText>
              <span className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF]/60 to-[#999999]/60">
                What we build
              </span>
            </AnimatedShinyText>
          </div>
          <h2 className="fb-h2 text-2xl sm:text-3xl md:text-[38px] leading-[1.3] md:leading-[60px]">
            One stack across the trading lifecycle
          </h2>
        </div>

        {/* Cards Grid without animations */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            columnGap: "24px",
            rowGap: "32px",
          }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <SolutionCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="flex justify-center mt-10 sm:mt-16">
          <Link href="https://cal.com/futurebits/markets?duration=30" target="_blank" className="">
            <div className="flex justify-center items-center">
              <div className="relative">
                <ShimerButton size="lg" href="/book-call" className="text-base sm:text-[20px]">
                  Book a 30-min markets call
                </ShimerButton>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;