import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "container w-full flex flex-col 2xl:gap-20 gap-[60px] overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}
