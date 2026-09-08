import Link from "next/link";

import { HOME_CAL, HOME_HERO } from "@/content/home";

export default function HomeHero() {
  return (
    <section className="fb-editorial-hero">
      <div className="fb-editorial-shell">
        <header className="fb-editorial-hero-header">
          <p>{HOME_HERO.kicker}</p>
          <p aria-hidden="true">Issue 01 / 2026</p>
        </header>
        <div className="fb-editorial-title-wrap">
          <p className="fb-editorial-title-note" aria-hidden="true">
            From brief
            <br />
            to shipped
          </p>
          <h1 className="fb-editorial-title">
            {HOME_HERO.title.map((line, index) => (
              <span key={line} className={`fb-editorial-title-line is-${index + 1}`}>
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div className="fb-editorial-hero-foot">
          <p className="fb-editorial-lede">{HOME_HERO.lede}</p>
          <div className="fb-editorial-actions">
            <Link href={HOME_CAL.hero} target="_blank" rel="noopener noreferrer" data-home-cta="hero" className="fb-editorial-primary">
              {HOME_HERO.primaryCta}<span aria-hidden="true">↗</span>
            </Link>
            <Link href="#tracks" className="fb-editorial-secondary">
              {HOME_HERO.secondaryCta}<span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </div>
      <nav aria-label="Practice index" className="fb-editorial-index">
        <ol className="fb-editorial-shell">
          {HOME_HERO.index.map((item) => (
            <li key={item.n}>
              <Link href={item.href}>
                <span className="fb-editorial-index-number">{item.n}</span>
                <span className="fb-editorial-index-copy"><strong>{item.label}</strong><small>{item.line}</small></span>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
