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

export default function Header() {
	const path = usePathname();

	return (
		<header className="w-full h-fit flex justify-center mt-[50px]">
			<nav className="container h-[95px] flex items-center justify-between py-5 px-[34px] bg-grey-11 border border-grey-15 rounded-[100px]">
				<Image src="/assets/Logo.png" alt="Logo" width={156} height={40} />

				<div className="hidden lg:flex gap-[26px]">
					{navLinks.slice(0, 4).map((item) => {
						const isActive = path === item.href;

						return (
							<NavButton key={item.name} item={item} isActive={isActive} />
						);
					})}
				</div>

				<div className="flex items-center gap-[30px]">
					<AuthLinkButtons />

					<MobileNavigation />
				</div>
			</nav>
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

				<div className="flex flex-col gap-5 px-5 mt-10">
					{navLinks.slice(0, 4).map((item) => {
						const isActive = path === item.href;

						return (
							<NavButton key={item.name} item={item} isActive={isActive} />
						);
					})}
				</div>

				<div className="flex flex-col gap-[30px] px-5 mt-10">
					<AuthLinkButtons />
				</div>
			</SheetContent>
		</Sheet>
	);
}

function NavButton({ isActive, item }: { isActive: boolean; item: NavLinks }) {
	return (
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
	);
}

function AuthLinkButtons({
	type = "desktop",
}: { type?: "desktop" | "mobile" }) {
	return (
		<>
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
		</>
	);
}

const navLinks: NavLinks[] = [
	{ name: "Home", href: "/" },
	{ name: "Careers", href: "/careers" },
	{ name: "About", href: "/about" },
	{ name: "Security", href: "/security" },
	{ name: "Sign Up", href: "/sign-up" },
	{ name: "Log In", href: "/log-in" },
];

interface NavLinks {
	name: string;
	href: string;
}
