'use client';

import type { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  enter: { opacity: 0, y: '20vh' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '-20vh' },
};

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
