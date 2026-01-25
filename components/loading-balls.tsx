'use client'

import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const LoadingBalls = () => {
  const size = useWindowSize()
  const [balls, setBalls] = useState(0)
  const [currentBalls, setCurrentBalls] = useState(0)

  useEffect(() => {
    const dynamicBalls = Math.floor((size.width / 50) * (size.height / 50))
    const reducedBalls = Math.floor(dynamicBalls * 0.4)
    setBalls(reducedBalls)
    setCurrentBalls(0)
  }, [size])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBalls(prev => {
        if (prev >= balls) return 0
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [balls])

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center rounded-2xl bg-black px-6 pt-10 transition-all duration-300 ease-in-out lg:h-[512px] lg:w-[1000px]">
      {Array.from({ length: currentBalls }, (_, index) => (
        <span
          key={index}
          className="m-2 h-12 w-12 animate-bounce rounded-full bg-white"
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  )
}
