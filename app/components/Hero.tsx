
'use client'
import { motion, Variants } from 'framer-motion'
import SectionWithStars from './SectionWithStars'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <SectionWithStars className="min-h-screen flex items-center justify-center" >
      <motion.div className="flex flex-col items-center justify-center text-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
            <motion.h1
              variants={item}
              className="text-[#E6E6F1] text-3xl sm:text-5xl md:text-5xl font-bold text-bg"
            >
              Hey, I’m Dharani
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-9 text-[#FFEDC2] text-lg sm:text-2xl md:text-4xl font-semibold px-2 sm:px-0 text-bg"
            >
              The developer who brings ideas to life while the world sleeps.
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-9 text-[#B0B3C5] text-xs sm:text-base md:text-lg italic px-2 sm:px-0 max-w-[95%] md:max-w-[55%] text-bg"
            >
              Fueled by coffee and passion, I’m a full-stack web developer and designer
              who turns ideas into intuitive, high-performance web experiences — day or night.
            </motion.p >

 <motion.button
  variants={item}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-12 px-7 py-3 bg-[#FFDFAF] text-[#03040A] font-medium text-base leading-6 tracking-[0.05em] hover:bg-[#FFEDC2] transition duration-300 cursor-pointer"
  onClick={() => {
    const email = 'dharaniprasath2511@gmail.com';
 const subject = encodeURIComponent('Hello Dharani!');
const body    = encodeURIComponent(
  `Hi Dharani,

I came across your portfolio and would love to chat about…`
);


   
    const ua = navigator.userAgent;
if (ua.includes('Chrome') && !ua.includes('Edge')) {
  const gmailUrl = 
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${email}` +
    `&su=${subject}` +
    `&body=${body}`;
  window.open(gmailUrl, '_blank');
  return;
}

window.location.href = 
  `mailto:${email}` +
  `?subject=${subject}` +
  `&body=${body}`;


    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://instagram.com/yourprofile', '_blank');
      }
    }, 800);
  }}
>
  Contact me
</motion.button>


          </motion.div>
          
              </SectionWithStars>
  )
}
