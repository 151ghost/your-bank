"use client";

import {
	SectionDetailsContainer,
	SectionTitle,
	SectionDescription,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { useState } from "react";
import ToggleCase from "@/components/custom/toggle-case";
// import { Separator } from "@/components/custom/separator";
// import Image from "next/image";

export default function Testimonial() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<section className="container flex flex-col gap-[60px] py-[100px]">
			<div className="w-full flex max-md:flex-col gap-y-5 items-center md:items-end justify-between">
				<SectionDetailsContainer variant={containerVariants}>
					<SectionTitle
						custom
						variant={slideInVariants}
						specialText="Features"
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
		</section>
	);
}

// function TestimonialCard({
// 	testimony,
// 	user,
// }: { testimony: string; user: string }) {
// 	return (
// 		<div className="flex flex-col gap-[50px]">
// 			<div className="flex items-center gap-5">
// 				<Separator className="w-1/3" />
// 				<Image
// 					src="/assets/quotation-mark.png"
// 					alt="Qoutation Mark"
// 					width={60}
// 					height={60}
// 				/>

// 				<Separator className="w-1/3" />
// 			</div>
// 			<p className="text-center text-lg leading-[150%]">{testimony}</p>
// 			<p className="text-lg font-medium text-green-60">{user}</p>
// 		</div>
// 	);
// }
