"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { slideInVariants } from "../animation";
import clsx from "clsx";

export default function ToggleCase({
	activeIndex,
	setActiveIndex,
}: { activeIndex: number; setActiveIndex: (activeIndex: number) => void }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={slideInVariants}
			className="flex items-center justify-center p-3 xl:p-3.5 border border-grey-15 rounded-full bg-grey-11"
		>
			<div className="relative flex items-center w-full h-full">
				<div
					className={clsx(
						"absolute flex self-center inset-0 max-w-1/2 h-full rounded-full bg-green-60 hover:bg-green-65 transition-transform duration-300",
						{
							"translate-x-0": activeIndex === 0,
						},
						{ "translate-x-full": activeIndex === 1 },
					)}
				/>

				{["Individual", "Business"].map((name, index) => (
					<Button
						key={name}
						onClick={() => setActiveIndex(index)}
						className={clsx(
							"w-1/2 h-full py-2.5 px-[18px] xl:py-3.5 xl:px-6 rounded-full text-sm xl:text-lg bg-transparent z-10 transition-colors duration-300",
							{
								"text-grey-11 bg-transparent hover:bg-transparent hover:text-grey-11":
									activeIndex === index,
							},
						)}
					>
						For {name}
					</Button>
				))}
			</div>
		</motion.div>
	);
}
