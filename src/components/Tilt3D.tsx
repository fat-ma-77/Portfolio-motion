import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type MouseEvent, type ReactNode } from 'react'

type Tilt3DProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export default function Tilt3D({ children, className, maxTilt = 14 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt])

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
