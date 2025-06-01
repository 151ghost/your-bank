"use client";

import { motion } from "framer-motion";
import { containerVariants } from "../animation";

export function ContainerVariantElement({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerVariants}
			className={className}
		>
			{children}
		</motion.div>
	);
}
