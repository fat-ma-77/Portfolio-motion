import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({
    transition: inactiveTransition,
    willChange: 'transform',
  })

  const handleMove = useCallback(
    (event: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = Math.abs(event.clientX - centerX)
      const distY = Math.abs(event.clientY - centerY)
      const within =
        distX < rect.width / 2 + padding && distY < rect.height / 2 + padding

      if (!within) {
        setStyle({
          transform: 'translate3d(0px, 0px, 0)',
          transition: inactiveTransition,
          willChange: 'transform',
        })
        return
      }

      const offsetX = (event.clientX - centerX) / strength
      const offsetY = (event.clientY - centerY) / strength
      setStyle({
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        transition: activeTransition,
        willChange: 'transform',
      })
    },
    [padding, strength, activeTransition, inactiveTransition],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [handleMove])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
