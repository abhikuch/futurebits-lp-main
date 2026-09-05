import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import TopNavbar from "@/components/shared/TopNavbar";
import logo from "@/assets/logo.svg";
import { ROUTES, SITE_URL } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <TopNavbar />
      <main
        id="main-content"
        className="min-h-[70vh] bg-[#060618] px-6 py-24 text-white sm:px-10"
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">404</p>
          <h1 className="mt-4 font-montserrat text-3xl font-semibold sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-white/70">
            That URL is not on futurebits.tech. Use the links below to find AI,
            design, markets, services, or contact pages.
          </p>

          <nav aria-label="Recovery links" className="mt-8 space-y-3 text-sm">
            <p>
              <Link href={ROUTES.home.path} className="underline underline-offset-4">
                Home
              </Link>
            </p>
            <p>
              <Link href={ROUTES.ai.path} className="underline underline-offset-4">
                AI &amp; Automation
              </Link>
            </p>
            <p>
              <Link href={ROUTES.design.path} className="underline underline-offset-4">
                Design
              </Link>
            </p>
            <p>
              <Link href={ROUTES.markets.path} className="underline underline-offset-4">
                Markets
              </Link>
            </p>
            <p>
              <Link href={ROUTES.uae.path} className="underline underline-offset-4">
                UAE &amp; GCC
              </Link>
            </p>
            <p>
              <Link href={ROUTES.services.path} className="underline underline-offset-4">
                Services catalog
              </Link>
            </p>
            <p>
              <a href={`${SITE_URL}/sitemap.xml`} className="underline underline-offset-4">
                Sitemap
              </a>
            </p>
            <p>
              <a href={`${SITE_URL}/llms.txt`} className="underline underline-offset-4">
                llms.txt (agent guidance)
              </a>
            </p>
            <p>
              <Link href={ROUTES.contact.path} className="underline underline-offset-4">
                Contact
              </Link>
            </p>
          </nav>
        </div>
      </main>
      <SiteFooter logo={logo} homePath={ROUTES.home.path} />
    </>
  );
}
