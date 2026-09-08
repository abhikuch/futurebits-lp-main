import { cn } from "@/lib/utils";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1312px] px-6 sm:px-10", className)}>
      {children}
    </div>
  );
}
