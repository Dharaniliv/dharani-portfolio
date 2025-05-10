'use client'

import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import SectionWithStars from './SectionWithStars'

type LinkItem = { name: string; icon: string; url: string }

const innerLinks: LinkItem[] = [
  { name: 'GitHub',   icon: '/icons/github.svg',   url: 'https://github.com/yourprofile' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://linkedin.com/in/yourprofile' },

  { name: 'Email',    icon: '/icons/email.svg',    url: 'mailto:dharaniprasath2511@gmail.com' },
]

const outerLinks: LinkItem[] = [
  { name: 'Twitter / X', icon: '/icons/twitter.svg',   url: 'https://twitter.com/yourprofile' },
  { name: 'Instagram',   icon: '/icons/instagram.svg', url: 'https://instagram.com/yourprofile' },
]

export default function ReachMeOrbitSection() {
  const [w, setW] = useState<number | null>(null)

  useLayoutEffect(() => {
    const onResize = () => setW(window.innerWidth)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (w === null) return null

  const isMobile = w < 1200
  const isTiny  = w < 700

 
  const innerR   = isTiny ? 72  : isMobile ? 120 : 220
  const outerR   = isTiny ? 140 : isMobile ? 240 : 470
  const earthSz  = isTiny ?  90 : isMobile ? 140 : 300
  const iconSize = isTiny ? 10 : isMobile ? 20 : 24


  const iW = isTiny ?  60 : isMobile ?  90 : 120
  const iH = isTiny ?  22 : isMobile ?  38 :  47
  const oW = isTiny ?  60 : isMobile ?  90 : 140
  const oH = isTiny ?  22 : isMobile ?  38 :  47
  const txtInner = isTiny ? 'text-[6px]' : isMobile ? 'text-xs' : 'text-sm'
  const txtOuter = txtInner

  
  const handleEmailClick = () => {
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
  }

  return (
    <SectionWithStars className="flex flex-col items-center justify-center bg-[#03040A] overflow-hidden py-20 w-full mt-50 pb-10 sm:pb-24 md:pb-36 lg:pb-100 xl:pb-100">
      <h2 className="text-[#E6E6F1] text-2xl md:text-4xl font-bold text-center">
        Reach Me from Earth
      </h2>
      <p className="mt-4 text-[#FFEDC2] text-sm md:text-lg text-center px-4">
        No matter where you are, your signal will always find me.
      </p>

      <div className="relative w-full h-[450px] md:h-[800px] mt-1 sm:mt-35 xl:mt-50">
 
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow z-10">
          <Image
            src="/images/earth.png"
            alt="Earth"
            width={earthSz}
            height={earthSz}
            className="rounded-full"
          />
        </div>

    
        <div
          className="absolute left-1/2 top-1/2"
          style={{ animation: 'innerOrbit 30s linear infinite', transformOrigin: '0 0' }}
        >
          {innerLinks.map((link, i) => {
            const angle = (i / innerLinks.length) * 2 * Math.PI - Math.PI / 2
            const x = Math.cos(angle) * innerR
            const y = Math.sin(angle) * innerR

            const commonProps = {
              className: `absolute flex items-center justify-center gap-2 bg-[#10121B] border border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${txtInner} cursor-pointer`,
              style: {
                width:  `${iW}px`,
                height: `${iH}px`,
                left:   `calc(50% + ${x}px)`,
                top:    `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%) rotate(-360deg)',
                animation:  'counterOrbit 30s linear infinite',
              },
            }

            return link.name === 'Email' ? (
              <button
                key="email"
                {...commonProps}
                onClick={handleEmailClick}
              >
                <Image src={link.icon} alt="Email" width={iconSize} height={iconSize} />
                <span className="text-[#E6E6F1]">Email</span>
              </button>
            ) : (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" {...commonProps}>
                <Image src={link.icon} alt={link.name} width={iconSize} height={iconSize} />
                <span className="text-[#E6E6F1]">{link.name}</span>
              </a>
            )
          })}
        </div>

   
        <div
          className="absolute left-1/2 top-1/2"
          style={{ animation: 'outerOrbit 60s linear infinite', transformOrigin: '0 0' }}
        >
          {outerLinks.map((link, i) => {
            const angle = (i / outerLinks.length) * 2 * Math.PI - Math.PI / 2
            const x = Math.cos(angle) * outerR
            const y = Math.sin(angle) * outerR
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute flex items-center justify-center gap-2 bg-[#10121B] border border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${txtOuter} cursor-pointer`}
                style={{
                  width:  `${oW}px`,
                  height: `${oH}px`,
                  left:   `calc(50% + ${x}px)`,
                  top:    `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%) rotate(-360deg)',
                  animation:  'counterOrbit 60s linear infinite',
                }}
              >
                <Image src={link.icon} alt={link.name} width={iconSize} height={iconSize} />
                <span className="text-[#E6E6F1]">{link.name}</span>
              </a>
            )
          })}
        </div>
      </div>

   
      <style jsx>{`
        @keyframes innerOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes outerOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counterOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
    </SectionWithStars>
  )
}
