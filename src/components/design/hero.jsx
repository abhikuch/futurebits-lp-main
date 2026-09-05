import React from "react";
import Link from "next/link";
import Image from "next/image";
import POne from "@/assets/design/profile1.png";
import PTwo from "@/assets/design/profile2.png";
import PThree from "@/assets/design/profile3.png";
import PFour from "@/assets/design/profile4.png";
import PFive from "@/assets/design/profile5.png";
import PSix from "@/assets/design/profile6.png";
import StarImg from "@/assets/design/star.svg";
import { ChevronRightIcon } from "lucide-react";
import TopNavbar from "@/components/shared/TopNavbar";
import MarketingButton from "@/components/ui/marketing-button";
import { CAL, SOCIAL } from "@/config/site";

const PrfolieLists = [
  { img: POne, alt: "" },
  { img: PTwo, alt: "" },
  { img: PThree, alt: "" },
  { img: PFour, alt: "" },
  { img: PFive, alt: "" },
  { img: PSix, alt: "" },
];

const Hero = () => {
  return (
    <section className="z-10 mx-auto flex min-h-screen w-full flex-col gap-5">
      <TopNavbar />

      <div className="mx-auto mt-[96px] w-full max-w-[1250px] px-4 sm:px-8 lg:mt-[140px]">
        <div
          className="fb-design-hero-social flex w-full flex-col items-center justify-center gap-4 mx-auto sm:flex-row"
        >
          <div className="flex items-center -space-x-4">
            {PrfolieLists.map((profile) => (
              <Image
                key={profile.img.src}
                src={profile.img}
                alt={profile.alt}
                width={1000}
                height={1000}
                className="w-[30px] sm:w-[35px] lg:w-[45px] aspect-square rounded-full object-cover"
              />
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center sm:justify-normal justify-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={index}
                    src={StarImg}
                    className="w-[18px] h-[18px] sm:w-[12px] sm:h-[12px] lg:w-[18px] lg:h-[18px]"
                    alt=""
                  />
                ))}
            </div>
            <p className="opacity-80 text-[13px] sm:text-[14px] lg:text-[18px] text-white font-poppins text-center sm:text-left">
              Trusted by founders shipping 0→1 and 1→10 products.
            </p>
          </div>
        </div>

        <div className="fb-design-hero-kicker mt-10 sm:mt-12">
          <p className="mb-5 text-center">
            <span className="fb-kicker">Product design plus frontend delivery</span>
          </p>
          <h1 className="fb-design-hero-title fb-hero-title mt-8 sm:mt-16 text-center xl:mt-8">
            Design that moves the metric, not the deck.
          </h1>
        </div>

        <div className="fb-design-hero-copy-anim mx-auto mt-6 w-full max-w-[650px] px-6 text-center sm:mt-16 lg:mt-16">
          <span className="fb-hero-copy">
            We pair product design with frontend engineering in one small team.
            Onboarding, activation, upgrade. We ship the surfaces that move your
            numbers, in your repo, every week.
          </span>
        </div>
      </div>

      <div className="fb-design-hero-cta mt-8 flex flex-col justify-center gap-4 px-5 pb-12 sm:mt-8 sm:flex-row sm:px-0 xl:mt-5">
        <Link
          href={SOCIAL.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="fb-cta-secondary w-full sm:w-[240px] text-base sm:text-lg h-14 sm:h-[55px] px-7 font-semibold"
        >
          See selected work
          <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
        </Link>
        <Link href={CAL.design} target="_blank" rel="noopener noreferrer">
          <MarketingButton tone="design" title="Book a call" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
