
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import SectionWithStars from './SectionWithStars';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  return (
    <SectionWithStars className="w-full px-5 sm:px-6 md:px-12 xl:px-24 mt-[120px] mb-20">
   
     
          <motion.div
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[38px] sm:leading-[40px] md:leading-[45px] tracking-[-0.02em] text-[#E6E6F1]">
          <span className="text-bg">Crafted in the Moonlight</span>
        </h2>
        <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#FFDFAF] mx-auto px-2">
          <span className="text-bg">
            Three projects that showcase my dedication, creativity, and late-night focus — built to be both functional and beautiful.
          </span>
        </p>
      </motion.div>

   <motion.div
        className="group mt-[80px] w-full max-w-[1300px] mx-auto bg-[#10121B] border border-[#3F4454] shadow-[0px_4px_12px_rgba(255,255,255,0.06)] flex flex-col lg:flex-row overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-[#A18AFF] hover:shadow-[0px_0px_12px_rgba(161,138,255,0.6)]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
     
       <div
    className="w-full lg:w-[500px] xl:w-[525px] h-[240px] sm:h-[300px] lg:h-[478px] relative pt-4 px-4 lg:pt-[15px] lg:pl-[12px] flex justify-center items-center cursor-pointer"
    onClick={() => window.open('https://mentipad.com/', '_blank')} 
  >
    <Image
      src="/images/mentipad.png"
      alt="Screenshot of Mentipad website"
      width={525}
      height={478}
      className="object-contain max-h-full"
    />
  </div>

  
        <div className="flex-1 px-5 sm:px-8 md:px-10 py-6 flex flex-col">
          <div className="flex flex-col items-center">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#E6E6F1] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] text-center">
              Mentipad
            </h3>
            <p className="italic text-[#FFDFAF] mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-center max-w-lg">
              A modern mentor booking platform built with Next.js and MongoDB.
            </p>
          </div>

          <div className="mt-5 flex-1 overflow-auto">
            <p className="text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
             Mentipad enables users to find mentors, check availability, and book sessions through a simple, intuitive interface. The platform includes dynamic mentor profiles, time-slot based booking logic, and an admin dashboard for mentor management. Built with Next.js and Tailwind CSS, it focuses on performance, clarity, and real-world usability.
            </p>
            <ul className="mt-4 pl-5 space-y-2 lg:space-y-3 text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] list-none">
              <li>★ Searchable <strong>mentor discovery</strong> with filterable profiles</li>
<li>★ Smart <strong>time-slot based booking</strong> with date and duration logic</li>
<li>★ Secure <strong>Google authentication</strong> using NextAuth</li>
<li>★ A custom <strong>admin dashboard</strong> for managing mentors</li>
<li>★ Fully <strong>responsive, mobile-first UI</strong> built with Tailwind CSS</li>

            </ul>
          </div>

     <div className="flex justify-center mt-6">
  <Link href="https://mentipad.com/" target="_blank">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-2.5 bg-[#FFDFAF] text-[#03040A] font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.05em] hover:bg-[#FFEDC2] transition-colors duration-300 cursor-pointer"
    >
      Live Demo
    </motion.button>
  </Link>
</div>

        </div>
      </motion.div>


      <motion.div
        className="group mt-[80px] w-full max-w-[1300px] mx-auto bg-[#10121B] border border-[#3F4454] shadow-[0px_4px_12px_rgba(255,255,255,0.06)] flex flex-col lg:flex-row overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-[#A18AFF] hover:shadow-[0px_0px_12px_rgba(161,138,255,0.6)]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
     
        <div
          className="w-full lg:w-[500px] xl:w-[525px] h-[240px] sm:h-[300px] lg:h-[500px] relative pt-4 px-4 lg:pt-[5px] lg:pl-[12px] flex justify-center items-center cursor-pointer"
          onClick={() => window.open('https://readhaven.vercel.app/', '_blank')}
        >
          <Image
            src="/images/readhaven.png"
            alt="Screenshot of ReadHaven online bookstore"
            width={525}
            height={509}
            className="object-contain max-h-full"
          />
        </div>

  
        <div className="flex-1 px-5 sm:px-8 md:px-10 py-6 flex flex-col">
          <div className="flex flex-col items-center">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#E6E6F1] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] text-center">
              ReadHaven
            </h3>
            <p className="italic text-[#FFDFAF] mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-center max-w-lg">
              A full-featured online bookstore built with Next.js and MongoDB.
            </p>
          </div>

          <div className="mt-5 flex-1 overflow-auto">
            <p className="text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
              ReadHaven offers a smooth, intuitive shopping experience for book lovers. Users can browse by genre, manage wishlists and carts, and enjoy a responsive UI across all devices. Built with Next.js and React, it integrates:
            </p>
            <ul className="mt-4 pl-5 space-y-2 lg:space-y-3 text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] list-none">
              <li>★ Dynamic category pages via the <strong>Google Books API</strong></li>
              <li>★ A custom <strong>admin dashboard</strong> for managing books</li>
              <li>★ Persistent <strong>wishlist</strong> and cart functionality</li>
              <li>★ Secure <strong>Razorpay</strong> payment integration</li>
              <li>★ <strong>SEO-optimized pages</strong> for improved search visibility</li>
              <li>★ <strong>Login and Signup with OTP</strong> for authentication</li>
            </ul>
          </div>

      <div className="flex justify-center mt-6">
  <Link href="https://readhaven.vercel.app/" target="_blank">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-2.5 bg-[#FFDFAF] text-[#03040A] font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.05em] hover:bg-[#FFEDC2] transition-colors duration-300 cursor-pointer"
    >
      Live Demo
    </motion.button>
  </Link>
</div>

        </div>
      </motion.div>

 
<motion.div
  className="group mt-[80px] w-full max-w-[1300px] mx-auto bg-[#10121B] border border-[#3F4454] shadow-[0px_4px_12px_rgba(255,255,255,0.06)] flex flex-col lg:flex-row overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-[#A18AFF] hover:shadow-[0px_0px_12px_rgba(161,138,255,0.6)]"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>

  <div
    className="w-full lg:w-[500px] xl:w-[525px] h-[240px] sm:h-[300px] lg:h-[478px] relative pt-4 px-4 lg:pt-[15px] lg:pl-[12px] flex justify-center items-center cursor-pointer"
    onClick={() => window.open('https://dharaniliv.vercel.app', '_blank')} // Clicking the image opens the portfolio link
  >
    <Image
      src="/images/portfolio.png"
      alt="Screenshot of my personal portfolio website"
      width={525}
      height={478}
      className="object-contain max-h-full"
    />
  </div>


  <div className="flex-1 px-5 sm:px-8 md:px-10 py-6 flex flex-col">
    <div className="flex flex-col items-center">
      <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#E6E6F1] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] text-center">
        My Portfolio
      </h3>
      <p className="italic text-[#FFDFAF] mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-center">
        A minimal, responsive personal website built with Next.js and Tailwind CSS.
      </p>
    </div>

    <div className="mt-5 flex-1 overflow-auto">
      <p className="text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
        This portfolio showcases a curated collection of web development work, highlighting experience in both frontend and full-stack projects. It’s designed to reflect a clean visual identity and seamless user experience across devices. Built with Next.js and React, it features:
      </p>
      <ul className="mt-4 pl-5 space-y-2 lg:space-y-3 text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] list-none">
        <li>★ Theme-driven moonlight design built in <strong>Figma</strong></li>
        <li>★ Custom cards with <strong>image previews</strong> and hover effects</li>
        <li>★ <strong>Mobile-first layout</strong> using Tailwind CSS</li>
        <li>★ Interactive <strong>tech stack + contact orbit</strong> sections</li>
        <li>★ Deployed on <strong>Vercel</strong> for fast performance</li>
      </ul>
    </div>

<div className="flex justify-center mt-6">
  <Link href="https://dharaniliv.vercel.app/" target="_blank">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-2.5 bg-[#FFDFAF] text-[#03040A] font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.05em] hover:bg-[#FFEDC2] transition-colors duration-300 cursor-pointer"
    >
      Live Demo
    </motion.button>
  </Link>
</div>

  </div>
</motion.div>

    </SectionWithStars>
  );
}
