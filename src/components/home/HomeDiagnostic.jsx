import Link from "next/link";

import { HOME_DIAGNOSTIC } from "@/content/home";

export default function HomeDiagnostic() {
  return (
    <section id="tracks" className="fb-home-neutral fb-home-diagnostic">
      <div className="fb-editorial-shell">
        <div className="fb-home-section-head">
          <p>{HOME_DIAGNOSTIC.kicker}</p>
          <div><h2>{HOME_DIAGNOSTIC.title}</h2><p>{HOME_DIAGNOSTIC.lede}</p></div>
        </div>
        <ol className="fb-diagnostic-list">
          {HOME_DIAGNOSTIC.routes.map((route) => (
            <li key={route.n}>
              <Link href={route.href}>
                <span>{route.n}</span><strong>{route.label}</strong><small>{route.answer} ↘</small>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
