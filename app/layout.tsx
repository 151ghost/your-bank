import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
import Image from "next/image";

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Your Bank",
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
			<body className={`${lexend.variable} antialiased relative`}>
				<Image
					src="/assets/vector1.png"
					alt="Vector"
					width={248}
					height={200}
					className="absolute -top-[50px] -left-1"
				/>

				<Header />

				<main className="w-full flex flex-col items-center">{children}</main>
			</body>
		</html>
	);
}
