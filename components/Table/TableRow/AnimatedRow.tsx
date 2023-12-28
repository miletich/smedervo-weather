'use client';

import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { motion } from 'framer-motion';

import { tableStyles } from '../styles';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

const variants = {
  enter: { opacity: 0 },
  animate: { opacity: 1 },
};

type Props = ComponentProps<'tr'> & {
  styleX?: StyleXArray<any>;
  idx?: number;
};

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { styleX, children, idx, ...rest },
  ref
) {
  return (
    <motion.tr
      {...stylex.props([tableStyles.rowBackground, styleX])}
      {...(rest as any)}
      variants={variants}
      transition={{ duration: 0.13, ...(idx && { delay: idx * 0.013 }) }}
      ref={ref}
    >
      {children}
    </motion.tr>
  );
});
