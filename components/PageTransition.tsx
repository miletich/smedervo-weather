'use client';

import { useState, type PropsWithChildren, useLayoutEffect } from 'react';
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
  const [hasClientJs, setHasClientJs] = useState(false);

  useLayoutEffect(() => {
    setHasClientJs(true);
  }, []);

  return hasClientJs ? (
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
  ) : (
    <div {...rest}>{children}</div>
  );
}
