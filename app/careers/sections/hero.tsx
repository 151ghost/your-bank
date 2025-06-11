import { fadeInVariants } from "@/components/animation";
import { SlideInElement } from "@/components/animation/slide-in-variant";
import {
	SectionDescription,
	SectionTitle,
} from "@/components/custom/section-details";
import Image from "next/image";

export default function CareerHeroSection() {
	return (
		<section className="relative container w-full bg-grey-11 rounded-[20px] p-3.5 lg:p-10 2xl:p-[50px] mt-[53px] flex max-lg:flex-col-reverse items-center justify-end">
			<SlideInElement className="max-sm:-mt-10 max-lg:-mt-[85px] lg:absolute z-10 top-[40px] md:left-0 xl:left-[50px] max-w-[750px] flex flex-col max-lg:items-center gap-[23px] bg-grey-10 p-3.5 lg:p-[60px] 2xl:p-20 lg:rounded-tl-[20px] rounded-[20px] lg:rounded-bl-[20px] lg:rounded-br-[80px]">
				<SectionTitle
					variant={fadeInVariants}
					defaultText="Welcome to"
					specialText="YourBank"
					extraText="Careers!"
				/>

				<SectionDescription
					career_hero
					variant={fadeInVariants}
					text="Join our team and embark on a rewarding journey in the banking
					industry. At YourBank, we are committed to fostering a culture of
					excellence and providing opportunities for professional growth. With a
					focus on innovation, customer service, and integrity, we strive to
					make a positive impact in the lives of our customers and communities.
					Join us today and be a part of our mission to shape the future of
					banking."
				/>
			</SlideInElement>

			<SlideInElement custom={false} className="w-fit h-fit">
				<Image
					src="/assets/careers/hero.png"
					alt="People at work"
					width={968}
					height={716}
					className="rounded-2xl"
				/>
			</SlideInElement>
		</section>
	);
}
