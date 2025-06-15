"use client";

import { motion } from "framer-motion";
import { slideInVariants } from "../animation";

export function SlideInElement({
  children,
  className,
  custom = true,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  custom?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      variants={slideInVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
