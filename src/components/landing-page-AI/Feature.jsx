"use client";

import Image from "next/image";
import logo from "@/assets/landing-page-AI/logo.svg";
import BeamButton from "./BeamButton";
import Link from "next/link";
import { MotionFadeIn } from "@/components/shared/MotionReveal";

export default function Feature() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-black">
      <MotionFadeIn className="relative z-10 w-full max-w-full">
        <div
          className="flex w-full flex-col items-center justify-center border-b-4 border-t-4 border-transparent px-4 py-[72px] md:py-[121px]"
          style={{
            borderImageSource:
              "linear-gradient(102.72deg, #060618 0.34%, #2E2688 29.9%, #01B0EA 39.75%, #FFFFFF 49.6%, #FFFFFF 54.53%, #01B0EA 59.45%, #2E2688 69.31%, #060618 98.86%)",
            borderImageSlice: "1",
            borderImageWidth: "4px 0",
          }}
        >
        <div className="relative flex flex-col items-center mb-10">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Futurebits Logo"
              className="object-contain max-w-[220px] max-h-[84px] sm:max-w-[320px] sm:max-h-[80px] lg:max-w-[420px] lg:max-h-[114px] "
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center w-full">
          <h1 className="font-montserrat font-bold text-[20px] sm:text-[40px] sm:leading-[52px] lg:leading-[60px] text-center text-white mb-[52px] sm:mb-[82px] 3xl:text-[45px] 3xl:mb-[62px] ">
            Stop running operations on browser tabs.
            <br />
            Run them on systems we build with you.
          </h1>

          <Link
            href="https://cal.com/futurebits/ai?duration=30"
            target="_blank"
            className=" "
          >
            <BeamButton
              title="Book a call"
              className="w-[250px] sm:w-[220px]"
            />
          </Link>
        </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}
