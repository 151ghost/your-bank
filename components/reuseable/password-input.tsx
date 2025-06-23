"use client";

import { FormField } from "./base-form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { useState } from "react";

export function PasswordInput<T extends FieldValues>({
  form,
  name,
}: IPasswordProps<T>) {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <FormField showError showMessage form={form} name={name} className="z-50">
      {(field) => (
        <div className="relative w-full flex items-center group">
          <Input
            type={isHidden ? "password" : "text"}
            placeholder="Enter your passwoord."
            className="peer group-hover:border-green-60"
            {...field}
          />

          {isHidden ? (
            <EyeOff
              onClick={() => setIsHidden(false)}
              size={24}
              className="absolute right-6 md:top-5 top-4 text-grey-35 peer-focus-visible:text-green-60 group-hover:text-green-60 transition-colors duration-200 min-w-6"
            />
          ) : (
            <Eye
              onClick={() => setIsHidden(true)}
              size={24}
              className="absolute right-6 md:top-5 top-4 text-grey-35 peer-focus-visible:text-green-60 group-hover:text-green-60 transition-colors duration-200 min-w-6"
            />
          )}
        </div>
      )}
    </FormField>
  );
}

interface IPasswordProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
}
