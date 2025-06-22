"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      const onLoad = () => setLoaded(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  const variants = {
    initial: { scale: 1, opacity: 1 },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full h-screen items-center justify-center flex gap-5 bg-green-60/10">
      <motion.div
        animate={loaded ? "exit" : "initial"}
        variants={variants}
        initial="initial"
        style={{ display: "inline-block" }}
        transition={{ type: "spring" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            duration: 2,
          }}
          style={{ display: "inline-block" }}
          initial={{ rotate: 0 }}
        >
          <Image
            src="/assets/shape-30@4x.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-[28px] md:text-[38px] 2xl:text-5xl font-medium leading-[150%]"
        animate={loaded ? "exit" : "initial"}
        variants={variants}
        initial="initial"
        transition={{ type: "spring" }}
      >
        YourBanK
      </motion.p>
    </div>
  );
}
