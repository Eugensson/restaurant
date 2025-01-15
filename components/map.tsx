"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

const DynamicMap = dynamic(() => import("@/components/dynamic-map"), {
  ssr: false,
});

export const Map = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
      id="contact"
    >
      <DynamicMap />
    </motion.section>
  );
};
