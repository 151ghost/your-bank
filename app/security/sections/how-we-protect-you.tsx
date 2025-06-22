import { SectionContainer } from "@/components/custom/section-container";
import {
  SectionDescription,
  SectionDetailsContainer,
  SectionTitle,
} from "@/components/custom/section-details";
import { fadeInUpVariants } from "@/components/animation";
import PingIconCtn from "@/components/custom/ping-icon-ctn";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SlideInElement } from "@/components/animation/slide-in-variant";

export default function HowWeProtectYouSection() {
  return (
    <SectionContainer>
      <SectionDetailsContainer variant={fadeInUpVariants}>
        <SectionTitle
          variant={fadeInUpVariants}
          defaultText="How We "
          specialText="Protect You"
        />
        <SectionDescription
          variant={fadeInUpVariants}
          text="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
        />
      </SectionDetailsContainer>

      <div className="relative w-full h-fit">
        <div className="hidden md:flex w-full h-3/4 rounded-t-[50px] rounded-b-[20px] absolute top-0 left-0 bg-[url(/assets/security/bg.png)] bg-cover overflow-hidden" />

        <div className="grid md:grid-cols-2 2xl:px-[100px] lg:px-20 md:px-5 2xl:gap-[30px] gap-5 2xl:mt-[82px] lg:mt-[62px] md:mt-10 pb-1">
          {protectCards.map((item, index) => (
            <ProtectCards key={item.heading} {...item} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function ProtectCards({
  icon,
  alt,
  heading,
  content,
  index,
}: IProtectCard & { index: number }) {
  return (
    <SlideInElement
      custom={index % 2 === 0}
      className="z-20 relative flex flex-col 2xl:gap-6 md:gap-5 gap-[18px] rounded-[20px] 2xl:p-[50px] md:p-10 p-6 outline-1 outline-grey-15 bg-[url(/assets/transaction-bg.png)]"
    >
      <div className="flex items-center 2xl:gap-5 gap-3.5">
        <div className="w-fit h-fit bg-black rounded-full">
          <PingIconCtn icon={icon} alt={alt} />
        </div>
        <p className="2xl:text-2xl md:text-xl text-lg leading-[150%]">
          {heading}
        </p>
      </div>
      <p className="2xl:text-lg md:text-base text-sm font-light text-grey-70">
        {content}
      </p>

      <BorderBeam size={200} />
    </SlideInElement>
  );
}

const protectCards: IProtectCard[] = [
  {
    icon: "/assets/security/p1.png",
    alt: "Secure Online Banking Icon",
    heading: "Secure Online Banking Platform",
    content:
      "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
  },
  {
    icon: "/assets/security/p2.png",
    alt: "Multi-Factor Authentication Icon",
    heading: "Multi-Factor Authentication",
    content:
      "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
  },
  {
    icon: "/assets/security/p3.png",
    alt: "Fraud Monitoring Icon",
    heading: "Fraud Monitoring",
    content:
      "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
  },
  {
    icon: "/assets/security/p4.png",
    alt: "Secure Mobile Banking Icon",
    heading: "Secure Mobile Banking",
    content:
      "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
  },
];

interface IProtectCard {
  icon: string;
  alt: string;
  heading: string;
  content: string;
}
