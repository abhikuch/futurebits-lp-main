import { POV } from "@/content/inline-modules";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

/**
 * Inline "point of view" band that anchors each vertical page in a
 * sharp, opinion-led narrative. RSC-only, zero JS shipped.
 */
export default function POVStrip({ vertical, accent = "#01B0EA" }) {
  const pov = POV[vertical];
  if (!pov) return null;
  return (
    <Section
      aria-labelledby={`pov-${vertical}-title`}
      className="overflow-hidden bg-[#060618]"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: accent }}
      />
      <Container className="relative z-10 max-w-4xl text-center">
        <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
          {pov.eyebrow}
        </p>
        <Heading id={`pov-${vertical}-title`} className="mt-5 lg:text-5xl">
          {pov.title}
        </Heading>
        <p className="mt-6 text-pretty text-base text-white/70 sm:text-lg">
          {pov.body}
        </p>
        <ul className="mt-10 grid gap-3 text-left sm:grid-cols-1">
          {pov.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
            >
              <span
                aria-hidden="true"
                className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full"
                style={{ background: accent }}
              />
              <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
