import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PingIconCtn({
  icon,
  type = "our-products",
  alt,
}: {
  icon: string;
  type?: "our-products" | "use-cases";
  alt: string;
}) {
  return (
    <div className="relative size-16 md:size-[70px] 2xl:size-[98px] flex items-center justify-center">
      <div
        className={cn(
          "max-md:hidden absolute size-16 md:size-[30px] 2xl:size-[55px] rounded-full bg-[#CAFF33]/20 animate-ping-slow",
          { "group-hover:animate-none": type === "use-cases" }
        )}
      />
      <div className="size-16 p-3 md:size-[70px] 2xl:size-[98px] rounded-full bg-gradient-to-b from-[#CAFF33]/10 to-[#CAFF33]/0 flex items-center justify-center">
        <div className="flex items-center justify-center min-w-12 size-12 md:size-[50px] 2xl:size-[74px] rounded-full p-5 bg-gradient-to-b from-[#CAFF33]/15 to-[#CAFF33]/0">
          <Image
            src={icon}
            alt={alt}
            width={34}
            height={34}
            className="max-md:size-6 min-w-6"
          />
        </div>
      </div>
    </div>
  );
}
