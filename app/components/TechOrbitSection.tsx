'use client'

import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import SectionWithStars from './SectionWithStars'

const innerStacks = [
  { name: 'MongoDB', icon: '/icons/mongo.svg' },
  { name: 'Next.js', icon: '/icons/next.svg' },
  { name: 'Node.js', icon: '/icons/node.svg' },
  { name: 'React.js', icon: '/icons/react.svg' },
]

const outerStacks = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'HTML5', icon: '/icons/Html.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Express.js', icon: '/icons/express1.svg' },
  { name: 'CSS3', icon: '/icons/css.svg' },
  { name: 'Figma', icon: '/icons/Figma.svg' },
]

export default function TechOrbitSection() {
    const [screenWidth, setScreenWidth] = useState<number | null>(null)
  
    useLayoutEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    
    if (screenWidth === null) return null

  const isMobile = screenWidth < 1200
  const isVerySmallScreen = screenWidth < 700

  
  const innerRadius = isVerySmallScreen ? 72 : isMobile ? 120 : 200
  const outerRadius = isVerySmallScreen ? 140 : isMobile ? 280 : 500
  const moonSize = isVerySmallScreen ? 90 : isMobile ? 120 : 187

  const cardWidthInner = isVerySmallScreen ? 57 : isMobile ? 90 : 120
  const cardHeightInner = isVerySmallScreen ? 24 : isMobile ? 38 : 47
  const iconSizeInner = isVerySmallScreen ? 10 : isMobile ? 20 : 24
  const textSizeInner = isVerySmallScreen ? 'text-[6px]' : isMobile ? 'text-xs' : 'text-sm'

  const cardWidthOuter = isVerySmallScreen ? 62 : isMobile ? 100 : 120
  const cardHeightOuter = isVerySmallScreen ? 26 : isMobile ? 38 : 47
  const iconSizeOuter = isVerySmallScreen ? 10 : isMobile ? 20 : 24
  const textSizeOuter = isVerySmallScreen ? 'text-[6px]' : isMobile ? 'text-xs' : 'text-sm'

  return (
    <SectionWithStars className="flex flex-col items-center justify-center bg-[#03040A] overflow-hidden pt-20 pb-10 sm:pb-24 md:pb-36 lg:pb-100 xl:pb-100 w-full">
  <h1 className="text-[#E6E6F1] text-2xl md:text-4xl font-bold text-center">
  <span className="text-bg">My Tech Stack in Orbit</span>
</h1>
<p className="mt-[22px] text-[#FFEDC2] text-sm md:text-lg text-center px-4">
  <span className="text-bg">
    From design to deployment, these are the technologies I orbit around every day.
  </span>
</p>

      <div className="relative w-full h-[600px] md:h-screen mt-1 sm:mt-15  xl:mt-60">
  
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <Image
            src="/images/real.png"
            alt="Moon"
            width={moonSize}
            height={moonSize}
            className="rounded-full object-cover"
          />
        </div>

      
        <div
          className="absolute left-1/2 top-1/2"
          style={{ animation: 'innerOrbit 30s linear infinite', transformOrigin: '0 0' }}
        >
          {innerStacks.map((stack, i) => {
            const angle = (i / innerStacks.length) * 2 * Math.PI - Math.PI / 2
            const x = Math.cos(angle) * innerRadius
            const y = Math.sin(angle) * innerRadius
            return (
              <div
                key={stack.name}
                className={`absolute bg-[#10121B] border-[2px] border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] flex items-center justify-center gap-2 px-2 ${textSizeInner}`}
                style={{
                  width: `${cardWidthInner}px`,
                  height: `${cardHeightInner}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animation: 'counterOrbit 30s linear infinite',
                }}
              >
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={iconSizeInner}
                  height={iconSizeInner}
                />
                <span className="text-[#E6E6F1]">{stack.name}</span>
              </div>
            )
          })}
        </div>

        <div
          className="absolute left-1/2 top-1/2"
          style={{ animation: 'outerOrbit 60s linear infinite', transformOrigin: '0 0' }}
        >
          {outerStacks.map((stack, i) => {
            const angle = (i / outerStacks.length) * 2 * Math.PI - Math.PI / 2
            const x = Math.cos(angle) * outerRadius
            const y = Math.sin(angle) * outerRadius
            return (
              <div
                key={stack.name}
                className={`absolute bg-[#10121B] border-[2px] border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] flex items-center justify-center gap-2 px-2 ${textSizeOuter}`}
                style={{
                  width: `${cardWidthOuter}px`,
                  height: `${cardHeightOuter}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animation: 'counterOrbit 60s linear infinite',
                }}
              >
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={iconSizeOuter}
                  height={iconSizeOuter}
                />
                <span className="text-[#E6E6F1]">{stack.name}</span>
              </div>
            )
          })}
        </div>
      </div>

    
      <style jsx>{`
        @keyframes innerOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes outerOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counterOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
</SectionWithStars>
  )
}