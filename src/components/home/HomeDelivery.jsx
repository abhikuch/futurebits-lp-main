import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import { HOME_DELIVERY } from "@/content/home";

export default function HomeDelivery() {
  return (
    <section
      id="delivery"
      aria-labelledby="home-delivery-title"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-[#050511] text-white"
    >
      <div className="fb-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <MotionFadeIn className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="fb-kicker">{HOME_DELIVERY.kicker}</p>
            <h2 id="home-delivery-title" className="fb-h2 mt-6">
              {HOME_DELIVERY.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/62">
              {HOME_DELIVERY.lede}
            </p>
            <div className="mt-10 border-l border-white/20 pl-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                Definition of done
              </p>
              <p className="mt-3 max-w-sm font-montserrat text-lg leading-relaxed text-white/85">
                {HOME_DELIVERY.definition}
              </p>
            </div>
          </MotionFadeIn>

          <MotionStagger
            as="ol"
            className="border-t border-white/12 lg:col-span-7"
          >
            {HOME_DELIVERY.steps.map((step) => (
              <MotionStaggerItem
                key={step.index}
                as="li"
                className="border-b border-white/12 py-8 sm:py-10"
              >
                <article className="grid gap-5 sm:grid-cols-[6rem_1fr]">
                  <div>
                    <p className="font-montserrat text-2xl tabular-nums text-white/25">
                      {step.index}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {step.timing}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="max-w-md font-montserrat text-xl font-semibold text-white sm:text-2xl">
                        {step.title}
                      </h3>
                      <span className="w-fit border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/60">
                        {step.artifact}
                      </span>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </article>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
