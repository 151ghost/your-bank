import { containerVariants, fadeInVariants } from "@/components/animation";
import {
	SectionDescription,
	SectionDetailsContainer,
	SectionTitle,
} from "@/components/custom/section-details";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";

export default function OurValuesSection() {
	return (
		<section className="container flex flex-col gap-20 py-[100px]">
			<SectionDetailsContainer variant={containerVariants} className="gap-3.5">
				<SectionTitle
					variant={fadeInVariants}
					defaultText="Our"
					specialText="Values"
				/>
				<SectionDescription
					variant={fadeInVariants}
					text="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
				/>
			</SectionDetailsContainer>

			<div className="grid grid-cols-2 gap-20">
				{value.map((item) => (
					<OurValuesCard key={item.value} {...item} />
				))}
			</div>
		</section>
	);
}

function OurValuesCard({ value, description }: IValueProps) {
	return (
		<FadeInUpElement className="w-full flex flex-col gap-[30px] border-l border-green-60 pl-[30px]">
			<p className="text-[58px] font-medium text-grey-30 leading-[150%]">
				{value}
			</p>
			<p className="text-lg font-light text-grey-70">{description}</p>
		</FadeInUpElement>
	);
}

const value: IValueProps[] = [
	{
		value: "Integrity",
		description:
			"We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
	},
	{
		value: "Customer Centricity",
		description:
			"Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
	},
	{
		value: "Collaboration",
		description:
			"We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
	},
	{
		value: "Innovation",
		description:
			"We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
	},
];

interface IValueProps {
	value: string;
	description: string;
}
