import PageHero from "@/components/custom/page-hero";

export default function CareerHeroSection() {
  return (
    <PageHero
      defaultText="Welcome to"
      specialText="YourBank"
      extraText="Careers!"
      description="Join our team and embark on a rewarding journey in the banking
					industry. At YourBank, we are committed to fostering a culture of
					excellence and providing opportunities for professional growth. With a
					focus on innovation, customer service, and integrity, we strive to
					make a positive impact in the lives of our customers and communities.
					Join us today and be a part of our mission to shape the future of
					banking."
      imageSrc="/assets/careers/hero.png"
      alt="People at work"
    />
  );
}
