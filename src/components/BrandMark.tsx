import symbolLogo from '../assets/portfolio/logo-symbol.png'
import fullLogo from '../assets/portfolio/logo-horizontal.png'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="Wesley Silva — Designer Gráfico">
    <img className={compact ? 'brand__image brand__image--symbol' : 'brand__image brand__image--full'} src={compact ? symbolLogo : fullLogo} alt="" />
  </span>
}
