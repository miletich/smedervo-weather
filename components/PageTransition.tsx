'use client';

import type { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  enter: { opacity: 0, y: '5vh' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '-5vh' },
};

export default function PageTransition({
  children,
  ...rest
}: PropsWithChildren) {
  return (
    <AnimatePresence>
      <motion.div
        {...rest}
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
