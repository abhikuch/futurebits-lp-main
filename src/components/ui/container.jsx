import { cn } from "@/lib/utils";

export default function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>;
}
