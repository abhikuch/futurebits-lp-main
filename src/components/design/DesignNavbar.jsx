"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";

import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import MarketingButton from "@/components/ui/marketing-button";
import { CAL, NAV_ITEMS, ROUTES } from "@/config/site";

const NavItems = NAV_ITEMS;
const BORDER_TRACK_WIDTH = 500;

// Custom Diamond component that handles both regular and glowing states
const NavDiamond = ({ isActive }) => {
  return (
    <div
      className={`rotate-45 transition-all duration-300 mr-3 ${
        isActive
          ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
          : "w-[9.5px] h-[9.5px] bg-transparent"
      }`}
    >
      {isActive ? (
        <span className="absolute blur-[5px] bg-[#ffffff] w-[10px] h-[10px] "></span>
      ) : (
        <span className="absolute  bg-[#ffffff]/20 w-[10px] h-[10px] "></span>
      )}
    </div>
  );
};

const MobileNavigation = ({ navItems, currentPath }) => (
  <Sheet>
    <SheetTrigger className="">
      <HiBars3 className="text-white mt-[5px] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]" />
    </SheetTrigger>
    <SheetContent
      side="left"
      className="bg-black/95 text-white border-gray-800 p-0"
    >
      <div className="flex flex-col gap-5 mt-6 ">
        <div className="px-5">
          <Link href={ROUTES.ai.path} aria-label="Futurebits home">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="FutureBits logo"
                className="h-[30px] w-[200px] -ml-[15px] sm:ml-0  sm:h-[50px] sm:w-[210px] "
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col px-4 divide-y-2 divide-white/10">
          {navItems.map((item) => {
            const isActive = currentPath === item.url;
            return (
              <Link
                key={item.label}
                href={item.url}
                className={`text-xl px-6 sm:px-12 py-4 ${
                  isActive ? "text-white" : "text-white/50"
                } hover:text-white/80 transition-colors flex items-center`}
              >
                <NavDiamond isActive={isActive} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="w-full  px-10 sm:px-12">
          <Link
            href={CAL.design}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MarketingButton
              tone="design"
              size="sm"
              className="w-[200px] text-[14px] sm:text-[18px] sm:h-[45px]"
              title="Book a 30-min product call"
            />
          </Link>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const NavLink = React.forwardRef(
  ({ href, children, className, isActive }, ref) => (
    <Link
      href={href}
      ref={ref}
      className={`${className || ""} ${
        isActive ? "text-white" : "text-white/50"
      }`}
    >
      <div className="flex items-center">
        <NavDiamond isActive={isActive} />
        {children}
      </div>
    </Link>
  )
);

NavLink.displayName = "NavLink";
const DesignNavbar = () => {
  const pathname = usePathname();

  const containerRef = useRef(null);
  const navLinksRef = useRef([]);
  const [borderPosition, setBorderPosition] = useState({
    activeLinkId: null,
    position: 0,
  });

  // Store refs for each nav link
  const setNavLinkRef = (index, el) => {
    navLinksRef.current[index] = el;
  };

  useEffect(() => {
    const activeIndex = NavItems.findIndex((item) => item.url === pathname);
    if (activeIndex === -1) return;

    setTimeout(() => {
      const activeElement = navLinksRef.current[activeIndex];
      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        const activeCenter = activeRect.left + activeRect.width / 2;
        const relativeCenter = activeCenter - containerRect.left;
        const position = relativeCenter - BORDER_TRACK_WIDTH / 1.65;

        setBorderPosition((prev) => ({
          ...prev,
          activeLinkId: activeIndex,
          position: position,
        }));
      }
    }, 0);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50  w-full">
    <div className="w-full relative lg:max-w-[950px] xl:min-w-[1100px]  mx-auto rounded-b-[32px]">
      <div
        ref={containerRef}
        className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-12 lg:py-4 py-3 lg:rounded-b-[32px] relative z-50 bg-[#042330]"
        style={{
          backdropFilter: "blur(100px)",
        }}
      >
        

        {/* {borderPosition.activeLinkId !== null && ( */}
        <div
          className="absolute hidden lg:block lg:w-[95%] xl:w-[92%] mx-auto left-[5%]   bottom-0 h-1 transition-all duration-300"
          style={{
        
            borderBottom: "3px solid",
            borderImageSource:
              "linear-gradient(90deg, #042330 5.74%, #2E2688 30.03%, #01B0EA 38.13%, #FFFFFF 46.23%, #FFFFFF 50.28%, #01B0EA 54.33%, #2E2688 62.42%, #042330 86.72%)",
            borderImageSlice: "1",
          }}
        ></div>
        {/* )} */}

        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-1 sm:space-x-3">
            <div className="flex lg:hidden items-center">
              <MobileNavigation navItems={NavItems} currentPath={pathname} />
            </div>
            <div className="">
              <Link href={ROUTES.ai.path} aria-label="Futurebits home">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="FutureBits logo"
                    className="h-[30px] w-[200px] -ml-[15px] sm:ml-0  sm:h-[50px] sm:w-[210px] "
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-[28px] xl:space-x-[44px] font-light text-[22px] ">
            {NavItems.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <NavLink
                  key={item.label}
                  href={item.url}
                  className="text-[20px] flex items-center font-normal font-poppins"
                  isActive={isActive}
                  ref={(el) => setNavLinkRef(index, el)} // Set the ref here
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <Link
            href={CAL.design}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MarketingButton
              tone="design"
              size="sm"
              className="text-[12px] sm:text-[18px] sm:h-[45px]"
              title="Book a 30-min product call"
            />
          </Link>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default DesignNavbar;
