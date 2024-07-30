"use client";

import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 0.5, y: 0, transition: { duration: 0.5 } },
};

const navIndicator = ({ className }: { className: string }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className={`${className} px-3 center-col space-y-5 [&>div]:opacity-40 [&>.active]:!opacity-100 [&>.indicator]:cursor-pointer `}
    >
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#EC6696] rounded-full active"
        aria-label="Ball 1"
        variants={itemVariants}
      />
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#F39200] rounded-full"
        aria-label="Ball 1"
        variants={itemVariants}
      />
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#38AA43] rounded-full"
        aria-label="Ball 1"
        variants={itemVariants}
      />
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#36A9E1] rounded-full"
        aria-label="Ball 1"
        variants={itemVariants}
      />
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#46B8AA] rounded-full"
        aria-label="Ball 1"
        variants={itemVariants}
      />
      <motion.div
        className="indicator w-[11px] h-[11px] bg-[#4F5187] rounded-full"
        aria-label="Ball 1"
        variants={itemVariants}
      />
    </motion.div>
  );
};

export default navIndicator;
