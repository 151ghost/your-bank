"use client";

import {
	SectionDetailsContainer,
	SectionTitle,
	SectionDescription,
} from "@/components/custom/section-details";
import { containerVariants, slideInVariants } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SectionContainer } from "@/components/custom/section-container";

export default function FAQ() {
	const [seeMoreFaqs, setSeeMoreFaqs] = useState<boolean>(false);

	return (
		<SectionContainer>
			<SectionDetailsContainer variant={containerVariants}>
				<SectionTitle
					custom
					faq
					variant={slideInVariants}
					specialText="Asked Questions"
					defaultText="Frequently"
				/>
				<SectionDescription
					custom
					variant={slideInVariants}
					text="Still you have any questions? Contact our Team via support@yourbank.com"
				/>
			</SectionDetailsContainer>

			<div className="grid md:grid-cols-2 gap-5 2xl:gap-[30px] relative">
				{faqs.slice(0, seeMoreFaqs ? 6 : 4).map((item) => (
					<FaqCard key={item.question} {...item} />
				))}

				{!seeMoreFaqs && (
					<div className="absolute bottom-0 left-0 right-0 h-[50%] [background:linear-gradient(to_top,rgba(0,0,0,.9)_0%,transparent_100%)] pointer-events-none" />
				)}

				<div className="md:col-span-2 flex items-center justify-center relative z-10">
					<Button
						variant="outline"
						onClick={() => setSeeMoreFaqs(!seeMoreFaqs)}
						className="md:w-fit border-grey-15 py-3.5 px-5 2xl:py-[18px] 2xl:px-6 rounded-full text-sm 2xl:text-lg hover:bg-grey-10 hover:text-white"
					>
						{seeMoreFaqs ? "See Less FAQs" : "Load All FAQs"}{" "}
						<ChevronDown
							className={cn(
								"transition-transform duration-300",
								{ "rotate-180": seeMoreFaqs },
								{ "rotate-0": !seeMoreFaqs },
							)}
						/>
					</Button>
				</div>
			</div>
		</SectionContainer>
	);
}

function FaqCard({ question, answer }: IFaq) {
	return (
		<FadeInUpElement className="w-full h-full relative flex flex-col 2xl:gap-[30px] md:gap-6 gap-5 p-[30px] md:p-10 2xl:p-[50px] rounded-[14px] bg-black outline-1 outline-grey-15">
			<p className="text-lg 2xl:text-xl font-medium">{question}</p>
			<Separator />
			<p className="max-md:text-sm 2xl:text-lg text-grey-70 font-light">
				{answer}
			</p>

			<BorderBeam size={225} />
		</FadeInUpElement>
	);
}

const faqs: IFaq[] = [
	{
		question: "How do I open an account with YourBank?",
		answer: `Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.`,
	},
	{
		question: "What documents do I need to provide to apply for a loan?",
		answer: `The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`,
	},
	{
		question: "How can I access my accounts online?",
		answer: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`,
	},
	{
		question: "Are my transactions and personal information secure?",
		answer:
			"At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
	},
	{
		question: "How can I reset my online banking password?",
		answer:
			"If you forget your password, simply click on the 'Forgot Password' link on the login page. Follow the instructions to verify your identity using your registered email or phone number. Once verified, you can create a new password. For additional support, our customer service team is available to assist you.",
	},
	{
		question: "Does YourBank offer mobile banking services?",
		answer:
			"Yes! YourBank provides a secure and convenient mobile banking app that allows you to check balances, transfer funds, and pay bills on the go. Our app includes advanced security features to protect your information. Download it from the App Store or Google Play and log in using your online banking credentials.",
	},
];

interface IFaq {
	question: string;
	answer: string;
}
