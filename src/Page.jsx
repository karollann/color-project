import { motion, useIsPresent } from "framer-motion";
import React from "react";

export const Page = ({ children }) => {
  const isPresent = useIsPresent();

  return (
    isPresent && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  );
};
