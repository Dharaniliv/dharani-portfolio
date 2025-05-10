'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Star {
  id: number
  left: number
  top: number
  star: 'star1.svg' | 'star2.svg'
  size: { width: number; height: number }
  rotation: number
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const screenWidth = window.innerWidth
    const starCount = screenWidth < 768 ? 20 : 50

    const newStars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      const randomStar = Math.random() < 0.5 ? 'star1.svg' : 'star2.svg'
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        star: randomStar,
        size:
          randomStar === 'star1.svg'
            ? { width: 15, height: 15 }
            : { width: 10, height: 10 },
        rotation: Math.random() * 360,
      })
    }
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          <Image
            src={`/images/${star.star}`}
            alt=""
            width={star.size.width}
            height={star.size.height}
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>
  )
}
