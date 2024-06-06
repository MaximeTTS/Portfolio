"use client";

import React, { type FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface IPageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<IPageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      className="min-w-screen min-h-screen"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
