"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaDribbble, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {  MdOutlineEmail } from "react-icons/md";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="max-w mx-auto bg-[#08081E] text-white pt-12 pb-6 lg:py-14 lg:px-[102px] xl:px-[142px] relative">
      {/* Gradient border line at the top */}
      <div
        className="absolute top-0 left-0 right-0 h-px w-full"
        style={{
          borderTop: "1px solid",
          borderImageSource:
            "linear-gradient(90deg, rgba(6, 6, 24, 0.3) 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.3) 80%, rgba(6, 6, 24, 0.3) 100%)",
          borderImageSlice: "1",
        }}
      />

    

<div className="flex flex-col md:flex-row justify-between items-center sm:px-8 lg:px-0 xl:px-0">
        {/* Logo and Copyright Section - Left Side */}
        <div className="mb-6 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src={logo}
                alt="FutureBits Logo"
                className="w-[268px] h-[60px] sm:w-[258px] sm:h-[55px]"
  
              />
            </Link>
            <p className="hidden sm:inline-block  sm:max-w-[320px]  lg:max-w-[400px] xl:max-w-full mt-7 text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 sm:px-6 lg:px-0 ">
              Copyright©2025 All rights reserved <span className="inline-block px-[6px] lg:px-[10px]">|</span> Made with ❤️ & 💪 by
              Futurebits.
            </p>
          </div>
        </div>

        {/* Social Media and Contact - Right Side */}
        <div className="flex flex-col items-center sm:items-end lg:items-end mt-6 sm:mt-[25px] sm:pr-[30px] lg:pr-0  lg:mt-8">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4">
           
            <Link
              href="https://x.com/FuturebitsTech"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <FaXTwitter className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/futurebitstech/"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <FaLinkedin className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="mailto:admin@futurebits.tech"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <MdOutlineEmail className="mt-[-4px] w-[28px] h-[28px] sm:h-[24px] sm:w-[24px] lg:w-[34px] lg:h-[34px]" />
            </Link>
            <Link
              href="https://dribbble.com/futurebits"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <FaDribbble className=" mt-[-1px] sm:mt-[0px] w-[24px] h-[24px] sm:h-[24px] sm:w-[24px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="https://www.behance.net/futurebits"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <FaBehance className="mt-[-3px] w-[28px] h-[28px] sm:h-[24px] sm:w-[24px] lg:w-[38px] lg:h-[38px]" />
            </Link>
          </div>

          {/* Contact Details Below Icons */}
          <div className="text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 ">
            <p>+971585165671 | admin@futurebits.tech</p>
          </div>
        </div>

        <p className="inline-block items-center text-center px-6 sm:hidden mt-10 text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 ">
          Copyright©2025 All rights reserved <span className="finline-block px-[5px]">|</span> Made with ❤️ & 💪 by Futurebits.
        </p>
      </div>

    </footer>
  );
};

export default Footer;