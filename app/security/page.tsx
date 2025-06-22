import SecurityHeroSection from "./sections/hero";
import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import("../_sections/faq"));
const ProtectSection = dynamic(() => import("./sections/how-we-protect-you"));

export const metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHeroSection />

      <ProtectSection />

      <FAQSection />
    </>
  );
}
