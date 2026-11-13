# SMData — site institucional

Site corporativo da SMData, em português e inglês. Apresenta a empresa, os serviços de tecnologia e os dois produtos próprios: **Arcadea** e **eFinanças | Caixinhas**.

- Repositório: **https://github.com/vsmachado/smdata**
- Produção: **https://smdata.net** e **https://www.smdata.net**
- Instruções para outra IA/agente: **[AGENTS.md](./AGENTS.md)**

## Stack

- [Astro 5](https://astro.build) com saída estática
- CSS próprio (sem framework)
- Inter + JetBrains Mono
- Imagens otimizadas com `astro:assets` (WebP)
- Pronto para Cloudflare Workers com assets estáticos ou Pages

## Rodar localmente

```powershell
npm install
npm run dev
```

Abre em `http://localhost:4322`.

Para validar o build de produção:

```powershell
npm run build
npm run preview
```

`npm run preview` também usa a porta **4322**.

## Build de produção

```powershell
$env:SITE_URL="https://smdata.net"
$env:PUBLIC_ARCADEA_URL="https://arcadea.app"
$env:PUBLIC_DOWNLOAD_URL="https://downloads.arcadea.app/win/stable/Arcadea-Setup.exe"
$env:PUBLIC_PORTABLE_URL="https://downloads.arcadea.app/win/stable/Arcadea-portable.zip"

npm run build
```

As variáveis têm fallback para os valores oficiais acima. Veja `.env.example`.

## Conteúdo

Todo o texto PT/EN, versões, status e links ficam em:

```text
src/data/content.ts
```

Pontos que podem precisar de ajuste antes de publicar:

- **E-mail:** `contato@smdata.net` é provisório. Troque em `site.email` se o endereço real for outro.
- **eFinanças:** status atual: Android em breve (fase de lançamento) e iPhone em testes. O CTA está como “Em breve”, sem link de loja. Quando houver Play Store ou lista de espera, atualize `efinancasPage`.
- **Arcadea:** Windows disponível; Companion Android em processo de disponibilização; Linux e Steam Deck em testes.
- **Serviços:** a seção detalha desenvolvimento e manutenção de sistemas de logística, orçamentários e fluxos de back-office, com experiência de profissionais com mais de 20 anos de mercado.
- **Versões do Arcadea:** desktop `1.3.1` e Companion alpha `0.9.0`.
- **Estúdio de jogos:** não foi incluído nesta versão, por decisão do responsável.
- **Política de privacidade e termos:** ainda não existem. Não foram inventados.
- **Formulário de contato:** não existe nesta versão; o contato é por e-mail.

## Estrutura

```text
public/
  brand/            marca SMData, favicons, marcas dos produtos
  og/               imagens Open Graph PT/EN
src/
  assets/           screenshots do Arcadea, assets do eFinanças e foto de serviços
  components/       header, footer, ícones, mockup, cards
  components/pages/ páginas reutilizadas por PT e EN
  data/content.ts   todo o conteúdo editorial
  layouts/          layout base, SEO, hreflang, JSON-LD
  pages/            rotas /pt/ e /en/
  styles/global.css identidade visual
scripts/gen-assets.mjs  gera OG images, favicons e marca do eFinanças
```

Rotas:

- `/pt/`, `/pt/produtos/`, `/pt/produtos/arcadea/`, `/pt/produtos/efinancas/`, `/pt/sobre/`, `/pt/contato/`
- `/en/`, `/en/products/`, `/en/products/arcadea/`, `/en/products/efinancas/`, `/en/about/`, `/en/contact/`
- `/` redireciona para `/pt/`

## Deploy

Publicado em **11/11/2026**:

- Produção: **https://smdata.net** e **https://www.smdata.net**
- Worker: `smdata-landing`
- Preview do Worker: `https://smdata-landing.vsmachado.workers.dev`

Verificar a sessão do Wrangler:

```powershell
npx --yes wrangler@3.114.0 whoami
```

Publicar como Worker com assets:

```powershell
npx --yes wrangler@3.114.0 deploy -c wrangler.toml
```

O `wrangler.toml` configura os assets em `dist`, a data de compatibilidade e o custom domain `smdata.net`.

Alternativa via flags:

```powershell
npx --yes wrangler@3.114.0 deploy `
  --name smdata-landing `
  --assets dist `
  --compatibility-date 2026-10-31 `
  --keep-vars
```

O domínio `smdata.net` e o `www.smdata.net` já estão na Cloudflare e associados ao Worker. O canonical continua apontando para `https://smdata.net`. Não alterar `arcadea-landing` nem `arcadea-admin`.

## Observações

- Não há métricas, prêmios, avaliações ou números de usuários inventados.
- A prévia do eFinanças na página do produto recria as telas **Início** e **Mês**, com valores ilustrativos e menores; não é um screenshot oficial.
- A interface do eFinanças foi refeita com base nas telas reais, incluindo os três saldos e as caixinhas do mês.
- A foto da seção de serviços é de **Tima Miroshnichenko / Pexels**, sob a Pexels License, com crédito visível na página.
- O logo novo (versão A) foi recortado da arte original em `src/assets/brand/smdata-logo-sheet.png`; a marca transparente está em `public/brand/smdata-mark.png` e o ícone em `public/brand/smdata-icon.png`.
- As imagens do Arcadea foram copiadas do repositório do produto; não há hotlink para `arcadea.app`.
- O projeto foi validado com Node 18.18.2 + Astro 5.7.14. `astro check` não está incluído porque o language server atual exige Node 20+.
- Os assets de Google Play (ícones e banners) ficam em `exports/play/`, fora do build e ignorados pelo Git. Os banners finais estão em JPEG 4096×2304 com menos de 1 MB.
