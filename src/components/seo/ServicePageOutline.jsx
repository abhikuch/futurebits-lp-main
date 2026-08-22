export function ServiceCategoryOutline({ category, services }) {
  return (
    <section
      aria-label="Page outline"
      className="border-t border-white/10 py-10 text-sm text-white/65"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
        <h2 className="font-montserrat text-lg font-semibold text-white">
          {category.title}: service overview
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed">{category.description}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {services.map((service) => (
            <li key={service.slug}>
              <strong className="text-white/80">{service.title}</strong>
              {": "}
              {service.shortDescription}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceDetailOutline({ service, category, sections = [] }) {
  const headings = sections.filter(Boolean);

  return (
    <section
      aria-label="Page outline"
      className="border-t border-white/10 py-10 text-sm text-white/65"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
        <h2 className="font-montserrat text-lg font-semibold text-white">
          {service.title}: page outline
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed">{service.subhead}</p>
        <p className="mt-3 text-white/55">
          Category: {category.title}
        </p>
        {headings.length > 0 ? (
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {headings.map((heading) => (
              <li key={heading}>{heading}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function EditorialPostOutline({ title, description, sectionHeadings = [] }) {
  return (
    <section
      aria-label="Page outline"
      className="border-t border-white/10 bg-[#060618] py-10 text-sm text-white/65"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <h2 className="font-montserrat text-lg font-semibold text-white">
          Article outline
        </h2>
        <p className="mt-3 leading-relaxed">{description}</p>
        {sectionHeadings.length > 0 ? (
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {sectionHeadings.map((heading) => (
              <li key={heading}>{heading}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-white/55">{title}</p>
        )}
      </div>
    </section>
  );
}
