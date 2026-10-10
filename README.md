# Wesley Silva — portfólio

Portfólio editorial em React, TypeScript, Vite e Tailwind CSS. As variáveis de design estão em `src/index.css`; os componentes ficam em `src/components`; o conteúdo profissional e os serviços são configurados em `src/data/content.ts`; os trabalhos ficam em `src/data/projects.ts`.

## Conteúdo a substituir/configurar

- As seis peças enviadas estão em `src/assets/portfolio` e cadastradas em `src/data/projects.ts`. Títulos e descrições podem ser ajustados; clientes e anos não foram adicionados porque não foram informados.
- Os arquivos de logo enviados também estão em `src/assets/portfolio`: `logo-symbol.png` é usado no cabeçalho e `logo-horizontal.png` na apresentação e no rodapé.
- `hero-movie.mp4` em `src/assets/videos` é o único elemento visual à direita na hero e toca sem áudio, em loop contínuo. Sua escala/opacidade acompanha a rolagem; as seções também surgem ao entrar na tela. A hero não renderiza o vídeo quando a preferência por movimento reduzido está ativa.
- Preencha os canais confirmados (`email`, `whatsapp`, `instagram`, `behance`) em `src/data/content.ts`. Campos vazios ficam ocultos.
- Confirme os serviços listados em `src/data/content.ts` antes da publicação.

## Desenvolvimento

```sh
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.
