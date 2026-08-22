"use client";
import React from "react";
import IndianMarket from "@/assets/market/Indian_Markets.svg";
import UsMarket from "@/assets/market/US Markets.svg";
import Forex from "@/assets/market/Forex.svg";
import Crypto from "@/assets/market/Crypto.svg";
import Image from "next/image";
import ShimerButton from "./ShimerButton";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

const categories = [
  {
    title: "Indian Markets",
    count: "10+",
    image: IndianMarket,
    xlWidth: "340px", // Only for xl screens
    brokers: [
      "Zerodha",
      "Upstox",
      "Angel One",
      "Motilal Oswal",
      "Freetrade",
      "Dhan",
      "Aliceblue",
      "Finvasia",
      "Kotak",
      "Fyers",
    ],
  },
  {
    title: "US Markets",
    count: "2",
    image: UsMarket,
    xlWidth: "154px", // Only for xl screens
    brokers: ["Alpaca", "IBKR"],
  },
  {
    title: "Forex",
    count: "2",
    image: Forex,
    xlWidth: "174px", // Only for xl screens
    brokers: ["MT4", "MT5"],
  },
  {
    title: "Crypto",
    count: "40+",
    image: Crypto,
    xlWidth: "264px", // Only for xl screens
    brokers: [
      "Binance",
      "Kraken",
      "Bitfinex",
      "Bybit",
      "Okx",
      "Huobi",
      "MEXC",
      "Bitstamp",
      "Kucoin",
      "Dydx",
    ],
  },
];

const BrokerCircle = ({ image, title }) => {
  return (
    <div className="relative w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] mb-6 mx-auto sm:mx-0">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

const SupportedBroker = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 lg:w-full relative py-12 sm:py-20 overflow-hidden"
    >
      {/* Background effects - made responsive */}
      <div
        className="xl:block hidden absolute left-[-30%] top-[0%] xl:left-[-20%] -translate-y-1/2 w-[250px] sm:w-[410px] h-[30px] sm:h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      <div
        className="xl:block hidden absolute right-[-15%] lg:right-[-25%] xl:right-[-20%] top-[0%] -translate-y-1/2 w-[250px] lg:w-[350px] xl:w-[410px] h-[30px] xl:h-[45px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      ></div>

      <div
        className="xl:block hidden absolute top-[20%] -right-[0%] w-[150px] md:w-[200px] -translate-y-1/2 h-[150px] md:h-[200px] opacity-100 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#FFFFFF1A",
        }}
      ></div>

      <div
        className="xl:block hidden absolute top-[20%] -left-[20%] w-[150px] md:w-[200px] -translate-y-1/2 h-[200px] md:h-[200px] opacity-100 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#FFFFFF1A",
        }}
      ></div>

      <div className="container mx-auto px-2 sm:px-4 xl:px-10 relative z-20">
        {/* Section header */}
        <MotionFadeIn className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center justify-center mb-2 sm:mb-4">
            <AnimatedShinyText>
              <span className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF]/60 to-[#999999]/60">
                Supported Brokers
              </span>
            </AnimatedShinyText>
          </div>
          <h2 className="fb-h2 text-2xl sm:text-3xl md:text-[38px] leading-tight sm:leading-[1.3] md:leading-[60px] px-2">
            If it&apos;s electronically tradable, we&apos;ve integrated against
            it.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-white/60 text-sm sm:text-base px-4">
            Indian equities, US equities, FX, and crypto venues — production-grade
            across all four.
          </p>
        </MotionFadeIn>

        <MotionStagger className="grid auto-rows-fr grid-cols-1 gap-12 pt-8 sm:grid-cols-2 sm:gap-8 sm:pt-16 lg:grid-cols-4">
          {categories.map((category) => (
            <MotionStaggerItem
              key={category.title}
              className="mx-auto mb-8 flex h-full flex-col items-center sm:mb-0 sm:items-start"
            >
              {/* Using dynamic class width for non-xl screens, and style for xl screens */}
              <div
                className="w-full sm:w-auto xl:w-auto"
                style={{ maxWidth: "100%", width: "auto" }}
              >
                <div className="xl:hidden">
                  <BrokerCircle
                    image={category.image}
                    title={category.title}
                  />
                </div>

                {/* Only apply custom width on xl screens */}
                <div
                  className="hidden xl:block"
                  style={{ width: category.xlWidth }}
                >
                  <BrokerCircle
                    image={category.image}
                    title={category.title}
                  />
                </div>

                <h3 className="mb-3 text-center text-xl font-bold text-white sm:mb-4 sm:text-left">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center sm:justify-start gap-[6px] max-w-[280px] sm:max-w-none mx-auto sm:mx-0">
                  {category.brokers.slice(0, 10).map((broker, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-sm text-[#FFFFFF80] border border-[#FFFFFF24] rounded-[20px] hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                      {broker}
                    </span>
                  ))}
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionFadeIn delay={0.08} className="mx-auto mt-10 flex justify-center sm:mt-16">
          <Link href="https://cal.com/futurebits/markets?duration=30" target="_blank" className="">
            <div className="flex justify-center items-center">
              <div className="relative">
                <ShimerButton size="lg" href="/book-call" className="text-[20px]">
                  Book a call
                </ShimerButton>
              </div>
            </div>
          </Link>
        </MotionFadeIn>
      </div>
    </div>
  );
};

export default SupportedBroker;