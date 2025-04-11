"use client";

import { BorderBeam } from "@/components/custom/border-beam";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CtaSection() {
	return (
		<section className="py-[100px]">
			<div className="container relative w-full flex flex-col md:flex-row items-center gap-6 md:gap-[150px] p-[30px] md;px-[60px] xl:p-20 rounded-[20px] bg-[url(/assets/transaction-bg.png)] bg-[#262626] overflow-hidden">
				<Image
					src="/assets/vector1.png"
					alt="Vector"
					width={298}
					height={298}
					className="absolute -top-1 -left-2.5"
				/>

				<SectionDetailsContainer variant={containerVariants}>
					<SectionTitle
						custom
						cta
						variant={slideInVariants}
						specialText="YourBanK today!"
						defaultText="Start your financial journey with"
					/>
					<SectionDescription
						custom
						variant={slideInVariants}
						cta
						text="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
					/>
				</SectionDetailsContainer>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInVariants}
					className="w-fit h-fit"
				>
					<Button
						variant="green"
						className="md:h-[49px] xl:h-[63px] py-3.5 px-5 xl:py-[18px] xl:px-[30px] rounded-full text-sm xl:text-lg text-grey-11"
					>
						Open Account
					</Button>
				</motion.div>

				<BorderBeam size={150} duration={20} />
			</div>
		</section>
	);
}
