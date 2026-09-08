import { HOME_BELIEFS } from "@/content/home";

export default function HomeBeliefs() {
  return (
    <section className="fb-home-neutral fb-delivery-proof">
      <div className="fb-editorial-shell">
        <div className="fb-home-section-head">
          <p>{HOME_BELIEFS.kicker}</p>
          <div><h2>{HOME_BELIEFS.title}</h2><p>{HOME_BELIEFS.lede}</p></div>
        </div>
        <ol className="fb-proof-ledger">
          {HOME_BELIEFS.items.map((item) => (
            <li key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.body}</p><span aria-hidden="true">✓</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
