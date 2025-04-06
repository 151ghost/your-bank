"use client";

import { ArrowLeftRight, BadgeCheck, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
	containerVariants,
	fadeInUpVariants,
	fadeInVariants,
	slideOutVariants,
} from "@/components/animation";
import AnimatedBorderWrapper from "@/components/custom/animated-border-wrapper";

export default function HeroSection() {
	return (
		<section className="container flex max-xl:flex-col items-center justify-center gap-[100px] gap-y-[120px] py-[100px]">
			<div className="md:w-[80%] xl:max-w-1/2 xl:w-[649px] flex flex-col max-xl:items-center gap-[50px]">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="flex flex-col max-xl:items-center gap-5"
				>
					<motion.div
						variants={fadeInUpVariants}
						className="w-fit flex items-center gap-1.5 py-2.5 px-5 bg-grey-15 rounded-full"
					>
						<BadgeCheck color="var(--green-60)" className="size-5 xl:size-6" />
						<span className="text-xs md:text-sm xl:text-lg font-light">
							No LLC Required, No Credit Check.
						</span>
					</motion.div>
					<motion.div
						variants={fadeInUpVariants}
						className="flex flex-col max-md:items-center gap-3.5"
					>
						<p className="max-xl:text-center text-[28px] md:text-[38px] xl:text-5xl font-medium leading-[150%]">
							Welcome to YourBank Empowering Your{" "}
							<span className="text-green-60">Financial Journey</span>
						</p>

						<p className="max-md:text-sm max-xl:text-center text-white-90 font-light">
							At YourBank, our mission is to provide comprehensive banking
							solutions that empower individuals and businesses to achieve their
							financial goals. We are committed to delivering personalized and
							innovative services that prioritize our customers&apos; needs.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUpVariants}
				>
					<Button
						variant="green"
						className="w-fit py-[18px] px-[30px] h-[49px] md:h-[63px] max-md:text-sm"
					>
						Open Account
					</Button>
				</motion.div>
			</div>

			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="relative w-[90%] md:w-[410px]"
			>
				<motion.div
					variants={slideOutVariants}
					custom={true}
					className="absolute z-20 -left-3 md:-left-[50px] -top-[25px] md:-top-[40px]"
				>
					<DetailsBlock
						className="bg-[#22251B] rounded-[10px]"
						icon={
							<Plus
								size={21}
								color="var(--grey-10)"
								className="max-md:size-3"
							/>
						}
						title="+ $5000,00"
						description="Monthly Income"
					/>
				</motion.div>

				<motion.div
					variants={slideOutVariants}
					className="absolute -top-[30px] -right-[15px] md:-right-[75px] md:-top-[45px] overflow-x-hidden"
				>
					<Image
						src="/assets/abstract.png"
						alt="Arrows"
						width={418}
						height={383}
						className="max-md:w-[220px] max-md:h-[201px]"
					/>
				</motion.div>

				<TransactionCard />

				<SupportedCurrencies />
			</motion.div>
		</section>
	);
}

function DetailsBlock({
	type = "monthly-income",
	className = "",
	icon,
	title,
	description,
}: {
	type?: "monthly-income" | "transaction";
	className?: string;
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div
			className={clsx(`flex items-center gap-2 ${className}`, {
				"px-2.5 md:px-[17px] py-2 md:py-3.5": type === "monthly-income",
			})}
		>
			<div className="flex p-2 rounded-full bg-green-60">{icon}</div>

			<div className="flex flex-col gap-[1px]">
				<p
					className={clsx({
						"max-md:text-[10px] text-[17px]": type === "monthly-income",
						"max-md:text-[9px] font-light": type === "transaction",
					})}
				>
					{title}
				</p>
				<p
					className={clsx({
						"text-[8px] md:text-sm text-white-90 font-light":
							type === "monthly-income",
						"max-md:text-[10px] text-[17px]": type === "transaction",
					})}
				>
					{description}
				</p>
			</div>
		</div>
	);
}

function TransactionCard() {
	return (
		<motion.div variants={fadeInVariants}>
			<AnimatedBorderWrapper className="w-full md:w-[410px] h-fit rounded-[10px] p-[1px]">
				<div className="absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.5)] rounded-[10px]" />

				<div className="relative w-full max-md:h-[368px] flex flex-col gap-[26px] p-5 md:p-[35px] rounded-[10px] bg-[url(/assets/transaction-bg.png)] bg-black">
					<div className="relative flex flex-col gap-[17px] z-10">
						<p className="text-[10px] md:text-[17px] font-medium">
							Your Transactions
						</p>

						<div className="h-fit flex flex-col items-center">
							{transactions.map((item, index) => (
								<IndividualTransactions
									key={item.name}
									{...item}
									index={index}
								/>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-[17px] z-10">
						<p className="text-[10px] md:text-[17px] font-medium">
							Money Exchange
						</p>

						<div className="w-full flex border border-grey-15 rounded-[10px]">
							{money_exchange.map((item, index) => (
								<MoneyExchangeCards
									key={item.currency_shorthand}
									{...item}
									index={index}
								/>
							))}
						</div>
					</div>
				</div>
			</AnimatedBorderWrapper>
		</motion.div>
	);
}

function IndividualTransactions({
	name,
	amount,
	index,
}: IndividualTransactionProps) {
	return (
		<div
			className={clsx(
				"flex items-center justify-between bg-grey-11 py-2 md:py-3.5 px-3 md:px-[21px] border border-grey-15 rounded-[10px]",
				{ "w-full z-30": index === 0 },
				{ "w-[90%] z-20 -mt-[28px] opacity-50": index === 1 },
				{ "w-[80%] z-10 -mt-[28px] opacity-30": index === 2 },
			)}
		>
			<DetailsBlock
				type="transaction"
				icon={
					<ArrowLeftRight
						size={21}
						color="var(--grey-10)"
						className="max-md:size-2.5"
					/>
				}
				title="Transaction"
				description={name}
			/>

			<p className="text-xs md:text-[21px] font-medium">-${amount}</p>
		</div>
	);
}

function MoneyExchangeCards({
	index,
	image_alt,
	image,
	currency_shorthand,
	currency,
	amount,
}: MoneyExchangeCardProps) {
	return (
		<div className="w-1/2 flex flex-col">
			<div
				className={clsx(
					"flex flex-col gap-[9px] p-[17px] border-b border-grey-11",
					{
						"border-r": index === 0,
					},
				)}
			>
				<div className="flex items-center gap-[9px]">
					<Image
						src={image}
						alt={image_alt}
						width={35}
						height={35}
						className="rounded-full md:min-h-[35px] max-md:size-[21px]"
					/>

					<p className="max-md:text-[9px]">{currency_shorthand}</p>
				</div>

				<p className="text-[8px] md:text-sm font-light text-white-90">
					{currency}
				</p>
			</div>
			<p
				className={clsx(
					"text-[10px] md:text-[17px] font-medium py-[26px] px-[17px] gap-[9px] border-grey-11",
					{
						"border-r": index === 0,
					},
				)}
			>
				{amount}
			</p>
		</div>
	);
}

function SupportedCurrencies() {
	return (
		<motion.div
			variants={fadeInUpVariants}
			className="w-fit flex items-center gap-3 py-[5px] md:py-[9px] pl-3 md:pl-5 pr-[5px] md:pr-[9px] rounded-full bg-[#22251B] mt-5 ml-auto md:-mr-10"
		>
			<p className="max-md:text-[9px]">Supported Currencies</p>

			<div className="w-fit flex bg-grey-10 gap-[7px] p-[9px] rounded-full">
				{supported_currencies.map((item) => (
					<Image
						key={item.alt}
						src={item.src}
						alt={item.alt}
						width={35}
						height={35}
						className="max-md:size-5"
					/>
				))}
			</div>
		</motion.div>
	);
}

const transactions: Transactions[] = [
	{ name: "Joel Kenley", amount: 68 },
	{ name: "Mark Smith", amount: 80 },
	{ name: "Lenen Roy", amount: 75 },
];

const money_exchange: MoneyExchangeProps[] = [
	{
		image: "/assets/ngn.png",
		image_alt: "Nigeria's Flag",
		currency_shorthand: "NGN",
		currency: "Nigerian Naira",
		amount: 500,
	},
	{
		image: "/assets/usa.png",
		image_alt: "USA's Flag",
		currency_shorthand: "USD",
		currency: "United States Dollar",
		amount: 500,
	},
];

const supported_currencies: SupportedCurrencies[] = [
	{ src: "/assets/dollars.png", alt: "Dollar" },
	{ src: "/assets/pounds.png", alt: "Pounds" },
	{ src: "/assets/btc.png", alt: "Bitcoin" },
	{ src: "/assets/rth.png", alt: "Ethereum" },
];

interface Transactions {
	name: string;
	amount: number;
}

interface IndividualTransactionProps extends Transactions {
	index: number;
}

interface MoneyExchangeProps {
	image_alt: string;
	image: string;
	currency_shorthand: string;
	currency: string;
	amount: number;
}

interface MoneyExchangeCardProps extends MoneyExchangeProps {
	index: number;
}

interface SupportedCurrencies {
	src: string;
	alt: string;
}
