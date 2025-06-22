import dynamic from "next/dynamic";
import AboutHero from "./sections/hero";

const MissionAndVision = dynamic(
  () => import("../about/sections/mission-and-vision")
);
const PressRelease = dynamic(() => import("../about/sections/press-release"));

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <MissionAndVision />

      <PressRelease />
    </>
  );
}
