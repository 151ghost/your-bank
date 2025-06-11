"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionDetailsContainer({
	children,
	variant,
	className = "",
}: { children: React.ReactNode; variant: Variants; className?: string }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={variant}
			className={`flex flex-col max-md:items-center 2xl:gap-3.5 gap-2.5 ${className}`}
		>
			{children}
		</motion.div>
	);
}

export function SectionTitle({
	variant,
	defaultText,
	specialText,
	extraText,
	custom = false,
	faq = false,
	cta = false,
}: {
	variant: Variants;
	custom?: boolean;
	defaultText?: string;
	specialText?: string;
	extraText?: string;
	faq?: boolean;
	cta?: boolean;
}) {
	return (
		<motion.p
			variants={variant}
			custom={custom}
			className={cn("max-md:text-center font-medium leading-[150%]", {
				"text-green-60": faq,
				"text-2xl md:text-[30px] 2xl:text-[40px]": cta,
				"text-[28px] md:text-[38px] 2xl:text-5xl": !cta,
			})}
		>
			{defaultText}{" "}
			<span className={faq ? "text-white" : "text-green-60"}>
				{specialText}
			</span>{" "}
			{extraText}
		</motion.p>
	);
}

export function SectionDescription({
	variant,
	text,
	cta = false,
	custom = false,
	career_hero = false,
}: {
	variant: Variants;
	text?: string;
	cta?: boolean;
	custom?: boolean;
	career_hero?: boolean;
}) {
	return (
		<motion.p
			variants={variant}
			custom={custom}
			className={cn(
				"max-md:text-sm 2xl:text-lg max-md:text-center font-light text-grey-70 leading-[150%]",
				{ "max-w-[95%] md:max-w-[80%]": cta },
				{ "max-w-[90%] md:max-w-[80%]": !cta && !career_hero },
				{ "w-[95%] lg:w-[80%] max-lg:text-center": career_hero },
			)}
		>
			{text}
		</motion.p>
	);
}
