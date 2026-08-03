# BH Sport Fit — Landing Page

Landing page premium para a academia BH Sport Fit, desenvolvida com fidelidade
ao design fornecido.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger + `@gsap/react` (`useGSAP`)
- lucide-react

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (gera /dist)
npm run preview   # serve o build de produção localmente
```

## Estrutura

```
src/
  components/
    Navbar/        Navbar.tsx + Navbar.css       Cabeçalho fixo com CTA e menu mobile
    Hero/           Hero.tsx + Hero.css            Seção principal com imagem de fundo e animação de entrada
    Benefits/       Benefits.tsx + Benefits.css    Logo, "mais de 7 anos" e 4 selos de diferenciais
    About/          About.tsx + About.css          "Muito mais que uma academia" + 6 cards de destaque
    Objectives/      Objectives.tsx + Objectives.css "Seus objetivos, nosso compromisso" + grid 2x2 de imagens
    Testimonials/   Testimonials.tsx + Testimonials.css  Depoimentos (ver observação abaixo)
    Plans/          Plans.tsx + Plans.css          Planos e preços, com selo "Mais Escolhido"
    Footer/         Footer.tsx + Footer.css        Rodapé (ver observação abaixo)
    Button/         Button.tsx + Button.css        Botão reutilizável (variantes solid / outline)
    SectionTitle/   SectionTitle.tsx + SectionTitle.css  Eyebrow + heading reutilizado nas seções
  pages/Home.tsx    Composição final da página
  hooks/            (reservado para hooks compartilhados futuros)
  utils/            cn.ts (helper de classes) e constants.ts (link do WhatsApp)
  assets/           Imagens fornecidas no ZIP
  styles/index.css  Tokens de tema (@theme) do Tailwind v4: cores, fontes, glow
```

### Padrão de CSS por componente

Cada componente tem seu próprio arquivo `.css` (ex.: `Hero.css`), importado
diretamente no `.tsx` correspondente (`import './Hero.css'`). As classes
seguem uma nomenclatura estilo BEM prefixada pelo nome do componente, por
exemplo:

```css
/* Hero.css */
.hero { ... }              /* bloco raiz da seção */
.hero__title { ... }       /* elemento */
.hero__accent { ... }      /* elemento */
```

Isso significa que, para ajustar o visual de qualquer seção (cores,
espaçamentos, tamanhos de fonte, breakpoints), basta abrir o `.css` daquele
componente — não é mais necessário caçar classes utilitárias dentro do JSX.
Os tokens globais (`var(--color-primary)`, `var(--color-background)`, etc.)
continuam centralizados em `src/styles/index.css` e são reutilizados em todos
os arquivos `.css` dos componentes, então trocar uma cor da marca em um único
lugar já reflete no site inteiro.

Algumas classes utilitárias do Tailwind (`container-xl`, definida em
`styles/index.css`) continuam sendo usadas para o container de largura
máxima, e classes "sem estilo" (como `hero-bg`, `plans-title`, `feature-card`)
permanecem apenas como *hooks* de seletor para as animações GSAP — a
aparência delas é sempre definida pelo `.css` do componente.

## Observações sobre o design de referência

1. **Depoimentos**: no mockup enviado, essa seção continha apenas o eyebrow
   "DEPOIMENTOS" seguido do heading "CONHEÇA NOSSOS PLANOS" (duplicado da
   seção de Planos), com um grande espaço vazio sem conteúdo. Interpretei
   como uma seção ainda não finalizada no design e criei um heading e cards
   de depoimento consistentes com a identidade visual, para não entregar uma
   seção quebrada/vazia em produção. Ajuste o texto/heading livremente em
   `Testimonials.tsx`.
2. **Footer**: não havia rodapé desenhado na imagem (a arte termina em preto
   liso). Criei um rodapé enxuto seguindo a mesma linguagem visual (logo,
   navegação, contato, horário de funcionamento), pronto para receber dados
   reais de contato.
3. **Número de WhatsApp**: está como placeholder em `src/utils/constants.ts`
   (`WHATSAPP_NUMBER`). Substitua pelo número real da academia.
4. **Tipografia**: como o brief não especificava fontes, usei a dupla
   Bricolage Grotesque (display, títulos) + Manrope (texto), carregadas via
   Google Fonts em `index.html`, por transmitirem o caráter "premium/tech"
   pedido no briefing sem recorrer a uma fonte genérica.

## Cores extraídas do design

| Token                  | Valor                    |
|-------------------------|---------------------------|
| `--color-background`    | `#0A0A0A`                 |
| `--color-primary`       | `#AEE000`                 |
| `--color-primary-soft`  | `#D4F24D`                 |
| `--color-text`          | `#F5F6F2`                 |
| `--color-muted`         | `#9A9D95`                 |
| `--color-border`        | `rgba(255,255,255,.08)`   |
