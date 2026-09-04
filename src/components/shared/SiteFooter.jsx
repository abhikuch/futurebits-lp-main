"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { COMPANY, NAV_ITEMS, ROUTES, SOCIAL } from "@/config/site";
import {
  IconBehance,
  IconDribbble,
  IconLinkedin,
  IconX,
} from "@/components/shared/SocialIcons";

const YEAR = new Date().getFullYear();

const SERVICE_LINKS = [
  { label: "Build", href: "/services/build" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Design", href: "/services/design" },
  { label: "Markets", href: ROUTES.markets.path },
  { label: "Integrations", href: "/services/integrations-platform" },
  { label: "Startup Partner", href: "/services/startup-tech-partner" },
];

const LEGAL_LINKS = [
  { label: "Press & Media Kit", href: ROUTES.press.path },
  { label: "Free Resources", href: ROUTES.resources.path },
  { label: "Privacy Policy", href: ROUTES.privacy.path },
  { label: "Contact", href: ROUTES.contact.path },
];

export default function SiteFooter({
  logo,
  homePath = ROUTES.home.path,
  backgroundClassName = "bg-black",
}) {
  return (
    <footer className={`${backgroundClassName} border-t border-white/10 text-white`}>
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <Link href={homePath} aria-label="Futurebits home">
              <Image
                src={logo}
                alt="Futurebits logo"
                className="h-[46px] w-[210px] sm:h-[55px] sm:w-[250px]"
                priority={false}
              />
            </Link>
            <p className="mt-4 max-w-[450px] text-sm leading-6 text-white/70">
              {COMPANY.tagline} We design, build, and ship production systems for
              teams that want speed without sacrificing quality.
            </p>
            <p className="mt-4 text-sm text-white/60">
              {COMPANY.email}
            </p>
          </div>

          <nav aria-label="Primary footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-[13px] leading-6 text-white/70 sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.url} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Services
            </h2>
            <ul className="mt-4 space-y-3 text-[13px] leading-6 text-white/70 sm:text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Connect
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-white"
                aria-label="Futurebits on X"
              >
                <IconX className="h-5 w-5" />
              </Link>
              <Link
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-white"
                aria-label="Futurebits on LinkedIn"
              >
                <IconLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${COMPANY.email}`}
                className="text-white/75 transition hover:text-white"
                aria-label="Email Futurebits"
              >
                <Mail className="h-6 w-6" aria-hidden />
              </Link>
              <Link
                href={SOCIAL.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-white"
                aria-label="Futurebits on Dribbble"
              >
                <IconDribbble className="h-5 w-5" />
              </Link>
              <Link
                href={SOCIAL.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-white"
                aria-label="Futurebits on Behance"
              >
                <IconBehance className="h-5 w-5" />
              </Link>
            </div>
            <ul className="mt-5 space-y-3 text-[13px] leading-6 text-white/70 sm:text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/55">
          <p>
            Copyright {YEAR} {COMPANY.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
