import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { ABOUT_PHONE_DISPLAY, ABOUT_PHONE_HREF } from "@/content/about";
import { COMPANY, SOCIAL } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";
import { MotionFadeIn } from "@/components/shared/MotionReveal";

export default function AboutClose() {
  return (
    <Section className="pb-24 pt-8">
      <Container className="max-w-3xl">
        <div className={SERVICE_HUB_THEME.ctaPanelClass}>
          <MotionFadeIn>
            <h2 className="fb-h2">Book 30 minutes. Bring the real problem.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              We will come with a read of your problem and a one-page scope
              sketch. Keep it whether you hire us or not.
            </p>
          </MotionFadeIn>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={getCalLinkForPath("/about")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#060618] transition hover:bg-white/90"
            >
              Book a call
            </Link>
            <Link href="/contact" className="fb-cta-secondary h-11 px-6 text-sm">
              Send a message
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/50">
            UAE number{" "}
            <a href={ABOUT_PHONE_HREF} className="underline underline-offset-2 hover:text-white">
              {ABOUT_PHONE_DISPLAY}
            </a>
            . Remote studio. Find us on{" "}
            <Link
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              href={SOCIAL.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              X
            </Link>
            . {COMPANY.email}
          </p>
        </div>
      </Container>
    </Section>
  );
}
