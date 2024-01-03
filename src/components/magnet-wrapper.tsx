import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import "../index.css";

export default function MagnetWrapper({children}:PropsWithChildren): JSX.Element {

    return (
        <motion.div
        transition={{type: "spring", stiffness: 350, damping: 45, mass: 0.1}}
        drag
        dragConstraints={{ top: -100, right: 100, bottom: 100, left: -100 }}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 80, bounceDamping: 80 }}
        className="w-48"
        >
            {children}
        </motion.div>
    )
}