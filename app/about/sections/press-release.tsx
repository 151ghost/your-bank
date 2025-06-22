"use client";

import { SectionContainer } from "@/components/custom/section-container";
import {
  SectionDetailsContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { CustomBadge as PressReleaseCardDescription } from "@/components/custom/badge";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";

export default function PressRelease() {
  return (
    <SectionContainer>
      <SectionDetailsContainer variant={containerVariants}>
        <SectionTitle variant={slideInVariants} specialText="Press Releases" />
        <SectionDescription
          variant={slideInVariants}
          text="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
        />
      </SectionDetailsContainer>

      <div className="grid lg:grid-cols-2 2xl:gap-[30px] gap-5 pb-1">
        {pressReleases.map((item) => (
          <PressReleaseCard key={item.heading} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}

function PressReleaseCard({
  src,
  alt,
  heading,
  date,
  location,
  paragraph,
}: IPressReleaseCardProp) {
  return (
    <FadeInUpElement className="relative flex flex-col gap-[30px] md:gap-[51px] md:p-[30px] p-5 rounded-t-[40px] rounded-b-2xl outline-1 outline-grey-15 bg-grey-11">
      <Image
        src={src}
        alt={alt}
        width={723}
        height={333}
        className="rounded-t-[30px] rounded-b-[12px] w-full 2xl:h-[333px] md:h-[277px]"
      />

      <div className="flex flex-col 2xl:gap-[30px] gap-6 2xl:px-[30px] md:px-6">
        <div className="flex flex-col 2xl:gap-5 md:gap-3.5 gap-2.5">
          <p className="2xl:text-2xl md:text-xl text-lg leading-[150%]">
            {heading}
          </p>
          <div className="flex md:gap-2.5 gap-1.5 items-center">
            <PressReleaseCardDescription
              text={`Location: ${location}`}
              className="max-w-fit 2xl:py-2 2xl:px-4 md:py-2.5 md:px-3.5 py-1.5 px-2.5 border bg-grey-10 border-grey-15 rounded-full"
            />
            <PressReleaseCardDescription
              text={`Date: ${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`}
              className="max-w-fit 2xl:py-2 2xl:px-4 md:py-2.5 md:px-3.5 py-1.5 px-2.5 border bg-grey-10 border-grey-15 rounded-full"
            />
          </div>
        </div>

        <p className="2xl:text-lg md:text-base text-sm font-light text-grey-70 leading-[150%]">
          {paragraph}
        </p>
      </div>

      <BorderBeam size={200} />
    </FadeInUpElement>
  );
}

const pressReleases: IPressReleaseCardProp[] = [
  {
    src: "/assets/about/pr/pr-1.png",
    alt: "Customer shaking hands with banker",
    heading:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    location: "India",
    date: new Date(),
    paragraph:
      "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program will deliver benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
  },
  {
    src: "/assets/about/pr/pr-2.png",
    alt: "Tall buildings in Chennai",
    heading:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "India",
    date: new Date(),
    paragraph:
      "YourBank is excited to announce the grand opening of our newest branch in Chennai. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
  },
  {
    src: "/assets/about/pr/pr-3.png",
    alt: "People signing documents",
    heading:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "India",
    date: new Date(),
    paragraph:
      "YourBank is thrilled to partner with a local nonprofit to support financial education initiatives across the region. Together, we aim to empower individuals with the knowledge and tools they need to make informed financial decisions, contributing to economic growth and personal well-being.",
  },
  {
    src: "/assets/about/pr/pr-4.png",
    alt: "Person drawing sustainable economy symbols",
    heading:
      "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    location: "India",
    date: new Date(),
    paragraph:
      "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
  },
];

interface IPressReleaseCardProp {
  src: string;
  alt: string;
  heading: string;
  location: string;
  date: Date;
  paragraph: string;
}
