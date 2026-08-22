import { ROUTES } from "@/config/site";

const OUTLINE = {
  ai: {
    title: "AI services on this page",
    sections: [
      "Production AI for ops, support, and product teams",
      "Retrieval, agents, and workflow automation",
      "Featured AI services and FAQs",
    ],
  },
  design: {
    title: "Design services on this page",
    sections: [
      "Product design paired with frontend delivery",
      "UX audits, landing pages, and design systems",
      "Portfolio, offerings, and client proof",
    ],
  },
  markets: {
    title: "Markets services on this page",
    sections: [
      "Trading and risk infrastructure",
      "Backtesting, execution, and monitoring",
      "Broker integrations and operational runbooks",
    ],
  },
};

export default function VerticalPageOutline({ vertical }) {
  const route = ROUTES[vertical];
  const outline = OUTLINE[vertical];
  if (!route || !outline) return null;

  return (
    <section
      aria-label="Page outline"
      className="border-t border-white/10 bg-[#060618] py-10 text-sm text-white/65"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
        <h2 className="font-montserrat text-lg font-semibold text-white">
          {outline.title}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed">{route.description}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {outline.sections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
