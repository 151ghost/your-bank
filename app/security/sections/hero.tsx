import PageHero from "@/components/custom/page-hero";

export default function SecurityHeroSection() {
  return (
    <PageHero
      defaultText="Your Security is Our "
      specialText="Top Priority"
      description="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
      imageSrc="/assets/security/hero.png"
      alt="Security"
    />
  );
}
