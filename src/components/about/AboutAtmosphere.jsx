/**
 * Neutral hero atmosphere for the studio page.
 * White / navy only — no AI cyan, no markets teal.
 */
export default function AboutAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-white/[0.08] blur-[140px]" />
      <div className="absolute right-[-12%] top-32 h-[380px] w-[380px] rounded-full bg-white/[0.05] blur-[130px]" />
      <div className="absolute left-1/2 top-[28rem] h-[280px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
    </div>
  );
}
