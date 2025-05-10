'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const navVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Navbar() {
  return (
    <motion.nav
      className="w-full relative py-4 md:py-6 h-[100px]"
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h3
        className="text-[#E6E6F1] text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-[0em] uppercase absolute top-4 left-0 md:top-5 md:left-0 pl-4 md:pl-4"
        variants={navVariants}
      >
        DHARANi
      </motion.h3>

      <motion.div
        className="absolute top-0 right-0 p-2 sm:p-3 md:p-4 w-[70px] h-[64px] sm:w-[90px] sm:h-[81px] md:w-[120px] md:h-[108px]"
        variants={navVariants}
      >
        <Image
          src="/images/moon1.png"
          alt="Moon Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.nav>
  )
}
