"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SlideInElement } from "@/components/animation/slide-in-variant";

export default function CtaSection() {
	return (
		<section className="py-[100px] max-md:px-4">
			<div className="container relative w-full flex flex-col md:flex-row items-center gap-6 md:gap-[150px] p-[30px] md;px-[60px] xl:p-20 rounded-[20px] bg-[url(/assets/transaction-bg.png)] overflow-hidden">
				<Image
					src="/assets/vector1.png"
					alt="Vector"
					width={298}
					height={298}
					className="absolute -top-1 -left-2.5"
				/>

				<SectionDetailsContainer variant={containerVariants}>
					<SectionTitle
						custom
						cta
						variant={slideInVariants}
						specialText="YourBanK today!"
						defaultText="Start your financial journey with"
					/>
					<SectionDescription
						custom
						variant={slideInVariants}
						cta
						text="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
					/>
				</SectionDetailsContainer>

				<SlideInElement className="w-fit h-fit">
					<Button
						variant="green"
						className="py-3.5 px-5 2xl:py-[18px] 2xl:px-[30px] rounded-full text-sm 2xl:text-lg text-grey-11"
					>
						Open Account
					</Button>
				</SlideInElement>

				<BorderBeam size={150} duration={20} />
			</div>
		</section>
	);
}
