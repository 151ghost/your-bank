import FAQ from "./_sections/faq";
import HeroSection from "./_sections/hero";
import OurFeatures from "./_sections/our-features";
import OurProducts from "./_sections/our-products";
import UseCases from "./_sections/use-cases";

export default function Home() {
	return (
		<>
			<HeroSection />

			<OurProducts />

			<UseCases />

			<OurFeatures />

			<FAQ />
		</>
	);
}
