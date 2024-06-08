'use client';

import { type ReactNode } from 'react';

import { motion } from 'framer-motion';

const Template = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{ y: 0, opacity: 1 }}
    initial={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.75, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default Template;
