"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
	containerVariants,
	fadeInUpVariants,
	slideInVariants,
} from "@/components/animation";
import Image from "next/image";

export default function OurProducts() {
	const [activeIndex, setActiveIndex] = useState(0);
	const useCases = [individual_usecase, business_usecase];

	return (
		<section className="container flex flex-col gap-[100px]">
			<div className="w-full flex max-md:flex-col gap-y-5 items-center md:items-end justify-between">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="flex flex-col max-md:items-center gap-3.5 md:max-w-1/2"
				>
					<motion.p
						variants={slideInVariants}
						custom={true}
						className="text-[28px] md:text-[38px] xl:text-5xl font-medium leading-[150%]"
					>
						Our <span className="text-green-60">Products</span>
					</motion.p>
					<motion.p
						variants={slideInVariants}
						custom={true}
						className="text-grey-70 max-md:text-center max-md:text-sm xl:text-lg font-light"
					>
						Discover a range of comprehensive and customizable banking products
						at YourBank, designed to suit your unique financial needs and
						aspirations.
					</motion.p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInVariants}
					className="flex p-3 xl:p-3.5 border border-grey-15 rounded-full bg-grey-11"
				>
					{["Individual", "Business"].map((name, index) => (
						<Button
							key={name}
							onClick={() => setActiveIndex(index)}
							className={clsx(
								"h-full py-2.5 px-[18px] xl:py-3.5 xl:px-6 rounded-full text-sm xl:text-lg bg-transparent transition-colors duration-300",
								{
									"text-grey-11 bg-green-60 hover:bg-green-65 hover:text-grey-11":
										activeIndex === index,
								},
							)}
						>
							For {name}
						</Button>
					))}
				</motion.div>
			</div>

			<motion.div
				key={activeIndex}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]"
			>
				{useCases[activeIndex].map((item, index) => (
					<ProductCard key={item.title} {...item} index={index} />
				))}
			</motion.div>
		</section>
	);
}

function ProductCard({ icon, title, caption, index }: IUseCaseProps) {
	return (
		<motion.div
			custom={index === 0}
			variants={RenderVariant(index)}
			className="flex flex-col items-center gap-[30px]"
		>
			<PingIconCtn icon={icon} />
			<div className="flex flex-col items-center gap-5">
				<p className="text-xl xl:text-2xl leadinf-[150px]">{title}</p>
				<p className="max-md:text-sm xl:text-lg font-light text-grey-70 text-center">
					{caption}
				</p>
			</div>
		</motion.div>
	);
}

function PingIconCtn({ icon }: { icon: string }) {
	return (
		<div className="relative size-[98px] flex items-center justify-center">
			<div className="absolute size-[55px] rounded-full bg-[#CAFF33]/20 animate-ping" />
			<div className="size-[98px] p-3 rounded-full bg-gradient-to-b from-[#CAFF33]/10 to-[#CAFF33]/0 flex items-center justify-center">
				<div className="size-[74px] rounded-full p-5 bg-gradient-to-b from-[#CAFF33]/15 to-[#CAFF33]/0">
					<Image src={icon} alt="" width={34} height={34} />
				</div>
			</div>
		</div>
	);
}

function RenderVariant(index: number) {
	if (index === 0) {
		return slideInVariants;
	}

	if (index === 1) {
		return fadeInUpVariants;
	}

	if (index === 2) {
		return slideInVariants;
	}
}

const individual_usecase: IUseCase[] = [
	{
		icon: "/assets/our-product/brief-case.png",
		title: "Checking Accounts",
		caption:
			"Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
	},
	{
		icon: "/assets/our-product/savings.png",
		title: "Savings Accounts",
		caption:
			"Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
	},

	{
		icon: "/assets/our-product/cash.png",
		title: "Loans and Mortgages",
		caption:
			"Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
	},
];

const business_usecase: IUseCase[] = [
	{
		icon: "/assets/our-product/brief-case.png",
		title: "Business Savings",
		caption:
			"Maximize your company's financial growth with our high-yield business savings accounts. Enjoy competitive interest rates and secure investment options to build long-term wealth for your business.",
	},
	{
		icon: "/assets/our-product/savings.png",
		title: "Payroll Solutions",
		caption:
			"Automate salary payments, tax deductions, and employee benefits with our seamless payroll management system. Ensure timely and accurate transactions while reducing administrative workload.",
	},

	{
		icon: "/assets/our-product/cash.png",
		title: "Business Insurance",
		caption:
			"Protect your assets with comprehensive business insurance plans. From property coverage to liability protection, we help safeguard your company against unexpected risks and financial losses.",
	},
];

interface IUseCase {
	icon: string;
	title: string;
	caption: string;
}

interface IUseCaseProps extends IUseCase {
	index: number;
}
