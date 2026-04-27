import { cn } from "@/lib/utils";

export default function Section({ className, children, ...props }) {
  return (
    <section className={cn("relative w-full py-20 sm:py-28", className)} {...props}>
      {children}
    </section>
  );
}
