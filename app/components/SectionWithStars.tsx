'use client'

import Stars from './Stars'
import React from 'react'

interface Props {
  children: React.ReactNode

  className?: string
}

export default function SectionWithStars({
  children,
  className = '',
}: Props) {
  return (
    <div className={`relative w-full ${className}`}>

      <div className="absolute inset-0 pointer-events-none">
        <Stars />
      </div>

  
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
