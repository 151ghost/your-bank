import {
  SectionDetailsContainer,
  SectionTitle,
  SectionDescription,
} from "@/components/custom/section-details";
import { fadeInUpVariants, containerVariants } from "@/components/animation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { SectionContainer } from "@/components/custom/section-container";
import { CustomBadge as JobCardDescription } from "@/components/custom/badge";

export default function JobOpeningsSection() {
  return (
    <SectionContainer>
      <SectionDetailsContainer variant={containerVariants} className="gap-3.5">
        <SectionTitle variant={fadeInUpVariants} specialText="Job Openings" />
        <SectionDescription
          variant={fadeInUpVariants}
          text="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
        />
      </SectionDetailsContainer>

      <div className="grid lg:grid-cols-2 2xl:gap-[30px] gap-5">
        {jobs.map((item) => (
          <JobCards key={item.title} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}

function JobCards({
  title,
  department,
  location,
  about,
  requirements,
}: IJobProps) {
  return (
    <FadeInUpElement className="w-full flex flex-col bg-grey-11 border border-grey-15 2xl:p-[50px] md:p-10 p-6 rounded-2xl 2xl:gap-[50px] md:gap-10 gap-[30px]">
      <div className="flex flex-col 2xl:gap-3.5 gap-2.5">
        <p className="font-semibold 2xl:text-[30px] md:text-2xl leading-[150%] text-white">
          {title}
        </p>

        <div className="flex max-md:flex-col md:items-center 2xl:gap-2.5 gap-2">
          <JobCardDescription
            text={`Location: ${location}`}
            className="max-w-fit 2xl:py-2 2xl:px-4 md:py-2.5 md:px-3.5 py-1.5 px-2.5 border bg-grey-10 border-grey-15 rounded-full"
          />
          <JobCardDescription
            text={`Department: ${department}`}
            className="max-w-fit 2xl:py-2 2xl:px-4 md:py-2.5 md:px-3.5 py-1.5 px-2.5 border bg-grey-10 border-grey-15 rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col 2xl:gap-5 md:gap-4 gap-2">
        <JobCardHeader text="About This Job" />
        <JobCardDescription text={about} />
      </div>

      <div className="flex flex-col 2xl:gap-5 md:gap-4 gap-2">
        <JobCardHeader text="Requirements & Qualifications" />

        <div className="flex flex-col 2xl:gap-5 gap-3.5">
          {requirements.map((requirement) => (
            <div
              key={requirement}
              className="flex items-center 2xl:gap-2.5 gap-2"
            >
              <Image
                src="/assets/careers/j1.png"
                alt="Suit Case"
                width={24}
                height={24}
                className="2xl:size-6 size-5"
              />
              <JobCardDescription text={requirement} />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="green"
        className="2xl:py-4 2xl:px-[30px] md:py-3 md:px-5 md:text-sm 2xl:text-lg font-medium w-fit h-fit"
      >
        Apply Now
      </Button>
    </FadeInUpElement>
  );
}

function JobCardHeader({ text }: { text: string }) {
  return (
    <p className="text-white 2xl:text-2xl md:text-xl font-semibold leading-[150%]">
      {text}
    </p>
  );
}

const jobs: IJobProps[] = [
  {
    title: "Relationship Manager",
    location: "India",
    department: "Retail Banking",
    about:
      "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our retail customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
    requirements: [
      "Bachelor’s degree in Finance, Business, or a related field",
      "Minimum of 3 years of experience in sales or relationship management in the banking industry",
      "Proven track record of meeting and exceeding sales targets",
      "Excellent interpersonal and negotiation skills",
      "Strong knowledge of banking products and services",
    ],
  },
  {
    title: "Risk Analyst",
    location: "India",
    department: "Risk Management",
    about:
      "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks that could impact the bank. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for candidates with strong analytical and problem-solving skills and a solid understanding of risk management principles.",
    requirements: [
      "Bachelor’s degree in Finance, Economics, or a related field",
      "Minimum of 2 years of experience in risk management or a similar role",
      "Proficiency in risk analysis tools and techniques",
      "Strong analytical and problem-solving skills",
      "Knowledge of regulatory requirements and industry best practices",
    ],
  },
  {
    title: "IT Security Specialist",
    location: "India",
    department: "Information Technology",
    about:
      "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
    requirements: [
      "Bachelor’s degree in Computer Science, Information Security, or a related field",
      "Minimum of 5 years of experience in IT security or a similar role",
      "In-depth knowledge of network security protocols and technologies",
      "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
      "Professional certifications such as CISSP or CISM are preferred",
    ],
  },
];

interface IJobProps {
  title: string;
  location: string;
  department: string;
  about: string;
  requirements: string[];
}
