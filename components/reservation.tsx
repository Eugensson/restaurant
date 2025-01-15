"use client";

import { motion } from "framer-motion";

import { ReservationForm } from "@/components/reservation-form";

import { fadeIn } from "@/lib/variants";

export const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:items-end xl:justify-end"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:p-14 xl:p-16"
      >
        <h2 className="text-white mb-9 capitalize">Book a Table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};
