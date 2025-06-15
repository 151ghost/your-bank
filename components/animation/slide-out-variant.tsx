"use client";

import { motion } from "framer-motion";
import { slideOutVariants } from "../animation";

export function SlideOutElement({
  children,
  className,
  custom = true,
  asChild = false,
}: {
  children: React.ReactNode;
  className?: string;
  custom?: boolean;
  asChild?: boolean;
}) {
  return (
    <motion.div
      custom={custom}
      variants={slideOutVariants}
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
