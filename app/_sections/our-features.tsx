"use client";

import {
	SectionDetailsContainer,
	SectionDescription,
	SectionTitle,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { ContainerVariantElement } from "@/components/animation/container-variant";
import { SectionContainer } from "@/components/custom/section-container";

export default function OurFeatures() {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const featureCategory = [online_banking, financial_tools, customer_support];

	return (
		<SectionContainer>
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

			<div className="flex max-lg:flex-col gap-5 2xl:gap-[30px]">
				<FadeInUpElement className="lg:max-w-[308px] lg:w-full max-h-fit flex lg:flex-col p-5 md:p-10 2xl:p-[50px] 2xl:rounded-[12px] rounded-[10px] gap-5 2xl:gap-6 bg-grey-11 overflow-x-auto scrollbar-none">
					{["Online Banking", "Financial Tools", "Customer Support"].map(
						(item, index) => (
							<ToggleUsecaseBtn
								key={item}
								item={item}
								index={index}
								activeIndex={activeIndex}
								setActiveIndex={setActiveIndex}
							/>
						),
					)}
				</FadeInUpElement>

				<ContainerVariantElement
					key={activeIndex}
					className="grid md:grid-cols-2 gap-5 2xl:gap-[30px]"
				>
					{featureCategory[activeIndex].map((item) => (
						<FeatureCard key={item.title} {...item} />
					))}
				</ContainerVariantElement>
			</div>
		</SectionContainer>
	);
}

function ToggleUsecaseBtn({
	item,
	index,
	activeIndex,
	setActiveIndex,
}: {
	item: string;
	index: number;
	activeIndex: number;
	setActiveIndex: (activeIndex: number) => void;
}) {
	return (
		<Button
			key={item}
			variant="outline"
			onClick={() => setActiveIndex(index)}
			className={cn(
				"border-grey-15 text-sm 2xl:text-lg py-3.5 px-5 2xl:py-[18px] 2xl:px-6 rounded-full",
				{
					"bg-grey-10 hover:bg-grey-10 text-green-60 hover:text-green-60":
						index === activeIndex,
					" bg-grey-15 hover:bg-grey-10 hover:text-white":
						index !== activeIndex,
				},
			)}
		>
			{item}
		</Button>
	);
}

function FeatureCard({ title, description }: IFearures) {
	return (
		<FadeInUpElement
			asChild
			className="relative h-full flex flex-col gap-5 md:gap-6 2xl:gap-[30px] rounded-[10px] bg-grey-11 p-[30px] md:p-10 2xl:p-[50px] group"
		>
			<div className="flex items-center justify-between">
				<p className="text-lg 2xl:text-[22px]">{title}</p>

				<ArrowUpRight
					size={34}
					color="var(--green-60)"
					className="group-hover:animate-bounce transition-transform 2xl:size-[34px] size-6"
				/>
			</div>

			<p className="2xl:text-lg md:text-base text-sm font-light leading-[150%]">
				{description}
			</p>

			<BorderBeam size={200} duration={10} />
		</FadeInUpElement>
	);
}

const online_banking: IFearures[] = [
	{
		title: "24/7 Account Access",
		description:
			"Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
	},
	{
		title: "Mobile Banking App",
		description:
			"Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
	},
	{
		title: "Secure Transactions",
		description:
			"Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
	},
	{
		title: "Bill Pay and Transfers",
		description:
			"Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
	},
];

const financial_tools: IFearures[] = [
	{
		title: "Budgeting and Expense Tracking",
		description:
			"Manage your finances effectively with our intuitive budgeting tools. Track your expenses, set financial goals, and monitor your spending habits in real-time.",
	},
	{
		title: "Investment Insights",
		description:
			"Get personalized investment insights to help you grow your wealth. Our financial tools provide data-driven recommendations based on your financial goals.",
	},
	{
		title: "Credit Score Monitoring",
		description:
			"Stay informed about your credit health with our credit score monitoring feature. Receive alerts and tips to improve your creditworthiness over time.",
	},
	{
		title: "Automated Savings Plans",
		description:
			"Set up automated savings plans to help you reach your financial milestones effortlessly. Schedule recurring transfers to build your savings consistently.",
	},
];

const customer_support: IFearures[] = [
	{
		title: "24/7 Live Chat Assistance",
		description:
			"Get instant support from our dedicated team through live chat, available 24/7 to assist you with any banking-related queries or issues.",
	},
	{
		title: "AI-Powered Virtual Assistant",
		description:
			"Our AI-powered virtual assistant provides quick answers to your common banking questions, helping you navigate our services with ease.",
	},
	{
		title: "Fraud Protection Support",
		description:
			"We offer dedicated support to help you resolve fraud-related issues. Report suspicious transactions and get assistance in securing your account.",
	},
	{
		title: "Personalized Account Management",
		description:
			"Connect with a dedicated account manager for personalized banking support. Get guidance on financial planning, loans, and investment strategies.",
	},
];

interface IFearures {
	title: string;
	description: string;
}
