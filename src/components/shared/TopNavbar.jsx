"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import logo from "@/assets/logo.svg";
import { NAV_OVERFLOW, NAV_ROOMS, NAV_UTILITY, ROUTES } from "@/config/site";
import { getNavAccent, getNavTone, isNavItemActive } from "@/lib/nav";
import { getCalLinkForPath } from "@/lib/page-theme";

function NavLink({ href, label, pathname, className }) {
  const active = isNavItemActive(pathname, href);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      data-nav-active={active ? "true" : "false"}
      className={`${className} ${active ? "fb-nav-link-active" : ""}`}
    >
      {label}
    </Link>
  );
}

function BookCallLink({ href, className }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-nav-cta="book-a-call"
      className={className}
    >
      Book a call
    </Link>
  );
}

function MobileNav({ pathname, calHref, accent }) {
  return (
    <details className="fb-nav-menu md:hidden">
      <summary
        aria-label="Open menu"
        className="fb-nav-icon-button"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </summary>
      <div
        className="fb-nav-sheet"
        style={{ "--fb-nav-accent": accent }}
      >
        <div className="fb-nav-inner pb-6 pt-5">
          <p className="sr-only">Menu</p>
          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Rooms">
              <p className="fb-nav-sheet-kicker">Rooms</p>
              <ul className="mt-3 space-y-1">
                {NAV_ROOMS.map((item) => (
                  <li key={item.url}>
                    <NavLink
                      href={item.url}
                      label={item.label}
                      pathname={pathname}
                      className="fb-nav-sheet-link"
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Studio">
              <p className="fb-nav-sheet-kicker">Studio</p>
              <ul className="mt-3 space-y-1">
                {NAV_UTILITY.map((item) => (
                  <li key={item.url}>
                    <NavLink
                      href={item.url}
                      label={item.label}
                      pathname={pathname}
                      className="fb-nav-sheet-link"
                    />
                  </li>
                ))}
                <li>
                  <NavLink
                    href={ROUTES.contact.path}
                    label="Contact"
                    pathname={pathname}
                    className="fb-nav-sheet-link"
                  />
                </li>
              </ul>
            </nav>
          </div>

          <nav aria-label="More" className="mt-8">
            <p className="fb-nav-sheet-kicker">More</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {NAV_OVERFLOW.filter((item) => item.url !== ROUTES.contact.path).map(
                (item) => (
                  <li key={item.url}>
                    <NavLink
                      href={item.url}
                      label={item.label}
                      pathname={pathname}
                      className="fb-nav-overflow-link"
                    />
                  </li>
                )
              )}
            </ul>
          </nav>

          <BookCallLink href={calHref} className="fb-nav-cta mt-8 w-full" />
        </div>
      </div>
    </details>
  );
}

export default function TopNavbar() {
  const pathname = usePathname();
  const calHref = getCalLinkForPath(pathname);
  const tone = getNavTone(pathname);
  const accent = getNavAccent(tone);

  return (
    <header
      className="fb-nav"
      data-nav="studio"
      data-nav-tone={tone}
      style={{ "--fb-nav-accent": accent }}
    >
      <div className="fb-nav-bar">
        <div className="fb-nav-inner flex h-16 items-center justify-between sm:h-[4.25rem]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <MobileNav pathname={pathname} calHref={calHref} accent={accent} />
            <Link
              href={ROUTES.home.path}
              aria-label="Futurebits home"
              data-nav-logo="home"
              className="inline-flex shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060618]"
            >
              <Image
                src={logo}
                alt="Futurebits logo"
                className="h-6 w-[132px] object-contain sm:h-7 sm:w-[152px]"
              />
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex lg:gap-2"
          >
            {NAV_ROOMS.map((item) => (
              <NavLink
                key={item.url}
                href={item.url}
                label={item.label}
                pathname={pathname}
                className="fb-nav-link"
              />
            ))}
            <span
              aria-hidden
              className="mx-2 hidden h-3 w-px bg-white/15 lg:block"
            />
            {NAV_UTILITY.map((item) => (
              <NavLink
                key={item.url}
                href={item.url}
                label={item.label}
                pathname={pathname}
                className="fb-nav-link"
              />
            ))}
          </nav>

          <BookCallLink href={calHref} className="fb-nav-cta shrink-0" />
        </div>
      </div>
    </header>
  );
}
