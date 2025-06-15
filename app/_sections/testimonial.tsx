"use client";

import {
  SectionDetailsContainer,
  SectionTitle,
  SectionDescription,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { useState } from "react";
import ToggleCase from "@/components/custom/toggle-case";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { SectionContainer } from "@/components/custom/section-container";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const usecase = [individual_testimonies, business_testimonies];

  return (
    <SectionContainer>
      <div className="w-full flex max-md:flex-col gap-y-5 items-center md:items-end justify-between">
        <SectionDetailsContainer variant={containerVariants}>
          <SectionTitle
            custom
            variant={slideInVariants}
            specialText="Testimonials"
            defaultText="Our"
          />
          <SectionDescription
            custom
            variant={slideInVariants}
            text="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
          />
        </SectionDetailsContainer>

        <ToggleCase activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      <Carousel className="w-full h-fit flex flex-col items-center gap-[30px]">
        <CarouselContent className="max-w-screen">
          {usecase[activeIndex].map((item) => (
            <TestimonialCard
              key={item.user}
              testimony={item.testimony}
              user={item.user}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden border-grey-15 bg-grey-11 text-green-60 hover:bg-grey-15 hover:text-green-60" />
        <CarouselNext className="max-lg:hidden border-grey-15 bg-grey-11 text-green-60 hover:bg-grey-15 hover:text-green-60" />

        <div className="flex lg:hidden items-center gap-5 mt-[30px]">
          <CarouselPrevious className="size-[52px] border-grey-15 bg-grey-11 text-green-60 hover:bg-grey-15 hover:text-green-60" />
          <CarouselNext className="size-[52px] border-grey-15 bg-grey-11 text-green-60 hover:bg-grey-15 hover:text-green-60" />
        </div>
      </Carousel>
    </SectionContainer>
  );
}

function TestimonialCard({
  testimony,
  user,
}: {
  testimony: string;
  user: string;
}) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <FadeInUpElement className="flex flex-col items-center gap-[30px] md:gap-10 2xl:gap-[50px] max-md:border max-md:rounded-[12px] border-grey-15 max-md:p-5">
        <div className="w-full flex items-center justify-center gap-4 2xl:gap-5">
          <Separator className="max-w-1/4 h-[1px] bg-grey-15" />
          <Image
            src="/assets/quotation-mark.png"
            alt="Qoutation Mark"
            width={60}
            height={60}
            className="max-md:w-9 max-md:h-7 max-xl:size-11"
          />

          <Separator className="max-w-1/4 h-[1px] bg-grey-15" />
        </div>
        <p className="text-sm md:text-base 2xl:text-lg leading-[150%] text-center">
          {testimony}
        </p>
        <p className="max-w-[90%] text-base 2xl:text-lg font-medium text-green-60 text-center">
          {user}
        </p>
      </FadeInUpElement>
    </CarouselItem>
  );
}

const individual_testimonies = [
  {
    testimony:
      "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
    user: "Sara T",
  },
  {
    testimony:
      "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    user: "John D",
  },
  {
    testimony:
      "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
    user: "Emily G",
  },
  {
    testimony:
      "YourBank's investment tools have helped me grow my savings significantly. Their financial advisors provided excellent guidance, and the online platform makes tracking my portfolio effortless.",
    user: "Michael R",
  },
];

const business_testimonies = [
  {
    testimony:
      "Switching to this platform has streamlined our international transactions completely. The real-time currency conversion and minimal fees have saved us thousands in operational costs.",
    user: "Sarah Chen, CEO of TechGrowth Solutions",
  },
  {
    testimony:
      "The business analytics dashboard gives us insights we never had before. We've been able to optimize our cash flow and make better financial decisions for our startup.",
    user: "Marcus Rodriguez, Founder of InnovatePay",
  },
  {
    testimony:
      "Security was our top concern when choosing a financial platform. Their robust verification system and 24/7 fraud monitoring give us peace of mind for all our transactions.",
    user: "Dr. Aisha Patel, CFO of MedTech Innovations",
  },
  {
    testimony:
      "The multi-currency support is a game-changer for our e-commerce business. Managing payments across different regions has never been easier.",
    user: "James Wilson, Director of Global Trade Solutions",
  },
];
