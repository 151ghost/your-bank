import { SlideInElement } from "../animation/slide-in-variant";
import { SectionTitle, SectionDescription } from "./section-details";
import { fadeInVariants } from "../animation";
import Image from "next/image";

export default function PageHero({
  title,
  defaultText,
  specialText,
  extraText,
  description,
  imageSrc,
  alt,
}: IPageProps) {
  return (
    <section className="relative container w-full bg-grey-11 rounded-[20px] p-3.5 lg:p-10 2xl:p-[50px] mt-[53px] flex max-lg:flex-col-reverse items-center justify-end overflow-hidden">
      <Image
        src="/assets/vector3.png"
        alt="Vector"
        width={248}
        height={248}
        className="absolute -top-2.5 right-0"
      />

      <SlideInElement className="z-20 max-sm:-mt-10 max-lg:-mt-[85px] lg:absolute top-[40px] md:left-0 xl:left-[50px] max-w-[750px] flex flex-col max-lg:items-center gap-[23px] bg-grey-10 p-3.5 lg:p-[60px] 2xl:p-20 lg:rounded-tl-[20px] rounded-[20px] lg:rounded-bl-[20px] lg:rounded-br-[80px]">
        <div className="flex flex-col max-lg:items-center">
          {title && (
            <p className="2xl:text-xl md:text-lg text-sm leading-[150%] text-white max-lg:mt-6">
              {title}
            </p>
          )}

          <SectionTitle
            variant={fadeInVariants}
            defaultText={defaultText}
            specialText={specialText}
            extraText={extraText}
          />
        </div>

        <SectionDescription
          career_hero
          variant={fadeInVariants}
          text={description}
        />
      </SlideInElement>

      <SlideInElement custom={false} className="w-fit h-fit z-10">
        <Image
          src={imageSrc}
          alt={alt}
          width={968}
          height={716}
          className="rounded-2xl"
        />
      </SlideInElement>
    </section>
  );
}

interface IPageProps {
  title?: string;
  defaultText: string;
  specialText: string;
  extraText?: string;
  description: string;
  imageSrc: string;
  alt: string;
}
