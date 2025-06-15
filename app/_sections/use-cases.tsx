"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import PingIconCtn from "@/components/custom/ping-icon-ctn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { containerVariants, slideInVariants } from "@/components/animation";
import Image from "next/image";
import {
  SectionDescription,
  SectionDetailsContainer,
  SectionTitle,
} from "@/components/custom/section-details";
import { ContainerVariantElement } from "@/components/animation/container-variant";
import { SlideInElement } from "@/components/animation/slide-in-variant";

export default function UseCases() {
  return (
    <ContainerVariantElement className="container flex flex-col gap-[60px] py-[100px]">
      <SectionDetailsContainer variant={containerVariants}>
        <SectionTitle
          specialText="Use Cases"
          variant={slideInVariants}
          custom
        />
        <SectionDescription
          variant={slideInVariants}
          custom
          text="At YourBank, we cater to the diverse needs of individuals and
					businesses alike, offering a wide range of financial solutions"
        />
      </SectionDetailsContainer>

      <div className="flex flex-col gap-10 2xl:gap-[60px]">
        {use_cases.map((item) => (
          <UseCaseSections key={item.case} item={item} />
        ))}
      </div>
    </ContainerVariantElement>
  );
}

function UseCaseSections({ item }: { item: IUseCases }) {
  const count = useMotionValue(0);

  useEffect(() => {
    // Animate from 0 to the target percentage
    const controls = animate(count, item.numeric_data[0].percentage, {
      duration: 2,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [count, item.numeric_data]);

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-[30px] md:gap-[60px] 2xl:gap-[100px]",
        {
          "lg:flex-row-reverse": item.case === "Business",
        }
      )}
    >
      <SlideInElement
        custom={item.case === "Individual"}
        className="relative grid grid-cols-2 gap-2.5 2xl:gap-5 p-5 md:p-10 2xl:p-[50px] rounded-[20px] bg-grey-11 overflow-hidden"
      >
        <Image
          src={
            item.case === "Business"
              ? "/assets/vector3.png"
              : "/assets/vector2.png"
          }
          alt="Vector"
          width={248}
          height={248}
          className={cn("absolute -top-2.5", {
            "-left-2.5": item.case === "Individual",
            "-right-2.5": item.case === "Business",
          })}
        />

        {item.perks.map((perk) => (
          <PerkCard key={perk.caption} {...perk} />
        ))}
      </SlideInElement>

      <div className="max-w-full lg:max-w-1/2 flex flex-col max-md:items-center gap-[50px] 2xl:gap-[62px]">
        <ContainerVariantElement className="flex flex-col max-md:items-center gap-2.5 2xl:gap-3.5">
          <motion.p
            custom={item.case === "Business"}
            variants={slideInVariants}
            className="text-xl md:text-[26px] 2xl:text-[30px] font-medium"
          >
            For {item.case}
          </motion.p>
          <motion.p
            custom={item.case === "Business"}
            variants={slideInVariants}
            className="max-md:w-[90%] max-md:text-center text-sm md:text-base 2xl:text-lg font-light grey-70"
          >
            {item.description}
          </motion.p>
        </ContainerVariantElement>

        <ContainerVariantElement className="grid md:grid-cols-3 gap-[30px] md:gap-[40px] lg:gap-[50px]">
          {item.numeric_data.map((data) => (
            <IndividualNumericData
              key={data.description}
              data={data}
              item_case={item.case}
            />
          ))}
        </ContainerVariantElement>

        <SlideInElement custom={item.case === "Business"} className="w-fit">
          <Button
            asChild
            variant="outline"
            className="w-fit border-grey-15 py-3.5 px-5 2xl:py-[18px] 2xl:px-6 text-sm 2xl:text-lg rounded-full bg-grey-11 hover:bg-grey-15 hover:text-white transition-colors duration-200"
          >
            <Link href="/">Learn More</Link>
          </Button>
        </SlideInElement>
      </div>
    </div>
  );
}

function IndividualNumericData({
  data,
  item_case,
}: {
  data: { percentage: number; description: string };
  item_case: "Individual" | "Business";
}) {
  const percentageCount = useMotionValue(0);
  const roundedPercentage = useTransform(percentageCount, (latest) =>
    Math.round(latest)
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(percentageCount, data.percentage, {
        duration: 2,
        ease: "easeInOut",
      });
    }
  }, [isInView, percentageCount, data.percentage]);

  return (
    <SlideInElement
      ref={ref}
      custom={item_case === "Business"}
      key={data.description}
      className="flex flex-col max-md:items-center gap-0.5 md:gap-[5px]"
    >
      <p className="text-[40px] 2xl:text-[58px] font-medium text-green-60">
        <motion.span>{roundedPercentage}</motion.span>%
      </p>
      <p className="font-light text-grey-70 text-sm md:text-base 2xl:text-lg">
        {data.description}
      </p>
    </SlideInElement>
  );
}

function PerkCard({ caption, icon }: { caption: string; icon: string }) {
  return (
    <div
      key={caption}
      className="relative w-full h-full flex flex-col items-center gap-3.5 2xl:gap-6 py-5 px-3.5 md:p-6 2xl:p-[30px] bg-grey-10 rounded-[16px] border border-grey-15"
    >
      <PingIconCtn type="use-cases" icon={icon} alt={caption} />
      <p className="text-center text-sm md:text-base 2xl:text-xl">{caption}</p>

      <BorderBeam size={125} delay={6} />
    </div>
  );
}

const use_cases: IUseCases[] = [
  {
    case: "Individual",
    description:
      "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
    numeric_data: [
      { percentage: 78, description: "Secure Retirement Planning" },
      { percentage: 63, description: "Manageable Debt Consolidation" },
      { percentage: 91, description: "Reducing financial burdens" },
    ],
    perks: [
      {
        icon: "/assets/use-cases/personal-finances.png",
        caption: "Managing Personal Finances",
      },
      {
        icon: "/assets/use-cases/individual2.png",
        caption: "Saving for the Future",
      },
      { icon: "/assets/use-cases/individual3.png", caption: "Homeownership" },
      {
        icon: "/assets/use-cases/individual4.png",
        caption: "Education Funding",
      },
    ],
  },
  {
    case: "Business",
    description:
      " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    numeric_data: [
      { percentage: 65, description: "Cash Flow Management" },
      { percentage: 70, description: "Drive Business Expansion" },
      { percentage: 45, description: "Streamline payroll processing" },
    ],
    perks: [
      {
        icon: "/assets/use-cases/b1.png",
        caption: "Startups and Entrepreneurs",
      },
      { icon: "/assets/use-cases/b2.png", caption: "Cash Flow Management" },
      { icon: "/assets/use-cases/b3.png", caption: "Business Expansion" },
      { icon: "/assets/use-cases/b4.png", caption: "Payment Solutions" },
    ],
  },
];

interface IUseCases {
  case: "Individual" | "Business";
  description: string;
  numeric_data: { percentage: number; description: string }[];
  perks: { icon: string; caption: string }[];
}
