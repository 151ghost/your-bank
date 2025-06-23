import type { FieldValues, UseFormReturn } from "react-hook-form";
import { ContainerVariantElement } from "../animation/container-variant";
import { FadeInUpElement } from "../animation/fade-in-up-variant";
import Image from "next/image";
import { FormBase } from "../reuseable/base-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import PingIconCtn from "./ping-icon-ctn";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function AuthContainer<T extends FieldValues>({
  heading,
  description,
  children,
  form,
  onSubmit,
}: IAuthProps<T>) {
  return (
    <div className="relative 2xl:max-w-[1326px] max-w-[90%] w-full flex flex-col mt-[53px] 2xl:gap-20 md:gap-[60px] gap-10 items-center 2xl:py-[100px] 2xl:px-[150px] md:py-20 md:px-[80px] p-[30px] rounded-[20px] bg-grey-11 border border-grey-15 overflow-hidden">
      <Image
        src="/assets/vector3.png"
        alt="Vector"
        width={248}
        height={248}
        className="absolute -top-2.5 right-0"
      />

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        //repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-[100%] skew-y-12"
        )}
      />

      <ContainerVariantElement className="flex flex-col items-center 2xl:gap-5 md:gap-4 gap-2.5 z-50">
        <FadeInUpElement className="w-fit h-fit">
          <p className="2xl:text-5xl md:text-[38px] text-[28px] font-medium text-green-60">
            {heading}
          </p>
        </FadeInUpElement>
        <FadeInUpElement className="w-fit h-fit">
          <p className="2xl:text-lg md:text-base text-sm font-light text-grey-75 max-md:text-center">
            {description}
          </p>
        </FadeInUpElement>
      </ContainerVariantElement>

      <FormBase
        form={form}
        onSubmit={onSubmit}
        className="max-w-[1026px] w-full flex flex-col items-center 2xl:gap-10 md:gap-[30px] gap-6"
      >
        <div className="w-full grid md:grid-cols-2 md:gap-[30px] gap-5">
          {children}
        </div>
        <FadeInUpElement>
          <Link
            href="/"
            className="2xl:text-lg md:text-base text-sm leaading-[150%] underline underline-offset-4 text-white hover:text-green-60 transition-colors duration-200"
          >
            Forgot Password?
          </Link>
        </FadeInUpElement>

        <div className="w-full flex flex-col gap-6 2xl:px-[254px] md:px-[130px] z-50">
          <FadeInUpElement>
            <Button
              type="submit"
              variant="green"
              className="min-w-full 2xl:py-[18px] 2xl:px-5 py-3.5 px-6 2xl:text-lg text-sm text-grey-15 2xl:h-[63px] h-[49px]"
            >
              Login
            </Button>
          </FadeInUpElement>

          <FadeInUpElement>
            <Button
              type="button"
              className="min-w-full 2xl:py-[18px] 2xl:px-5 py-3.5 px-6 2xl:text-lg text-sm text-white 2xl:h-[63px] !h-[49px] bg-grey-15 border border-grey-20 font-normal rounded-full"
            >
              Sign Up
            </Button>
          </FadeInUpElement>

          <div className="flex flex-col items-center 2xl:gap-[30px] gap-6">
            <FadeInUpElement className="w-full flex items-center justify-center gap-5 z-50">
              <Separator className="max-w-1/3" />
              <p className="text-grey-70 2xl:text-lg text-sm leading-[150%] min-w-fit">
                Or Continue with
              </p>
              <Separator className="max-w-1/3" />
            </FadeInUpElement>

            <ContainerVariantElement className="w-full flex items-center justify-center gap-6 z-50">
              {authOptions.map((item) => (
                <FadeInUpElement asChild key={item.alt}>
                  <Button
                    type="button"
                    className="w-fit h-fit p-0 bg-transparent hover:bg-transparent"
                  >
                    <PingIconCtn {...item} />
                  </Button>
                </FadeInUpElement>
              ))}
            </ContainerVariantElement>
          </div>
        </div>
      </FormBase>
    </div>
  );
}

const authOptions: { alt: string; icon: string }[] = [
  { alt: "Google", icon: "/assets/auth/a1.png" },
  { alt: "Facebook", icon: "/assets/auth/a2.png" },
  { alt: "Apple", icon: "/assets/auth/a3.png" },
];

interface IAuthProps<T extends FieldValues> {
  heading: string;
  description: string;
  children: React.ReactNode;
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
}
