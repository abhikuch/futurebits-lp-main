import Link from "next/link";

import SiteFooter from "@/components/shared/SiteFooter";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import logo from "@/assets/logo.svg";
import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";
import { DIRECTORY_PROFILE, LINK_TO_US } from "@/content/link-building";

export default function PressPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#060618] text-white">
      <Section className="pt-8 pb-16">
        <Container className="max-w-3xl">
          <p className="fb-kicker">Press & media</p>
          <Heading as="h1" className="mt-6 fb-hero-title">
            Media kit & directory profile
          </Heading>
          <p className="mt-6 text-lg text-white/70">
            Everything journalists, directories, and partners need to reference
            Futurebits accurately. Copy blocks below are ready for Clutch,
            GoodFirms, DesignRush, and partner listings.
          </p>

          <div className="mt-12 space-y-12">
            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Short description
              </h2>
              <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/75">
                {DIRECTORY_PROFILE.shortDescription}
              </p>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Long description
              </h2>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/75">
                {DIRECTORY_PROFILE.longDescription}
              </pre>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Company facts
              </h2>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  ["Legal name", DIRECTORY_PROFILE.companyName],
                  ["Website", SITE_URL],
                  ["Email", DIRECTORY_PROFILE.email],
                  ["Phone", DIRECTORY_PROFILE.phone],
                  ["Founded", DIRECTORY_PROFILE.founded],
                  ["Min. project", DIRECTORY_PROFILE.minProjectSize],
                  ["Hourly rate", DIRECTORY_PROFILE.hourlyRate],
                  ["Team size", DIRECTORY_PROFILE.teamSize],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3"
                  >
                    <dt className="text-white/45">{label}</dt>
                    <dd className="mt-1 text-white/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Services to list (with links)
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {DIRECTORY_PROFILE.priorityServiceUrls.map((url) => (
                  <li key={url}>
                    <Link
                      href={url.replace(SITE_URL, "")}
                      className="text-[#01B0EA] underline underline-offset-4 hover:text-white"
                    >
                      {url.replace(`${SITE_URL}/services/`, "").replace(/\//g, " › ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Logo assets
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>
                  <a
                    href={ASSETS.ogAi}
                    className="text-[#01B0EA] underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI vertical (1200×630)
                  </a>
                </li>
                <li>
                  <a
                    href={ASSETS.ogDesign}
                    className="text-[#01B0EA] underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design vertical (1200×630)
                  </a>
                </li>
                <li>
                  <a
                    href={ASSETS.favicon}
                    className="text-[#01B0EA] underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Favicon
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Social profiles
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {Object.entries(DIRECTORY_PROFILE.profileLinks).map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="text-[#01B0EA] underline underline-offset-4"
                    >
                      {name}: {url}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-montserrat text-xl font-semibold">
                Link to us
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Preferred URL:{" "}
                <a href={LINK_TO_US.preferredUrl} className="text-[#01B0EA]">
                  {LINK_TO_US.preferredUrl}
                </a>
              </p>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                  Suggested anchor text
                </p>
                <ul className="mt-2 space-y-1 text-sm text-white/75">
                  {LINK_TO_US.suggestedAnchors.map((item) => (
                    <li key={item.url}>
                      &ldquo;{item.text}&rdquo; → {item.url}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                  HTML snippet
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-xs text-white/80">
                  {LINK_TO_US.htmlSnippet}
                </code>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-montserrat text-xl font-semibold">
                Press contact
              </h2>
              <p className="mt-3 text-sm text-white/70">
                {COMPANY.legalName} · {COMPANY.email} · {COMPANY.phone}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm text-[#01B0EA] underline underline-offset-4"
              >
                Contact form →
              </Link>
            </section>
          </div>
        </Container>
      </Section>
      <SiteFooter logo={logo} homePath="/" />
    </main>
  );
}
