"use client";

import { AuthContainer } from "@/components/custom/auth-ctn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/reuseable/base-form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PasswordInput } from "@/components/reuseable/password-input";
import { SlideInElement } from "@/components/animation/slide-in-variant";

const loginSchema = z.object({
  email: z.string().email({ message: "Provide a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
  }

  return (
    <AuthContainer
      heading="Login"
      description="Welcome back! Please log in to access your account."
      onSubmit={onSubmit}
      form={form}
    >
      <SlideInElement>
        <FormField
          showError
          showMessage
          form={form}
          name="email"
          className="z-50"
        >
          <Input
            placeholder="Enter your email"
            className="hover:border-green-60 relative"
          />
        </FormField>
      </SlideInElement>

      <SlideInElement custom={false}>
        <PasswordInput form={form} name="password" />
      </SlideInElement>
    </AuthContainer>
  );
}
