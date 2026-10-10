import { useState } from 'react'
import { profile } from '../data/content'
import { BrandMark } from './BrandMark'
import { Button, ButtonLink } from './Button'

const links = [['Início', 'inicio'], ['Sobre', 'sobre'], ['Projetos', 'projetos'], ['Serviços', 'servicos'], ['Contato', 'contato']]
export function Header() {
  const [open, setOpen] = useState(false)
  const whatsapp = `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`
  return <header className="site-header">
    <a href="#inicio" className="header-brand" aria-label="Wesley Silva, início"><BrandMark compact /></a>
    <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav__mobile-cta" href={whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Falar no WhatsApp ↗</a>
    </nav>
    <ButtonLink className="header-cta" variant="outline" size="small" href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp <span>↗</span></ButtonLink>
    <Button className="menu-toggle" variant="ghost" size="icon" iconOnly aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></Button>
  </header>
}
