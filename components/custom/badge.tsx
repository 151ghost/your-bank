import { cn } from "@/lib/utils";

export function CustomBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "2xl:text-lg md:text-base text-sm font-light text-grey-70 leading-[150%]",
        className
      )}
    >
      {text}
    </p>
  );
}
