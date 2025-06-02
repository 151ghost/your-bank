"use client";

import { containerVariants, slideInVariants } from "@/components/animation";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { BorderBeam } from "@/components/magicui/border-beam";
import PingIconCtn from "@/components/custom/ping-icon-ctn";

export default function OurBenefitSection() {
	return (
		<section className="container flex flex-col gap-[30px] py-[100px]">
			<SectionDetailsContainer variant={containerVariants} className="gap-3.5">
				<SectionTitle
					variant={slideInVariants}
					custom
					defaultText="Our"
					specialText="Benefits"
				/>
				<SectionDescription
					variant={slideInVariants}
					custom
					text="At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
				/>
			</SectionDetailsContainer>

			<div className="grid grid-cols-2 gap-[50px]">
				{benefits.map((item) => (
					<OurBenefitCard key={item.title} item={item} />
				))}
			</div>
		</section>
	);
}

function OurBenefitCard({ item }: { item: IBenefitProps }) {
	return (
		<FadeInUpElement className="relative flex flex-col gap-[30px] p-[50px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[20px] rounded-bl-[30px] outline-1 outline-[#1c1c1c] bg-[url(/assets/transaction-bg.png)]">
			<div className="flex items-center gap-5">
				<PingIconCtn icon={item.icon} alt={item.alt} />
				<p className="text-white text-2xl leading-[150%]">{item.title}</p>
			</div>

			<p className="text-lg text-grey-70 leading-[150%] font-light">
				{item.details}
			</p>

			<BorderBeam size={200} />
		</FadeInUpElement>
	);
}

const benefits: IBenefitProps[] = [
	{
		icon: "/assets/careers/b1.png",
		alt: "Chart",
		title: "Competitive Compensation",
		details:
			"We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
	},
	{
		icon: "/assets/careers/b2.png",
		alt: "bulb",
		title: "Health and Wellness",
		details:
			"We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
	},
	{
		icon: "/assets/careers/b3.png",
		alt: "Suit Case",
		title: "Retirement Planning",
		details:
			"YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
	},
	{
		icon: "/assets/careers/b4.png",
		alt: "Balance",
		title: "Work-Life Balance",
		details:
			"We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
	},
];

interface IBenefitProps {
	icon: string;
	alt: string;
	title: string;
	details: string;
}
