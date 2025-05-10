'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import SectionWithStars from './components/SectionWithStars';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function NotFound() {
  return (
    <SectionWithStars className="min-h-screen flex items-center justify-center px-4 text-center">
      <motion.div
        className="flex flex-col items-center justify-center max-w-xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-[#E6E6F1] text-6xl font-bold mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-[#FFEDC2] text-2xl font-semibold mb-6"
        >
          Lost in space?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-[#B0B3C5] text-sm sm:text-base italic mb-8 max-w-md"
        >
          This page seems to have drifted out of orbit. But you can always navigate back to the portfolio galaxy!
        </motion.p>

        <Link href="/">
          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-7 py-3 bg-[#FFDFAF] text-[#03040A] font-medium text-base leading-6 tracking-[0.05em] hover:bg-[#FFEDC2] transition duration-300 cursor-pointer"
          >
            Back to Portfolio Galaxy
          </motion.button>
        </Link>
      </motion.div>
    </SectionWithStars>
  );
}
