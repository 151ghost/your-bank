"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLinks, navLinks } from "@/components/constants";
import { motion } from "framer-motion";
import { fadeInUpVariants, slideInVariants } from "@/components/animation";
import { ContainerVariantElement } from "@/components/animation/container-variant";
import { SlideInElement } from "@/components/animation/slide-in-variant";
import { BaseSheet } from "@/components/reuseable/base-sheet";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { cn } from "@/lib/utils";

export default function Header() {
	const path = usePathname();

	return (
		<header className="w-full h-fit flex justify-center mt-[50px] px-[1rem] md:px-[2rem]">
			<ContainerVariantElement className="container xl:h-[95px] flex items-center justify-between py-3.5 pr-3.5 pl-6 md:py-3.5 md:px-6 xl:py-5 xl:px-[34px] bg-grey-11 border border-grey-15 rounded-full z-10 overflow-hidden">
				<SlideInElement className="w-fit h-fit">
					<Image
						src="/assets/Logo.png"
						alt="Logo"
						width={156}
						height={40}
						className="w-[101px] h-[26px] md:w-[116px] mad:h-[30px] 2xlxl:w-[156px] 2xlxl:h-10"
					/>
				</SlideInElement>

				<ContainerVariantElement className="hidden lg:flex gap-[26px]">
					{navLinks.slice(0, 4).map((item) => {
						const isActive = path === item.href;

						return (
							<NavButton key={item.name} item={item} isActive={isActive} />
						);
					})}
				</ContainerVariantElement>

				<SlideInElement custom={false} className="flex items-center gap-[30px]">
					<AuthLinkButtons />

					<MobileNavigation />
				</SlideInElement>
			</ContainerVariantElement>
		</header>
	);
}

function MobileNavigation() {
	const path = usePathname();

	return (
		<BaseSheet
			trigger={
				<Button variant="green" className="py-1.5 px-3.5">
					<img
						src="/assets/Icon.png"
						alt="Hamburger menu icon"
						width={28}
						height={28}
					/>
				</Button>
			}
			title="Navigation Menu"
			description="Browse through our website sections and access your account."
		>
			<ContainerVariantElement className="flex flex-col gap-5 px-5 mt-10">
				{navLinks.slice(0, 4).map((item) => {
					const isActive = path === item.href;

					return <NavButton key={item.name} item={item} isActive={isActive} />;
				})}

				<AuthLinkButtons type="mobile" />
			</ContainerVariantElement>
		</BaseSheet>
	);
}

function NavButton({ isActive, item }: { isActive: boolean; item: NavLinks }) {
	return (
		<FadeInUpElement className="w-full md:w-fit h-fit">
			<Button
				key={item.name}
				asChild
				className={cn(
					"h-[51px] flex justify-start md:text-sm 2xl:text-lg 2xlpy-3 2xl:px-6 py-2.3 px-[18px] rounded-full",
					{
						"bg-grey-15 hover:bg-grey-15": isActive,
						"bg-transparent hover:bg-grey-10": !isActive,
					},
				)}
			>
				<Link href={item.href}>{item.name}</Link>
			</Button>
		</FadeInUpElement>
	);
}

function AuthLinkButtons({
	type = "desktop",
}: { type?: "desktop" | "mobile" }) {
	return (
		<>
			<motion.div
				variants={type === "mobile" ? fadeInUpVariants : slideInVariants}
				className="w-full md:w-fit h-fit"
			>
				<Button
					asChild
					variant="ghost"
					className={cn(
						"h-[55px] text-sm 2xl:text-lg bg-grey-10 lg:bg-transparent rounded-full hover:bg-grey-10 hover:text-white",
						{
							"hidden md:flex": type === "desktop",
							"flex md:hidden": type === "mobile",
						},
					)}
				>
					<Link href={navLinks[4].href}>{navLinks[4].name}</Link>
				</Button>
			</motion.div>

			<motion.div
				variants={type === "mobile" ? fadeInUpVariants : slideInVariants}
				className="w-full md:w-fit h-fit"
			>
				<Button
					variant="green"
					asChild
					className={cn(
						"h-[55px] py-[14px] px-[30px] text-sm 2xl:text-lg hover:bg-green-65",
						{
							"hidden md:flex": type === "desktop",
							"flex md:hidden": type === "mobile",
						},
					)}
				>
					<Link href={navLinks[5].href}>{navLinks[5].name}</Link>
				</Button>
			</motion.div>
		</>
	);
}
