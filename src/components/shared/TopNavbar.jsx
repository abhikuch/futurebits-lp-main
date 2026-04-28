"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";
import { CAL, NAV_ITEMS, ROUTES } from "@/config/site";

function NavDiamond({ isActive }) {
  return (
    <div
      className={`mr-3 rotate-45 transition-all duration-300 ${
        isActive
          ? "h-[9px] w-[9px] scale-[1.02] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          : "h-[8px] w-[8px] bg-white/25"
      }`}
    />
  );
}

function MobileNav({ pathname }) {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu">
        <HiBars3 className="h-8 w-8 text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="border-gray-800 bg-black/95 p-0 text-white">
        <div className="mt-6 flex flex-col gap-5">
          <div className="px-5">
            <Link href={ROUTES.ai.path} aria-label="Futurebits home">
              <Image
                src={logo}
                alt="Futurebits logo"
                className="h-[44px] w-[210px] object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-col divide-y-2 divide-white/10 px-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`);
              return (
                <SheetClose key={item.label} asChild>
                  <Link
                    href={item.url}
                    className={`flex items-center px-6 py-4 text-xl transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <NavDiamond isActive={isActive} />
                    {item.label}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
          <SheetClose asChild>
            <Link
              href={CAL.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-10 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#060618] transition hover:bg-white/90"
            >
              Book a call
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function TopNavbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 z-50 w-full px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[1160px] pt-2">
        <div
          className="relative mx-auto w-full rounded-2xl border border-white/15 bg-[#0b1020]/82 px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] sm:px-5 sm:py-3 lg:px-7"
          style={{ backdropFilter: "blur(24px)" }}
        >
          <div
            className="absolute bottom-0 left-[4%] hidden h-px w-[92%] lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(1,176,234,0.95) 35%, rgba(255,255,255,0.95) 50%, rgba(1,176,234,0.95) 65%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex lg:hidden">
                <MobileNav pathname={pathname} />
              </div>
              <Link href={ROUTES.ai.path} aria-label="Futurebits home">
                <Image
                  src={logo}
                  alt="Futurebits logo"
                  className="h-[28px] w-[172px] object-contain sm:h-[34px] sm:w-[188px]"
                />
              </Link>
            </div>
            <div className="hidden items-center space-x-6 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`);
                return (
                  <Link
                    key={item.label}
                    href={item.url}
                    className={`flex items-center font-poppins text-[18px] ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <NavDiamond isActive={isActive} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href={CAL.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center justify-center rounded-full border border-[#5d64ff] bg-[#4c57e6] px-4 text-[13px] font-semibold text-white shadow-[0_6px_22px_rgba(76,87,230,0.5)] transition hover:bg-[#5b66ee] sm:inline-flex sm:h-10 sm:px-5 sm:text-sm"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
