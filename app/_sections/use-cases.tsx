"use client";

import AnimatedBorderWrapper from "@/components/custom/animated-border-wrapper";
import PingIconCtn from "@/components/custom/ping-icon-ctn";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { containerVariants, slideInVariants } from "@/components/animation";
import Image from "next/image";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";

export default function UseCases() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerVariants}
			className="container flex flex-col gap-[60px] py-[100px]"
		>
			<SectionDetailsContainer variant={containerVariants}>
				<SectionTitle
					specialText="Use Cases"
					variant={slideInVariants}
					custom
				/>
				<SectionDescription
					variant={slideInVariants}
					custom
					text="At YourBank, we cater to the diverse needs of individuals and
					businesses alike, offering a wide range of financial solutions"
				/>
			</SectionDetailsContainer>
			<div className="flex flex-col gap-10 xl:gap-[60px]">
				{use_cases.map((item) => (
					<UseCaseSections key={item.case} item={item} />
				))}
			</div>
		</motion.section>
	);
}

function UseCaseSections({ item }: { item: IUseCases }) {
	const count = useMotionValue(0);

	useEffect(() => {
		// Animate from 0 to the target percentage
		const controls = animate(count, item.numeric_data[0].percentage, {
			duration: 2,
			ease: "easeInOut",
		});
		return () => controls.stop();
	}, [count, item.numeric_data]);

	return (
		<div
			className={clsx(
				"flex flex-col lg:flex-row gap-[30px] md:gap-[60px] xl:gap-[100px]",
				{
					"lg:flex-row-reverse": item.case === "Business",
				},
			)}
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				custom={item.case === "Individual"}
				variants={slideInVariants}
				viewport={{ once: true }}
				className="relative grid grid-cols-2 gap-2.5 xl:gap-5 p-5 md:p-10 rounded-[10px] bg-grey-11 overflow-hidden"
			>
				<Image
					src="/assets/vector1.png"
					alt="Vector"
					width={248}
					height={200}
					className="absolute -top-[10px] -left-1"
				/>

				{item.advantages.map((advantage) => (
					<AnimatedBorderWrapper
						key={advantage.caption}
						className="flex flex-col items-center rounded-[12px] p-[1px] group"
					>
						<div className="relative w-full h-full flex flex-col items-center gap-3.5 py-5 px-3.5 md:p-6 bg-grey-10 rounded-[12px]">
							<PingIconCtn
								type="use-cases"
								icon={advantage.icon}
								alt={advantage.caption}
							/>
							<p className="text-center max-md:text-sm xl:text-xl">
								{advantage.caption}
							</p>
						</div>
					</AnimatedBorderWrapper>
				))}
			</motion.div>

			<div className="max-w-full lg:max-w-1/2 flex flex-col max-md:items-center gap-[50px]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="flex flex-col max-md:items-center gap-2.5"
				>
					<motion.p
						custom={item.case === "Business"}
						variants={slideInVariants}
						className="text-xl md:text-[26px] xl:text-[30px] font-medium"
					>
						For {item.case}
					</motion.p>
					<motion.p
						custom={item.case === "Business"}
						variants={slideInVariants}
						className="max-md:text-center max-md:text-sm xl:text-lg font-light grey-70"
					>
						{item.description}
					</motion.p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="grid md:grid-cols-3 gap-[30px] md:gap-[40px] lg:gap-[50px]"
				>
					{item.numeric_data.map((data) => (
						<IndividualNumericData
							key={data.description}
							data={data}
							item_case={item.case}
						/>
					))}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={item.case === "Business"}
					variants={slideInVariants}
					className="w-fit"
				>
					<Button
						asChild
						variant="outline"
						className="w-fit border-grey-15 py-3.5 xl:py-[18px] px-5 xl:px-6 xl:text-lg rounded-full bg-grey-11 hover:bg-grey-15 hover:text-white transition-colors duration-200"
					>
						<Link href="/">Learn More</Link>
					</Button>
				</motion.div>
			</div>
		</div>
	);
}

function IndividualNumericData({
	data,
	item_case,
}: {
	data: { percentage: number; description: string };
	item_case: "Individual" | "Business";
}) {
	const percentageCount = useMotionValue(0);
	const roundedPercentage = useTransform(percentageCount, (latest) =>
		Math.round(latest),
	);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			animate(percentageCount, data.percentage, {
				duration: 2,
				ease: "easeInOut",
			});
		}
	}, [isInView, percentageCount, data.percentage]);

	return (
		<motion.div
			ref={ref}
			custom={item_case === "Business"}
			variants={slideInVariants}
			key={data.description}
			className="flex flex-col max-md:items-center gap-[5px]"
		>
			<p className="text-[40px] xl:text-[58px] font-medium text-green-60">
				<motion.span>{roundedPercentage}</motion.span>%
			</p>
			<p className="max-md:text-sm font-light text-grey-70 text-[15px] xl:text-lg">
				{data.description}
			</p>
		</motion.div>
	);
}

const use_cases: IUseCases[] = [
	{
		case: "Individual",
		description:
			"For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
		numeric_data: [
			{ percentage: 78, description: "Secure Retirement Planning" },
			{ percentage: 63, description: "Manageable Debt Consolidation" },
			{ percentage: 91, description: "Reducing financial burdens" },
		],
		advantages: [
			{
				icon: "/assets/use-cases/personal-finances.png",
				caption: "Managing Personal Finances",
			},
			{
				icon: "/assets/use-cases/individual2.png",
				caption: "Saving for the Future",
			},
			{ icon: "/assets/use-cases/individual3.png", caption: "Homeownership" },
			{
				icon: "/assets/use-cases/individual4.png",
				caption: "Education Funding",
			},
		],
	},
	{
		case: "Business",
		description:
			" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
		numeric_data: [
			{ percentage: 65, description: "Cash Flow Management" },
			{ percentage: 70, description: "Drive Business Expansion" },
			{ percentage: 45, description: "Streamline payroll processing" },
		],
		advantages: [
			{
				icon: "/assets/use-cases/b1.png",
				caption: "Startups and Entrepreneurs",
			},
			{ icon: "/assets/use-cases/b2.png", caption: "Cash Flow Management" },
			{ icon: "/assets/use-cases/b3.png", caption: "Business Expansion" },
			{ icon: "/assets/use-cases/b4.png", caption: "Payment Solutions" },
		],
	},
];

interface IUseCases {
	case: "Individual" | "Business";
	description: string;
	numeric_data: { percentage: number; description: string }[];
	advantages: { icon: string; caption: string }[];
}
