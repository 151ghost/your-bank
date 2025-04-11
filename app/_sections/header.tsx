"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { type NavLinks, navLinks } from "@/components/constants";
import { motion } from "framer-motion";
import {
	containerVariants,
	fadeInUpVariants,
	slideInVariants,
} from "@/components/animation";

export default function Header() {
	const path = usePathname();

	return (
		<header className="w-full h-fit flex justify-center mt-[50px] px-[1rem] md:px-[2rem]">
			<motion.nav
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
				className="container xl:h-[95px] flex items-center justify-between py-3.5 pr-3.5 pl-6 md:py-3.5 md:px-6 xl:py-5 xl:px-[34px] bg-grey-11 border border-grey-15 rounded-full z-10 overflow-hidden"
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={true}
					variants={slideInVariants}
					className="w-fit h-fit"
				>
					<Image
						src="/assets/Logo.png"
						alt="Logo"
						width={156}
						height={40}
						className="w-[101px] h-[26px] md:w-[116px] mad:h-[30px] xl:w-[156px] xl:h-10"
					/>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="hidden lg:flex gap-[26px]"
				>
					{navLinks.slice(0, 4).map((item) => {
						const isActive = path === item.href;

						return (
							<NavButton key={item.name} item={item} isActive={isActive} />
						);
					})}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInVariants}
					className="flex items-center gap-[30px]"
				>
					<AuthLinkButtons />

					<MobileNavigation />
				</motion.div>
			</motion.nav>
		</header>
	);
}

function MobileNavigation() {
	const path = usePathname();

	return (
		<Sheet>
			<SheetTrigger className="flex lg:hidden">
				<Menu color="var(--green-60)" />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
					<SheetDescription className="sr-only">
						Browse through our website sections and access your account.
					</SheetDescription>
				</SheetHeader>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="flex flex-col gap-5 px-5 mt-10"
				>
					{navLinks.slice(0, 4).map((item) => {
						const isActive = path === item.href;

						return (
							<NavButton key={item.name} item={item} isActive={isActive} />
						);
					})}

					<AuthLinkButtons type="mobile" />
				</motion.div>
			</SheetContent>
		</Sheet>
	);
}

function NavButton({ isActive, item }: { isActive: boolean; item: NavLinks }) {
	return (
		<motion.div variants={fadeInUpVariants} className="w-full md:w-fit h-fit">
			<Button
				key={item.name}
				asChild
				className={clsx(
					"h-[51px] flex justify-start text-lg py-3 px-6 rounded-full",
					{
						"bg-grey-15 hover:bg-grey-15": isActive,
						"bg-transparent hover:bg-grey-10": !isActive,
					},
				)}
			>
				<Link href={item.href}>{item.name}</Link>
			</Button>
		</motion.div>
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
					className={clsx(
						"h-[55px] text-lg bg-grey-10 lg:bg-transparent rounded-full hover:bg-grey-10 hover:text-white",
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
					className={clsx("h-[55px] py-[14px] px-[30px] hover:bg-green-65", {
						"hidden md:flex": type === "desktop",
						"flex md:hidden": type === "mobile",
					})}
				>
					<Link href={navLinks[5].href}>{navLinks[5].name}</Link>
				</Button>
			</motion.div>
		</>
	);
}
