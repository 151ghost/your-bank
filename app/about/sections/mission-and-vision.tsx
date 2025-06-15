import { SectionContainer } from "@/components/custom/section-container";
import {
  SectionDetailsContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/custom/section-details";
import { containerVariants, fadeInUpVariants } from "@/components/animation";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { SlideInElement } from "@/components/animation/slide-in-variant";

export default function MissionAndVision() {
  return (
    <SectionContainer>
      <SectionDetailsContainer variant={containerVariants} className="gap-3.5">
        <SectionTitle
          variant={fadeInUpVariants}
          specialText="Mission & Vision"
        />
        <SectionDescription
          variant={fadeInUpVariants}
          text="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
        />
      </SectionDetailsContainer>

      <div className="flex flex-col max-xl:gap-[50px]">
        {statements.map((item, index) => (
          <MissionAndVisionBlock key={item.heading} {...item} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}

function MissionAndVisionBlock({
  alt,
  src,
  heading,
  paragraph,
  index,
}: IMissionAndVisionBlock) {
  return (
    <div
      className={cn("flex max-lg:flex-col items-center max-lg:gap-0.5", {
        "flex-row-reverse 2xl:-mt-[100px] xl:-mt-[84px]": index === 1,
      })}
    >
      <ImageContainer src={src} alt={alt} index={index} />
      <StatementContainer
        heading={heading}
        paragraph={paragraph}
        index={index}
      />
    </div>
  );
}

function ImageContainer({
  alt,
  src,
  index,
}: {
  alt: string;
  src: string;
  index: number;
}) {
  return (
    <SlideInElement
      custom={index === 0}
      className="relative px-5 pt-5 md:px-[60px] md:pt-[60px] 2xl:min-w-[664px] 2xl:max-w-[664px] 2xl:h-[621px] md:min-w-[545px] lg:h-[500px] h-fit rounded-b-[20px] rounded-t-[50px] outline-1 outline-grey-15 bg-[url(/assets/transaction-bg.png)] bg-black"
    >
      <div className="relative max-w-full w-full z-20">
        <Image
          src={src}
          alt={alt}
          width={544}
          height={561}
          className="rounded-t-[50px] bg-white"
        />
      </div>

      <Image
        src="/assets/about/mv/ab-d.png"
        alt="Abstract Design"
        width={634}
        height={602}
        className="absolute top-0 right-0 w-full max-h-full z-10"
      />

      <BorderBeam size={200} />
    </SlideInElement>
  );
}

function StatementContainer({
  heading,
  paragraph,
  index,
}: {
  heading: string;
  paragraph: string;
  index: number;
}) {
  return (
    <SlideInElement
      custom={index === 1}
      className={cn(
        "z-10 flex flex-col max-lg:items-center 2xl:gap-3.5 gap-2.5 border-green-60 col-span-2 h-fit max-lg:border-t max-lg:pt-[30px]",
        {
          "2xl:pl-[50px] md:pl-10 lg:border-l": index === 0,
          "2xl:pr-[50px] md:pr-10 lg:border-r": index === 1,
        }
      )}
    >
      <p className="2xl:text-[38px] md:text-[32px] text-[26px] font-medium leading-[150%]">
        {heading}
      </p>
      <p className="text-grey-70 font-light 2xl:text-lg md:text-base text-sm max-lg:text-center leading-[150%]">
        {paragraph}
      </p>
    </SlideInElement>
  );
}

const statements: IStatement[] = [
  {
    src: "/assets/about/mv/mv1.png",
    alt: "Shrub",
    heading: "Mission",
    paragraph:
      "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
  },
  {
    src: "/assets/about/mv/mv2.png",
    alt: "Human eye",
    heading: "Vision",
    paragraph:
      "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.",
  },
];

interface IStatement {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
}

interface IMissionAndVisionBlock extends IStatement {
  index: number;
}
