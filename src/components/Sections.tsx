import { profile, processSteps, services } from '../data/content'
import { projects, type Project } from '../data/projects'
import { BrandMark } from './BrandMark'
import { Button, ButtonLink } from './Button'
import wesleyPhoto from '../assets/portfolio/wesley.png'
import { useEffect, useState } from 'react'

export function Hero() {
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  return <section className="hero" id="inicio">
    <div className="hero__visual" aria-hidden="true">{!reducedMotion && <video className="hero__video" src={profile.heroVideo} autoPlay muted loop playsInline preload="metadata" tabIndex={-1}/>}</div>
    <div className="hero__content relative z-10"><p className="eyebrow"><span className="status-dot"/> DESIGNER GRÁFICO INDEPENDENTE <span className="eyebrow__divider">/</span> DISPONÍVEL PARA PROJETOS</p>
      <h1>Ideias que<br/>se tornam<br/><em>impacto visual.</em></h1>
      <p className="hero__description">Há mais de 7 anos transformando ideias em designs que comunicam, conectam marcas e conquistam atenção.</p>
      <p className="hero__specialty">Design para redes sociais <span>·</span> Comunicação visual</p>
      <div className="hero__actions"><ButtonLink variant="primary" size="large" href="#projetos">Explorar projetos <span aria-hidden="true">↗</span></ButtonLink><ButtonLink variant="secondary" size="large" href="#sobre">Conheça meu trabalho <span aria-hidden="true">↗</span></ButtonLink></div>
    </div>
    <div className="hero__bottom"><span>PORTFÓLIO · 2026</span><span>BRASIL · DESIGN & IDEIAS</span></div>
  </section>
}

export function About() {
  return <section className="section about scroll-reveal" id="sobre"><div className="section-kicker"><span>SOBRE</span><span>O PROFISSIONAL POR TRÁS DO DESIGN</span></div>
    <div className="about__layout"><figure className="about__portrait"><img src={wesleyPhoto} alt="Wesley Silva, designer gráfico" loading="lazy"/><figcaption>Wesley Silva · Designer Gráfico</figcaption></figure>
      <div className="about__copy"><span className="about__asterisk">✳</span><p>Sou Wesley Silva, designer gráfico com mais de 7 anos de experiência. Minha especialidade é desenvolver designs para redes sociais, criando composições visuais que unem criatividade, intenção e comunicação.</p><p>Acredito que cada elemento visual tem um papel: chamar atenção, transmitir uma mensagem e fortalecer a maneira como uma marca se apresenta ao mundo.</p><ButtonLink variant="ghost" size="small" className="text-link" href="#projetos">Ver projetos <span aria-hidden="true">↗</span></ButtonLink></div>
    </div>
    <div className="stats"><div><b>+7 <small>ANOS</small></b><span>DE EXPERIÊNCIA EM DESIGN</span></div><div><b>FOCO</b><span>DESIGN PARA REDES SOCIAIS</span></div><div><b>OBJETIVO</b><span>COMUNICAÇÃO COM PERSONALIDADE</span></div></div>
  </section>
}

function ProjectImage({ project }: { project: Project }) { return <img className="project-image" src={project.image} alt={project.alt} loading="lazy" /> }

export function PortfolioGallery() {
  const [filter, setFilter] = useState('Todos')
  const categories = ['Todos', ...new Set(projects.map(project => project.category))]
  const visibleProjects = filter === 'Todos' ? projects : projects.filter(project => project.category === filter)
  const [selected, setSelected] = useState<string | null>(null)
  const activeProject = projects.find(project => project.id === selected)
  useEffect(() => {
    if (!activeProject) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeProject])
  return <section className="section portfolio scroll-reveal" id="projetos"><div className="section-kicker"><span>TRABALHOS</span><span>PEÇAS DE DESIGN GRÁFICO</span></div>
    <div className="portfolio__heading"><div><h2>Projetos que<br/><em>falam por si.</em></h2><p>Uma seleção de trabalhos, ideias e soluções visuais desenvolvidas para comunicar com intenção.</p></div><span className="portfolio__count">SELEÇÃO<br/>VISUAL</span></div>
    <div className="filters ui-button-group" role="group" aria-label="Filtrar projetos">{categories.map(category => <Button key={category} variant={filter === category ? 'secondary' : 'ghost'} size="small" className={filter === category ? 'filter filter--active' : 'filter'} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div>
    <div className="project-grid">{visibleProjects.map(project => <button key={project.id} className={`project ${project.layout}`} onClick={() => setSelected(project.id)} aria-label={`Abrir ${project.title}, ${project.category}`}>
      <div className="project__image"><ProjectImage project={project}/><span className="project__open">↗</span></div>
      <div className="project__meta"><div><span>{project.category}</span><h3>{project.title}</h3></div><span className="project__arrow">↗</span></div>
    </button>)}</div>
    {activeProject && <div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }}><Button variant="outline" size="small" className="project-modal__close" onClick={() => setSelected(null)} aria-label="Fechar apresentação">Fechar ×</Button><div className="project-modal__visual"><ProjectImage project={activeProject}/></div><div className="project-modal__text"><span>{activeProject.category}</span><h2>{activeProject.title}</h2><p>{activeProject.description}</p><Button variant="ghost" size="small" className="text-link" onClick={() => setSelected(null)}>← Voltar aos projetos</Button></div></div>}
  </section>
}

export function Services() { return <section className="section services scroll-reveal" id="servicos"><div className="section-kicker"><span>SERVIÇOS</span><span>DESIGN PENSADO PARA COMUNICAR</span></div><div className="services__intro"><h2>Design pensado<br/><em>para comunicar.</em></h2><p>Da primeira ideia à peça final, uma parceria criativa para dar forma à mensagem da sua marca.</p></div><div className="service-list">{services.map(([name, description]) => <article className="service-row" key={name}><h3>{name}</h3><p>{description}</p><span className="service-row__arrow">↗</span></article>)}</div></section> }

export function CreativeProcess() { return <section className="process scroll-reveal"><div className="section-kicker"><span>PROCESSO</span><span>UMA IDEIA ENCONTRA SUA FORMA</span></div><div className="process__heading"><h2>Da ideia<br/><em>à forma.</em></h2><span>UM PERCURSO CRIATIVO</span></div><div className="process__steps">{processSteps.map(([title, desc]) => <article key={title}><h3>{title}</h3><p>{desc}</p><i aria-hidden="true"/></article>)}</div><div className="process__signature">IDEIA <span>→</span> FORMA <span>→</span> IMPACTO</div></section> }

export function Contact() {
  const links = [[profile.instagram, 'Instagram'], [profile.behance, 'Behance'], [profile.email ? `mailto:${profile.email}` : '', 'E-mail']].filter(([url]) => url)
  const whatsapp = profile.whatsapp ? `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}` : ''
  return <section className="contact scroll-reveal" id="contato"><div className="section-kicker"><span>CONTATO</span><span>BOAS IDEIAS COMEÇAM COM UMA CONVERSA</span></div><div className="contact__main"><span className="contact__orb" aria-hidden="true"/><p>SEU PRÓXIMO PROJETO COMEÇA AQUI</p><h2>Sua próxima ideia<br/>pode <em>começar aqui.</em></h2><p className="contact__desc">Tem um projeto em mente? Vamos conversar sobre como transformar sua ideia em comunicação visual.</p>{whatsapp ? <ButtonLink variant="primary" size="large" href={whatsapp} target="_blank" rel="noreferrer">Vamos tirar sua ideia do papel <span aria-hidden="true">↗</span></ButtonLink> : profile.email ? <ButtonLink variant="primary" size="large" href={`mailto:${profile.email}?subject=Vamos%20conversar%20sobre%20um%20projeto`}>Vamos tirar sua ideia do papel <span aria-hidden="true">↗</span></ButtonLink> : <p className="contact__desc">Os canais profissionais serão adicionados em breve.</p>}</div><div className="contact__links">{links.length ? links.map(([url, label]) => <a key={label} href={url} target={url?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{label} ↗</a>) : <span>REDES E CANAIS PROFISSIONAIS EM BREVE</span>}<a href="#inicio">VOLTAR AO TOPO ↑</a></div></section>
}

export function Footer() { return <footer className="footer"><BrandMark/><span>© 2026 WESLEY SILVA</span><a href="#inicio">VOLTAR AO INÍCIO ↑</a></footer> }

export function IntroLabel() { return <span className="sr-only">{profile.name}, {profile.role}</span> }
