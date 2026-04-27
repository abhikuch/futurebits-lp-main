import { cn } from "@/lib/utils";

export default function Heading({ className, children, as: Tag = "h2", ...props }) {
  return (
    <Tag
      className={cn(
        "font-montserrat text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
