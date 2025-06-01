"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	containerVariants,
	fadeInUpVariants,
	slideInVariants,
} from "@/components/animation";
import PingIconCtn from "@/components/custom/ping-icon-ctn";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";
import ToggleCase from "@/components/custom/toggle-case";
import { ContainerVariantElement } from "@/components/animation/container-variant";

export default function OurProducts() {
	const [activeIndex, setActiveIndex] = useState(0);
	const useCases = [individual_usecase, business_usecase];

	return (
		<section className="container flex flex-col gap-[100px] py-[100px]">
			<div className="w-full flex max-md:flex-col gap-y-5 items-center md:items-end justify-between">
				<SectionDetailsContainer variant={containerVariants}>
					<SectionTitle
						custom
						variant={slideInVariants}
						specialText="Products"
						defaultText="Our"
					/>
					<SectionDescription
						custom
						variant={slideInVariants}
						text="Discover a range of comprehensive and customizable banking products
						at YourBank, designed to suit your unique financial needs and
						aspirations."
					/>
				</SectionDetailsContainer>

				<ToggleCase activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			</div>

			<ContainerVariantElement className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
				{useCases[activeIndex].map((item, index) => (
					<ProductCard key={item.title} {...item} index={index} />
				))}
			</ContainerVariantElement>
		</section>
	);
}

function ProductCard({ icon, alt, title, caption, index }: IUseCaseProps) {
	return (
		<motion.div
			custom={index === 0}
			variants={RenderVariant(index)}
			className="flex flex-col items-center gap-[30px]"
		>
			<PingIconCtn icon={icon} alt={alt} />
			<div className="flex flex-col items-center gap-5">
				<p className="text-xl xl:text-2xl leadinf-[150px]">{title}</p>
				<p className="max-md:text-sm xl:text-lg font-light text-grey-70 text-center">
					{caption}
				</p>
			</div>
		</motion.div>
	);
}

function RenderVariant(index: number) {
	if (index === 0 || index === 2) {
		return slideInVariants;
	}

	return fadeInUpVariants;
}

const individual_usecase: IUseCase[] = [
	{
		icon: "/assets/our-product/brief-case.png",
		alt: "Brief Case",
		title: "Checking Accounts",
		caption:
			"Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
	},
	{
		icon: "/assets/our-product/savings.png",
		alt: "Savings",
		title: "Savings Accounts",
		caption:
			"Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
	},

	{
		icon: "/assets/our-product/cash.png",
		alt: "Cash",
		title: "Loans and Mortgages",
		caption:
			"Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
	},
];

const business_usecase: IUseCase[] = [
	{
		icon: "/assets/our-product/brief-case.png",
		alt: "Brief Case",
		title: "Business Savings",
		caption:
			"Maximize your company's financial growth with our high-yield business savings accounts. Enjoy competitive interest rates and secure investment options to build long-term wealth for your business.",
	},
	{
		icon: "/assets/our-product/savings.png",
		alt: "Savings",
		title: "Payroll Solutions",
		caption:
			"Automate salary payments, tax deductions, and employee benefits with our seamless payroll management system. Ensure timely and accurate transactions while reducing administrative workload.",
	},
	{
		icon: "/assets/our-product/cash.png",
		alt: "Cash",
		title: "Business Insurance",
		caption:
			"Protect your assets with comprehensive business insurance plans. From property coverage to liability protection, we help safeguard your company against unexpected risks and financial losses.",
	},
];

interface IUseCase {
	icon: string;
	alt: string;
	title: string;
	caption: string;
}

interface IUseCaseProps extends IUseCase {
	index: number;
}
