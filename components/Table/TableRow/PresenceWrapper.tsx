'use client';
import { AnimatePresence } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export default function PresenceWrapper({ children }: PropsWithChildren) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
