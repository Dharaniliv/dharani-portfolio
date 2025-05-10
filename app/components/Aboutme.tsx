
'use client'
import { motion, Variants } from 'framer-motion'
import SectionWithStars from './SectionWithStars'
import Image from 'next/image'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AboutMe() {
  return (
    <SectionWithStars className="min-h-screen flex items-center justify-center">

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
          <div className="p-[10px]">
        <div className="p-[5px] flex flex-col-reverse items-center text-center gap-8 lg:flex-row lg:items-start lg:text-left lg:gap-[137px]">
          <motion.div
            className="w-[260px] h-[300px] sm:w-[260px] sm:h-[300px] md:w-[300px] md:h-[350px] relative"
            variants={item}
          >
            <Image
              src="/images/myimage.png"
              alt="Dharani"
              fill
              className="rounded-md object-cover"
            />
          </motion.div>

          <motion.div className="max-w-xl" variants={item}>
            <motion.h2
              className="text-[#E6E6F1] text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold mb-6 text-bg"
              variants={item}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-[#B0B3C5] text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6 mb-6 text-bg"
              variants={item}
            >
              I’m Dharani — a full-stack web developer and designer dedicated to crafting exceptional web experiences.
            </motion.p>

            <motion.p
              className="text-[#B0B3C5] text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6 mb-6 text-bg"
              variants={item}
            >
              I approach every project with clarity and care, transforming your vision into high-performance,
              intuitive websites you’ll love. By focusing on clean design, seamless functionality, and exceptional
              user experience, I ensure every detail works together to create something impactful and unforgettable.
            </motion.p>

            <motion.p
              className="text-[#FFEDC2] italic text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6 text-bg"
              variants={item}
            >
              When I’m not coding, you’ll find me lost in books, strumming my guitar, or sipping coffee as the sun sets.
            </motion.p>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </SectionWithStars>
      
  )
}
