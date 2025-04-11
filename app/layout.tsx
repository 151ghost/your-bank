import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
import Image from "next/image";
import Footer from "./_sections/footer";

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "YourBanK",
	description:
		"Your trusted banking partner for secure and convenient financial services",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lexend.variable} antialiased relative overflow-x-hidden`}
			>
				<Image
					src="/assets/vector1.png"
					alt="Vector"
					width={759}
					height={610}
					className="absolute -top-[60px] -left-[50px] max-xl:w-[547px] max-xl:h-[440px] max-md:w-[382px] max-md:h-[307px]"
				/>

				<Header />

				<main className="w-full flex flex-col items-center">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
