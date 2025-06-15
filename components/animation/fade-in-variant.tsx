"use client";

import { motion } from "framer-motion";
import { fadeInVariants } from "../animation";

export function FadeInElement({
  children,
  className,
  asChild = false,
}: {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInVariants}
      className={className}
      {...(!asChild && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
      })}
    >
      {children}
    </motion.div>
  );
}
