import dynamic from "next/dynamic";

// import CtaSection from "./_sections/cta";
// import FAQ from "./_sections/faq";
import HeroSection from "./_sections/hero";
// import OurFeatures from "./_sections/our-features";
import OurProducts from "./_sections/our-products";
// import Testimonial from "./_sections/testimonial";
// import UseCases from "./_sections/use-cases";

const UseCasesSection = dynamic(() => import("./_sections/use-cases"));
const OurFeaturesSection = dynamic(() => import("./_sections/our-features"));
const FAQSection = dynamic(() => import("./_sections/faq"));
const TestimonialSection = dynamic(() => import("./_sections/testimonial"));
const CTASection = dynamic(() => import("./_sections/cta"));

export default function Home() {
	return (
		<>
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
