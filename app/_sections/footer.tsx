"use client";

import Image from "next/image";
import { navLinks } from "@/components/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/components/animation";
import { FadeInUpElement } from "@/components/animation/fade-in-up-variant";
import { ContainerVariantElement } from "@/components/animation/container-variant";
import { FadeInElement } from "@/components/animation/fade-in-variant";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-grey-11">
      <div className="w-full h-full py-[50px] md:py-[60px] xl:py-[100px] px-4 md:px-20 xl:px-[162px] flex flex-col items-center gap-[50px]">
        <FadeInUpElement className="w-fit h-fit">
          <Image src="/assets/Logo.png" alt="Logo" width={156} height={40} />
        </FadeInUpElement>

        <ContainerVariantElement className="flex items-center gap-3.5 xl:gap-[26px]">
          {navLinks.slice(0, 4).map((item) => (
            <FadeInUpElement key={item.name} asChild className="w-fit h-fit">
              <Button className="p-0 h-fit w-fit text-white max-md:text-sm xl:text-lg bg-transparent hover:bg-transparent hover:text-green-60">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            </FadeInUpElement>
          ))}
        </ContainerVariantElement>

        <ContainerVariantElement className="flex max-xl:justify-center max-xl:flex-wrap items-center gap-5 xl:gap-[26px]">
          {contact_info.map((item) => (
            <FadeInUpElement
              asChild
              key={item.info}
              className="flex items-center gap-1.5"
            >
              <item.icon size={24} color="var(--green-60)" />
              <span className="max-md:text-sm xl:text-lg text-white-90">
                {item.info}
              </span>
            </FadeInUpElement>
          ))}
        </ContainerVariantElement>

        <Separator />

        <div className="max-w-[1536px] w-full flex max-md:flex-col max-md:gap-5 items-center justify-between py-4 px-[30px] bg-grey-10 rounded-[12px] md:rounded-full border border-grey-15">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-sm xl:text-lg font-light text-grey-70"
          >
            YourBanK All Rights Reserved
          </motion.p>

          <ContainerVariantElement className="flex items-center gap-3">
            <ExtraLinkButtons href="/privacy-policy" name="Privacy Policy" />

            <FadeInElement asChild className="w-fit h-fit">
              <Separator
                orientation="vertical"
                className="bg-grey-70 h-[21px] xl:h-[25px]"
              />
            </FadeInElement>

            <ExtraLinkButtons
              href="/terms-of-service"
              name="Terms of Service"
            />
          </ContainerVariantElement>
        </div>
      </div>
    </footer>
  );
}

function ExtraLinkButtons({ href, name }: { href: string; name: string }) {
  return (
    <FadeInElement asChild className="w-fit h-fit">
      <Button className="p-0 h-fit w-fit text-sm xl:text-lg font-light text-grey-70 bg-transparent hover:bg-transparent hover:text-grey-75">
        <Link href={href}>{name}</Link>
      </Button>
    </FadeInElement>
  );
}

const contact_info: { icon: LucideIcon; info: string }[] = [
  { icon: Mail, info: "hello@skillbirdge.com" },
  { icon: Phone, info: "+91 91813 23 2309" },
  { icon: MapPin, info: "Somewhere in the world" },
];
