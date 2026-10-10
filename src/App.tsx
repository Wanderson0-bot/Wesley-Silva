import { useEffect } from 'react'
import { Header } from './components/Header'
import { IntroAnimation } from './components/IntroAnimation'
import { About, Contact, CreativeProcess, Footer, Hero, PortfolioGallery, Services } from './components/Sections'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.scroll-reveal')
    if (!('IntersectionObserver' in window)) {
      sections.forEach(section => section.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <><IntroAnimation/><Header/><main><Hero/><About/><PortfolioGallery/><Services/><CreativeProcess/><Contact/></main><Footer/></>
}

export default App
