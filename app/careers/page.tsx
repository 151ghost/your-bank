import dynamic from "next/dynamic";

import CareerHeroSection from "./sections/hero";
import OurValuesSection from "./sections/our-values";

const OurBenefitSection = dynamic(
	() => import("../careers/sections/our-benefits"),
);
const FAQSection = dynamic(() => import("../_sections/faq"));
const CTASection = dynamic(() => import("../_sections/cta"));
const JobOpeningsSection = dynamic(
	() => import("../careers/sections/job-openings"),
);

export const metadata = {
	title: "Careers",
};

export default function CareersPage() {
	return (
		<>
			<CareerHeroSection />

			<OurValuesSection />

			<OurBenefitSection />

			<JobOpeningsSection />

			<FAQSection />

			<CTASection />
		</>
	);
}
