"use client";
import React from "react";
import ShimerButton from "./ShimerButton";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";
import { SERVICE_CATEGORIES, getServiceBySlugs } from "@/content/services";

// Data extracted to top level
const data = [
  {
    text: "Strategy Backtesting",
    desc: "Event-driven backtests with realistic costs, slippage, and fills so your edge estimate is grounded.",
  },
  {
    text: "Forward Testing & Shadow Mode",
    desc: "Validate behavior on live feeds in paper and shadow environments before real capital goes live.",
  },
  {
    text: "Live Trading Execution",
    desc: "Production execution systems with retries, idempotency, risk gates, and audit-ready order flow.",
  },
  {
    text: "Real-Time PnL Monitor",
    desc: "Live PnL, exposure, and system-health visibility with alerting tied to intervention workflows.",
  },
  {
    text: "Trade Analytics & Reporting",
    desc: "Daily and per-trade analytics for slippage, attribution, and edge decay tied to strategy decisions.",
  },
  {
    text: "Quant Research Infrastructure",
    desc: "Reproducible research workflows, versioned datasets, and clear promotion gates into production.",
  },
  {
    text: "System Audits & Consulting",
    desc: "Independent audits across architecture, execution, and risk with severity-ranked remediation plans.",
  },
  {
    text: "Stack Observability & Alerting",
    desc: "Telemetry and alerting for uptime, latency, fill quality, and venue-side health across the stack.",
  },
  {
    text: "TradingView Automation",
    desc: "Custom indicators, alerts, and automation flows that connect TradingView signals to execution systems.",
  },
  {
    text: "Tech Maintenance & On-Call",
    desc: "Ongoing maintenance and incident response coverage for always-on trading infrastructure.",
  },
  {
    text: "Anything else",
    desc: "Need a custom trading system? We scope edge cases, constraints, and rollout paths with your desk.",
  },
];

const MARKET_SERVICE_LINKS = {
  "Strategy Backtesting": "strategy-backtesting",
  "Forward Testing & Shadow Mode": "forward-testing-shadow-mode",
  "Live Trading Execution": "live-trading-execution-systems",
  "Real-Time PnL Monitor": "real-time-pnl-exposure-monitoring",
  "Trade Analytics & Reporting": "trade-analytics-reporting",
  "Quant Research Infrastructure": "quant-research-infrastructure",
  "System Audits & Consulting": "trading-system-audits-consulting",
  "Stack Observability & Alerting": "trading-stack-observability-alerting",
  "TradingView Automation": "tradingview-indicators-automation",
  "Tech Maintenance & On-Call": "trading-tech-maintenance-on-call",
};

// Modified card component with responsive zoom animation
const SolutionCard = ({ item, index }) => {
  const serviceSlug = MARKET_SERVICE_LINKS[item.text];
  const href = serviceSlug
    ? getServiceBySlugs("markets-trading", serviceSlug)?.path || "/services/markets-trading"
    : "/services/markets-trading";
  return (
    <Link
      href={href}
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
    </Link>
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
    <div
      id="markets-services"
      className="w-full mx-auto px-3 sm:px-4 md:px-16 lg:px-20 py-12 sm:py-16 relative overflow-hidden"
    >
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
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              SERVICE_CATEGORIES.find((c) => c.slug === "markets-trading"),
              SERVICE_CATEGORIES.find((c) => c.slug === "build"),
              SERVICE_CATEGORIES.find((c) => c.slug === "integrations-platform"),
            ]
              .filter(Boolean)
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/services/${category.slug}`}
                  className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {category.title}
                </Link>
              ))}
          </div>
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
                  Book a call
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