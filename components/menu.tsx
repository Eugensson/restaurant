"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { fadeIn } from "@/lib/variants";

const menu = [
  {
    id: "1",
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$24.00",
  },
  {
    id: "2",
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$19.00",
  },
  {
    id: "3",
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$26.00",
  },
  {
    id: "4",
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$12.00",
  },
];

export const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3 capitalize">Favorite menu</h2>
          <Link
            href="/"
            className="text-green flex items-center justify-center xl:justify-end mb-16"
          >
            View all
            <IoIosArrowRoundForward size={30} />
          </Link>
        </motion.div>
        <motion.ul
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-colsd-1 gap-7 md:grid-cols-2 xl:grid-cols-4 md:gap-5"
        >
          {menu.map(({ id, img, title, price }) => (
            <li
              key={id}
              className=" bg-white shadow-primary mx-auto xl:mx-0 group"
            >
              <Card className="rounded-none border-none w-full max-w-[290px]">
                <CardContent className="relative p-0 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={270}
                    height={270}
                    className="aspect-square object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>
                    <Link href="/">
                      <h3 className="font-poppins text-black mb-[14px]">
                        {title}
                      </h3>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xl font-poppins font-semibold text-orange">
                    {price}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
