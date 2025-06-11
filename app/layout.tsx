import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
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
				<Header />

				<main className="w-full flex flex-col items-center 2xl:gap-[100px] md:gap-[70px] gap-10">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
