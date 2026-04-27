"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";

import { ChevronRightIcon } from "lucide-react";
import { BeamButton } from "./BeamButton";
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

const NavLink = ({ href, children, className, isActive }) => {
  return (
    <Link
      href={href}
      className={`${className || ""} ${
        isActive ? "text-white" : "text-white/50"
      }`}
    >
      <div className="flex items-center">
        <NavDiamond isActive={isActive} />
        {children}
      </div>
    </Link>
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

        <Link
          href={CAL.markets}
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          <div className="w-full px-10 sm:px-12">
            <BeamButton
              background="#ffffff"
              className={` relative flex w-[200px] items-center rounded-full justify-center font-medium text-[14px] sm:text-[18px] overflow-hidden px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-black bg-[#000000] `}
            >
              Book a 30-min markets call
              <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            </BeamButton>
          </div>
        </Link>
      </div>
    </SheetContent>
  </Sheet>
);

const Navbar = () => {
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

  // Calculate border position based on active link - but only when pathname changes
  useEffect(() => {
    // Find the active index
    const activeIndex = NavItems.findIndex((item) => item.url === pathname);

    if (activeIndex === -1) return; // No active item

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      const activeElement = document.querySelector(`a[href="${pathname}"]`);

      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        // Calculate center of active element
        const activeCenter = activeRect.left + activeRect.width / 2;

        // Calculate relative position
        const relativeCenter = activeCenter - containerRect.left;

        // Set position centered on the active link
        const position = relativeCenter - BORDER_TRACK_WIDTH / 1.65;

        // Update position
        setBorderPosition((prev) => ({
          ...prev,
          activeLinkId: activeIndex,
          position: position,
        }));
      }
    }, 0);
  }, [pathname]); // Only recalculate when pathname changes

  return (

    <nav className="fixed top-0 z-50  w-full">

   

    <div className="w-full lg:max-w-[950px] xl:min-w-[1100px] z-10 mx-auto rounded-b-[32px]">
      <div
        ref={containerRef}
        className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-12 lg:py-4 py-3 lg:rounded-b-[32px] relative z-10 bg-[linear-gradient(180deg,rgba(6,6,24,0.2)_0%,rgba(255,255,255,0.08)_1%)]"
        style={{
          backdropFilter: "blur(50px)",
        }}
      >
        <div
          className="absolute hidden lg:block lg:w-[95%] xl:w-[92%] mx-auto left-[5%]   bottom-0 h-1 transition-all duration-300"
          style={{

            borderBottom: "3px solid",
            borderImageSource:
              "linear-gradient(90deg, #0606181A 5.74%, #2E2688 30.03%, #01B0EA 48.13%, #FFFFFF 60.23%, #FFFFFF 66.28%, #01B0EA 70.33%, #2E2688 86.42%, #0606181A 90.72%)",
            borderImageSlice: "1",
          }}
        ></div>

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

          <div className="hidden lg:flex items-center space-x-[28px] xl:space-x-[44px] font-light text-[22px]">
            {NavItems.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <NavLink
                  key={item.label}
                  href={item.url}
                  className="text-[20px] flex items-center font-normal font-poppins"
                  isActive={isActive}
                  ref={(el) => setNavLinkRef(index, el)}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <Link
            href={CAL.markets}
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          >
            <BeamButton
              background="#ffffff"
              className={` relative flex items-center rounded-full justify-center font-medium text-[12px] sm:text-[18px] overflow-hidden px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-black bg-[#000000] `}
            >
              Book a 30-min markets call
              <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            </BeamButton>
          </Link>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
