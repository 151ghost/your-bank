import dynamic from "next/dynamic";
import HeroSection from "../_sections/hero";

const MissionAndVision = dynamic(
  () => import("../about/sections/mission-and-vision")
);
const PressRelease = dynamic(() => import("../about/sections/press-release"));

export default function AboutPage() {
  return (
    <>
      <HeroSection />

      <MissionAndVision />

      <PressRelease />
    </>
  );
}
