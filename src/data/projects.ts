import acaiImage from '../assets/portfolio/acai.jpg'
import beatsImage from '../assets/portfolio/beats.jpg'
import cutsImage from '../assets/portfolio/cortes-premium.jpg'
import pizzaImage from '../assets/portfolio/pizza.jpg'
import nearbyImage from '../assets/portfolio/proximo-de-tudo.jpg'
import versionImage from '../assets/portfolio/versao.jpg'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  alt: string
  layout: string
}

export const projects: Project[] = [
  { id: 'acai', title: 'O melhor açaí é aqui', category: 'Redes sociais', description: 'Peça promocional para divulgação de açaí e opções de delivery.', image: acaiImage, alt: 'Arte promocional de açaí em fundo amarelo e vermelho', layout: 'project--wide' },
  { id: 'beats', title: 'Bora de Beats', category: 'Campanhas', description: 'Composição publicitária para bebida Beats, com atmosfera noturna e tons frios.', image: beatsImage, alt: 'Anúncio de bebida Beats em lata azul sobre fundo noturno', layout: 'project--portrait' },
  { id: 'cortes-premium', title: 'Cortes Premium', category: 'Publicidade', description: 'Peça de divulgação para cortes de carne, com paleta vermelha e fotografia de produto.', image: cutsImage, alt: 'Arte vermelha para cortes premium de carne', layout: 'project--square' },
  { id: 'pizza', title: 'Quente como fogo', category: 'Publicidade', description: 'Peça promocional de pizza com composição quente e foco no produto.', image: pizzaImage, alt: 'Anúncio de pizza com luzes quentes e fundo escuro', layout: 'project--wide' },
  { id: 'proximo-de-tudo', title: 'Próximo de tudo', category: 'Publicidade', description: 'Peça de divulgação imobiliária com imagem arquitetônica e informações de localização.', image: nearbyImage, alt: 'Anúncio imobiliário com casa contemporânea e título Próximo de Tudo', layout: 'project--portrait' },
  { id: 'versao', title: 'Sua melhor versão', category: 'Campanhas', description: 'Peça promocional de beleza com retrato, tons suaves e tipografia editorial.', image: versionImage, alt: 'Campanha de beleza em tons rosados com retrato de mulher', layout: 'project--square' },
]
