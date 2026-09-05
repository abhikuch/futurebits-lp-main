"use client";

import Image from "next/image";
import Link from "next/link";

import MarketingButton from "@/components/ui/marketing-button";
import { CAL } from "@/config/site";
import humanMachineIcon from "@/assets/market/human-machine-icon.webp";
import automationIcon from "@/assets/market/automation-icon.webp";
import partnershipIcon from "@/assets/market/partnership-icon.webp";
import futurebitsLogo from "@/assets/market/futurebits-logo.webp";

const FEATURES = [
  {
    id: 1,
    title: "Quant judgement + clean infra",
    description:
      "We don't ship strategies you don't understand. The system explains itself before it executes.",
    icon: humanMachineIcon,
    position: "left",
  },
  {
    id: 2,
    title: "Asset-class agnostic",
    description:
      "From Indian equities to crypto perps, the same engineering bar: order safety, observability, recovery.",
    icon: automationIcon,
    position: "bottom",
  },
  {
    id: 3,
    title: "Broker-grade reliability",
    description:
      "We integrate against the venues you actually trade. SLAs, sandboxing, and failure-mode testing are non-negotiable.",
    icon: partnershipIcon,
    position: "right",
  },
];

const POSITION_CLASSES = {
  left: "lg:absolute lg:left-16 lg:-bottom-[10%] lg:transform lg:-translate-x-1/2",
  bottom:
    "lg:absolute lg:-bottom-[5%] lg:left-[50%] xl:bottom-[-8%] lg:transform lg:-translate-x-1/2 lg:translate-y-1/2",
  right:
    "lg:absolute lg:right-16 lg:-bottom-[40%] xl:bottom-[-32%] lg:transform lg:translate-x-1/2 lg:-translate-y-1/2",
};

function FeatureCircle({ title, description, icon, position }) {
  return (
    <div
      className={`${POSITION_CLASSES[position]} mx-auto mb-16 w-full sm:max-w-[350px] lg:mb-0 lg:w-[300px] xl:w-[360px]`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full lg:mb-[24px] lg:h-[180px] lg:w-[180px]">
          <Image
            src={icon}
            alt=""
            width={160}
            height={160}
            className="relative z-10 h-full w-full object-contain p-2 sm:h-[160px] sm:w-[160px]"
          />
        </div>
        <div>
          <h3 className="fb-h3 mb-4 text-xl">{title}</h3>
          <p className="text-base leading-[26px] text-[#FFFFFF80]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const WhyUs = () => {
  return (
    <section className="relative mb-0 h-full overflow-hidden py-16 font-poppins sm:mb-20">
      <div
        className="absolute top-[0%] z-0 hidden h-[30px] w-[250px] -translate-y-1/2 sm:h-[65px] sm:w-[410px] xl:left-[-20%] xl:block 2xl:left-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      />
      <div
        className="absolute right-[-15%] top-[0%] z-10 hidden h-[30px] w-[250px] -translate-y-1/2 lg:w-[340px] xl:right-[-10%] xl:block xl:h-[65px] xl:w-[360px] 2xl:right-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:-mt-60 xl:-mt-60">
        <div className="mb-2 block text-center sm:mb-6 lg:hidden">
          <div className="mb-0 inline-flex items-center justify-center sm:mb-4">
            <p className="fb-kicker text-[#7BC3D8]">How we think</p>
          </div>
          <h2 className="fb-h2 text-[26px] md:text-[38px] md:leading-[60px]">
            Three commitments we don&apos;t break
          </h2>
        </div>

        <div className="block space-y-4 px-4 pt-[10px] lg:hidden">
          {FEATURES.map((feature) => (
            <FeatureCircle
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              position={feature.position}
            />
          ))}
        </div>

        <div className="mb-20 hidden items-center justify-center pb-20 pt-0 lg:flex lg:h-[1000px] xl:mb-0 xl:h-[1200px]">
          <div className="absolute left-0 top-[18%] z-50 w-full px-8 text-center xl:top-[19%]">
            <div className="mb-4 inline-flex items-center justify-center">
              <p className="fb-kicker text-[#7BC3D8]">How we think</p>
            </div>
            <h2 className="fb-h2 text-3xl md:text-5xl">
              Three commitments we don&apos;t break
            </h2>
          </div>

          <div
            className="relative h-[700px] w-[700px] rounded-full lg:-mt-[130px] xl:-mt-[180px] xl:h-[800px] xl:w-[800px]"
            style={{
              background:
                "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
              boxShadow: "0 0 0 1px transparent",
              border: "1px solid",
              borderColor: "transparent",
              backgroundImage:
                "linear-gradient(#080808, #080808), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div
              className="absolute left-1/2 top-[47%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full xl:h-[650px] xl:w-[650px]"
              style={{
                background:
                  "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
                boxShadow: "0 0 0 1px transparent",
                border: "1px solid",
                borderColor: "transparent",
                backgroundImage:
                  "linear-gradient(#080808, #080808), conic-gradient(from 366deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="absolute left-1/2 top-1/2 z-20 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6, 6, 24, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)",
                  backdropFilter: "blur(42px)",
                  border: "1px solid",
                  borderColor: "transparent",
                  backgroundImage:
                    "linear-gradient(), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              />
              <div className="relative z-30 flex h-[400px] w-[400px] items-center justify-center rounded-full">
                <Image
                  src={futurebitsLogo}
                  alt="Futurebits"
                  width={228}
                  height={200}
                  className="z-40 object-contain p-4"
                />
              </div>
            </div>

            {FEATURES.map((feature) => (
              <FeatureCircle
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                position={feature.position}
              />
            ))}
          </div>
        </div>

        <Link href={CAL.markets} target="_blank" rel="noopener noreferrer">
          <div className="mt-[20px] flex items-center justify-center">
            <div className="relative">
              <MarketingButton tone="markets" size="lg" className="text-[20px]">
                Book a call
              </MarketingButton>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
