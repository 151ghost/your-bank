import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SlideInElement } from "../animation/slide-in-variant";

export default function ToggleCase({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
}) {
  return (
    <SlideInElement
      custom={false}
      className="flex items-center justify-center p-3 2xl:p-3.5 border border-grey-15 rounded-full bg-grey-11"
    >
      <div className="relative flex items-center w-full h-full">
        <div
          className={cn(
            "absolute flex self-center inset-0 max-w-1/2 h-full rounded-full bg-green-60 hover:bg-green-65 transition-transform duration-300",
            {
              "translate-x-0": activeIndex === 0,
            },
            { "translate-x-full": activeIndex === 1 }
          )}
        />

        {["Individual", "Business"].map((name, index) => (
          <Button
            key={name}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-1/2 h-full py-2.5 px-[18px] 2xl:py-3.5 2xl:px-6 rounded-full text-sm 2xl:text-lg bg-transparent z-10 transition-colors duration-300",
              {
                "text-grey-11 bg-transparent hover:bg-transparent hover:text-grey-11":
                  activeIndex === index,
              }
            )}
          >
            For {name}
          </Button>
        ))}
      </div>
    </SlideInElement>
  );
}
