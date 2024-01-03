import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

import "../index.css";

export default function MagnetWrapper({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 350, damping: 45, mass: 0.1 }}
      drag
      dragConstraints={{ top: -50, right: 50, bottom: 50, left: -50 }}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 80, bounceDamping: 80 }}
      className="pointer"
    >
      {children}
    </motion.div>
  );
}
