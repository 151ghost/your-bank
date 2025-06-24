"use client";

import { ArrowLeftRight, BadgeCheck, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContainerVariantElement } from "@/components/animation/container-variant";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { SlideOutElement } from "@/components/animation/slide-out-variant";
import { FadeInElement } from "@/components/animation/fade-in-variant";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { LoopingAnimatedList } from "@/components/custom/looping-animated-list";
import { AnimatedListItem } from "@/components/magicui/animated-list";

export default function HeroSection() {
  return (
    <section className="container flex max-xl:flex-col items-center justify-center gap-[100px] gap-y-[120px] py-[100px]">
      <div className="md:w-[80%] xl:max-w-1/2 xl:w-[649px] flex flex-col max-xl:items-center gap-[50px]">
        <ContainerVariantElement className="flex flex-col max-xl:items-center 2xl:gap-5 md:gap-4 gap-3">
          <FadeInUpElement
            asChild
            className="w-fit flex items-center gap-1.5 2xl:py-2.5 2xl:px-5 py-2 px-4 bg-grey-15 rounded-full"
          >
            <BadgeCheck color="var(--green-60)" className="size-5 2xl:size-6" />
            <span className="text-xs md:text-sm 2xl:text-lg font-light">
              No LLC Required, No Credit Check.
            </span>
          </FadeInUpElement>

          <FadeInUpElement
            asChild
            className="flex flex-col max-md:items-center gap-3.5"
          >
            <p className="max-xl:text-center text-[28px] md:text-[38px] 2xl:text-5xl font-medium leading-[150%]">
              Welcome to YourBank Empowering Your{" "}
              <span className="text-green-60">Financial Journey</span>
            </p>

            <p className="max-md:text-sm max-xl:text-center 2xl:text-lg text-white-90 font-light">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers&apos; needs.
            </p>
          </FadeInUpElement>
        </ContainerVariantElement>

        <FadeInUpElement asChild className="w-fit">
          <Button
            variant="green"
            className="w-fit h-fit 2xl:py-[18px] 2xl:px-[30px] md:py-3.5 md:px-6 max-2xl:text-sm"
          >
            Open Account
          </Button>
        </FadeInUpElement>
      </div>

      <ContainerVariantElement className="relative w-[90%] md:w-[410px]">
        <SlideOutElement
          asChild
          className="absolute z-20 -left-3 md:-left-[50px] -top-[25px] md:-top-[40px]"
        >
          <DetailsBlock
            className="bg-[#22251B] rounded-[10px]"
            icon={
              <Plus
                size={21}
                color="var(--grey-10)"
                className="max-md:size-3"
              />
            }
            title="+ $5000,00"
            description="Monthly Income"
          />
        </SlideOutElement>

        <SlideOutElement
          asChild
          custom={false}
          className="absolute -top-[30px] -right-[15px] md:-right-[75px] md:-top-[45px] overflow-x-hidden"
        >
          <Image
            src="/assets/abstract.png"
            alt="Arrows"
            width={418}
            height={383}
            className="max-md:w-[220px] max-md:h-[201px]"
          />
        </SlideOutElement>

        <TransactionCard />

        <SupportedCurrencies />
      </ContainerVariantElement>
    </section>
  );
}

function DetailsBlock({
  type = "monthly-income",
  className = "",
  icon,
  title,
  description,
}: {
  type?: "monthly-income" | "transaction";
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        `flex items-center 2xl:gap-2 md:gap-[7px] gap-[5px] ${className}`,
        {
          "2xl:px-[17px] 2xl:py-3.5 md:py-[11px] md:px-[13px] py-2 px-2.5":
            type === "monthly-income",
        }
      )}
    >
      <div className="flex 2xl:p-2 md:p-[7px] p-[5px] rounded-full bg-green-60">
        {icon}
      </div>

      <div className="flex flex-col gap-[1px]">
        <p
          className={cn({
            "max-md:text-[10px] 2xl:text-[17px] md:text-sm":
              type === "monthly-income",
            "text-[9px] md:text-xs 2xl:text-base font-light":
              type === "transaction",
          })}
        >
          {title}
        </p>
        <p
          className={cn({
            "text-[8px] 2xl:text-sm md:text-[11px] text-white-90 font-light":
              type === "monthly-income",
            "text-[10px] md:text-sm 2xl:text-[17px]": type === "transaction",
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function TransactionCard() {
  return (
    <FadeInElement
      asChild
      className="relative w-full max-md:min-h-[368px] flex flex-col 2xl:gap-[26px] gap-5 2xl:p-[34px] md:p-[27px] p-5 rounded-[8px] bg-[url(/assets/transaction-bg.png)] bg-black"
    >
      <div className="relative flex flex-col gap-[17px] z-10">
        <p className="text-[10px] md:text-sm 2xl:text-[17px] font-medium">
          Your Transactions
        </p>

        <div className="h-fit flex flex-col items-center">
          <LoopingAnimatedList
            items={transactions}
            interval={3000}
            windowSize={3}
            renderItem={(item) => (
              <AnimatedListItem key={item.name}>
                <IndividualTransactions {...item} />
              </AnimatedListItem>
            )}
          />
        </div>
      </div>

      <div className="flex flex-col 2xl:gap-[25px] md:gap-5 gap-[15px] z-10">
        <p className="text-[10px] md:text-sm 2xl:text-[17px] font-medium">
          Money Exchange
        </p>

        <div className="w-full flex border border-grey-15 rounded-[10px]">
          {money_exchange.map((item, index) => (
            <MoneyExchangeCards
              key={item.currency_shorthand}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>

      <BorderBeam size={300} />
    </FadeInElement>
  );
}

function IndividualTransactions({ name, amount }: Transactions) {
  return (
    <div className="flex items-center justify-between bg-grey-11 py-3 px-3 md:py-[11px] md:px-[17px] 2xl:py-3.5 2xl:px-[21px] border border-grey-15 rounded-[10px]">
      <DetailsBlock
        type="transaction"
        icon={
          <ArrowLeftRight
            size={21}
            color="var(--grey-10)"
            className="size-3 md:size-4 2xl:size-[21px]"
          />
        }
        title="Transaction"
        description={name}
        className=""
      />

      <p className="max-md:text-xs 2xl:text-[21px] font-medium">-${amount}</p>
    </div>
  );
}

function MoneyExchangeCards({
  index,
  image_alt,
  image,
  currency_shorthand,
  currency,
  amount,
}: MoneyExchangeCardProps) {
  return (
    <div className="w-1/2 flex flex-col">
      <div
        className={cn(
          "flex flex-col gap-[5px] md:gap-[7px] 2xl:gap-[9px] md:p-3.5 p-2.5 2xl:p-[17px] border-b border-grey-11",
          {
            "border-r": index === 0,
          }
        )}
      >
        <div className="flex items-center gap-[5px] md:gap-[7px] 2xl:gap-[9px]">
          <Image
            src={image}
            alt={image_alt}
            width={35}
            height={35}
            className="rounded-full size-5 md:size-[27px] 2xl:size-[35px]"
          />

          <p className="text-[9px] md:text-sx 2xl:text-base">
            {currency_shorthand}
          </p>
        </div>

        <p className="text-[8px] md:text-[11px] 2xl:text-sm font-light text-white-90">
          {currency}
        </p>
      </div>
      <p
        className={cn(
          "text-[10px] md:text-sm 2xl:text-[17px] font-medium 2xl:py-[26px] 2xl:px-[17px] md:py-5 md:px-3.5 py-[15px] px-2.5 border-grey-11",
          {
            "border-r": index === 0,
          }
        )}
      >
        {amount}
      </p>
    </div>
  );
}

function SupportedCurrencies() {
  return (
    <FadeInUpElement className="w-fit flex items-center gap-3 py-[5px] md:py-[7px] pl-3 md:pl-4 2xl:p-2 2xl:pl-5 rounded-full bg-[#22251B] mt-5 ml-auto md:-mr-10">
      <p className="text-[9px] md:text-xs 2xl:text-base">
        Supported Currencies
      </p>

      <div className="w-fit flex bg-grey-10 gap-1 md:gap-2.5 2xl:gap-[7px] p-[5px] md:p-[7px] 2xl:p-[9px] rounded-full border border-grey-15">
        {supported_currencies.map((item) => (
          <Image
            key={item.alt}
            src={item.src}
            alt={item.alt}
            width={35}
            height={35}
            className="2xl:size-[35px] md:size-[27px] size-5"
          />
        ))}
      </div>
    </FadeInUpElement>
  );
}

const transactions: Transactions[] = [
  { name: "Joel Kenley", amount: 68 },
  { name: "Mark Smith", amount: 80 },
  { name: "Lenen Roy", amount: 75 },
  { name: "Jane Doe", amount: 90 },
  { name: "Daniel Scott", amount: 120 },
];

const money_exchange: MoneyExchangeProps[] = [
  {
    image: "/assets/ngn.png",
    image_alt: "Nigeria's Flag",
    currency_shorthand: "NGN",
    currency: "Nigerian Naira",
    amount: 500,
  },
  {
    image: "/assets/usa.png",
    image_alt: "USA's Flag",
    currency_shorthand: "USD",
    currency: "United States Dollar",
    amount: 500,
  },
];

const supported_currencies: SupportedCurrencies[] = [
  { src: "/assets/dollars.png", alt: "Dollar" },
  { src: "/assets/pounds.png", alt: "Pounds" },
  { src: "/assets/btc.png", alt: "Bitcoin" },
  { src: "/assets/rth.png", alt: "Ethereum" },
];

interface Transactions {
  name: string;
  amount: number;
}

interface MoneyExchangeProps {
  image_alt: string;
  image: string;
  currency_shorthand: string;
  currency: string;
  amount: number;
}

interface MoneyExchangeCardProps extends MoneyExchangeProps {
  index: number;
}

interface SupportedCurrencies {
  src: string;
  alt: string;
}
