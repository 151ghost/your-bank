"use client";

import clsx from "clsx";
import { motion, type Variants } from "framer-motion";

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
			className={`flex flex-col max-md:items-center gap-2.5 ${className}`}
		>
			{children}
		</motion.div>
	);
}

export function SectionTitle({
	variant,
	defaultText,
	specialText,
	custom = false,
	faq = false,
}: {
	variant: Variants;
	custom?: boolean;
	defaultText?: string;
	specialText?: string;
	faq?: boolean;
}) {
	return (
		<motion.p
			variants={variant}
			custom={custom}
			className={clsx(
				"text-[28px] md:text-[38px] xl:text-5xl font-medium leading-[150%]",
				{
					"text-green-60": faq,
				},
			)}
		>
			{defaultText}{" "}
			<span className={faq ? "text-white" : "text-green-60"}>
				{specialText}
			</span>
		</motion.p>
	);
}

export function SectionDescription({
	variant,
	text,
	custom = false,
}: { variant: Variants; text?: string; custom?: boolean }) {
	return (
		<motion.p
			variants={variant}
			custom={custom}
			className="max-w-[80%] max-md:text-sm xl:text-lg max-md:text-center font-light grey-70 leading-[150%]"
		>
			{text}
		</motion.p>
	);
}
