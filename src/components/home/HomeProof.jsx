import { MotionFadeIn, MotionStagger, MotionStaggerItem } from "@/components/shared/MotionReveal";
import { HOME_PROOF } from "@/content/home";

export default function HomeProof() {
  return (
    <section
      aria-labelledby="home-proof-title"
      className="border-t border-white/10 bg-[#060618] pb-6 pt-20 text-white sm:pt-28"
    >
      <div className="fb-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <MotionFadeIn className="lg:col-span-7">
            <p className="fb-kicker">{HOME_PROOF.kicker}</p>
            <h2 id="home-proof-title" className="fb-h2 mt-6">
              {HOME_PROOF.title}
            </h2>
          </MotionFadeIn>
          <MotionFadeIn delay={0.06} className="lg:col-span-5">
            <p className="text-sm leading-7 text-white/55">
              {HOME_PROOF.lede}
            </p>
          </MotionFadeIn>
        </div>

        <MotionStagger className="mt-12 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
          {HOME_PROOF.stats.map((stat, index) => (
            <MotionStaggerItem
              key={stat.label}
              className={`px-4 py-7 sm:px-6 sm:py-9 ${
                index % 2 ? "border-l border-white/10" : ""
              } ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <p className="font-montserrat text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {stat.label}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
