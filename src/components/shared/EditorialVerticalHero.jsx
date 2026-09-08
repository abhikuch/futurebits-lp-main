import Link from "next/link";

import TopNavbar from "@/components/shared/TopNavbar";

const INDEX_BY_VERTICAL = {
  ai: "01",
  markets: "02",
  design: "03",
  neutral: "Studio",
};

export default function EditorialVerticalHero({
  vertical,
  discipline,
  title,
  lede,
  proof,
  primaryHref,
  secondaryHref,
  secondaryLabel,
  motifLabel,
}) {
  return (
    <section
      className="fb-vertical-hero"
      data-editorial-vertical={vertical}
    >
      <TopNavbar />
      <div className="fb-editorial-shell">
        <header className="fb-vertical-hero-header">
          <p>{INDEX_BY_VERTICAL[vertical]}</p>
          <p>{discipline}</p>
          <p>Futurebits / 2026</p>
        </header>

        <div className="fb-vertical-hero-grid">
          <div className="fb-vertical-hero-copy">
            <p className="fb-editorial-kicker">{discipline}</p>
            <h1>{title}</h1>
            <p className="fb-vertical-lede">{lede}</p>
            <p className="fb-vertical-proof">{proof}</p>
          </div>

          <div className="fb-vertical-motif" aria-hidden="true">
            <div className="fb-vertical-motif-field">
              <span className="fb-motif-axis is-x" />
              <span className="fb-motif-axis is-y" />
              <span className="fb-motif-orbit is-outer" />
              <span className="fb-motif-orbit is-inner" />
              <span className="fb-motif-core" />
            </div>
            <p>{motifLabel}</p>
          </div>
        </div>

        <div className="fb-vertical-actions">
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="fb-vertical-primary"
          >
            <span>Book a call</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href={secondaryHref}>
            <span>{secondaryLabel}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
