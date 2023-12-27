'use client';

import type { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  enter: { opacity: 0, y: '-40vh' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '40vh' },
};

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
