import { useEffect, useState } from 'react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'

export function IntroAnimation() {
  const [show, setShow] = useState(() => {
    try {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !sessionStorage.getItem('wesley-intro-seen')
    } catch {
      return false
    }
  })
  useEffect(() => {
    if (!show) return
    const timer = window.setTimeout(() => { sessionStorage.setItem('wesley-intro-seen', '1'); setShow(false) }, 3000)
    return () => window.clearTimeout(timer)
  }, [show])
  if (!show) return null
  const skip = () => { sessionStorage.setItem('wesley-intro-seen', '1'); setShow(false) }
  return <div className="intro" role="status" aria-label="Apresentação Wesley Silva">
    <div className="intro__line" /><BrandMark />
    <span className="intro__caption">THE CREATIVE DIMENSION</span>
    <Button variant="ghost" size="small" onClick={skip}>Pular introdução ↗</Button>
  </div>
}
