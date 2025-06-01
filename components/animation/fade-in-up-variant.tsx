"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../animation";

export function FadeInUpElement({
	children,
	className,
	asChild = false,
}: {
	children: React.ReactNode;
	className?: string;
	asChild?: boolean;
}) {
	return (
		<motion.div
			variants={fadeInUpVariants}
			{...(!asChild && {
				initial: "hidden",
				whileInView: "visible",
				viewport: { once: true },
			})}
			className={className}
		>
			{children}
		</motion.div>
	);
}
