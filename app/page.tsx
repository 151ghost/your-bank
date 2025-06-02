import dynamic from "next/dynamic";
import Image from "next/image";

import HeroSection from "./_sections/hero";
import OurProducts from "./_sections/our-products";

const UseCasesSection = dynamic(() => import("./_sections/use-cases"));
const OurFeaturesSection = dynamic(() => import("./_sections/our-features"));
const FAQSection = dynamic(() => import("./_sections/faq"));
const TestimonialSection = dynamic(() => import("./_sections/testimonial"));
const CTASection = dynamic(() => import("./_sections/cta"));

export default function Home() {
	return (
		<>
			<Image
				src="/assets/vector1.png"
				alt="Vector"
				width={759}
				height={610}
				className="absolute -top-[60px] -left-[50px] max-xl:w-[547px] max-xl:h-[440px] max-md:w-[382px] max-md:h-[307px]"
			/>

			<HeroSection />

			<OurProducts />

			<UseCasesSection />

			<OurFeaturesSection />

			<FAQSection />

			<TestimonialSection />

			<CTASection />
		</>
	);
}
