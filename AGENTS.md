# AGENTS.md — site institucional da SMData

Este repositório contém o site institucional PT/EN da SMData. Ele é um projeto Astro estático, publicado como Worker com assets na Cloudflare.

## Onde está hospedado

- **Repositório:** https://github.com/vsmachado/smdata
- **Produção:** https://smdata.net e https://www.smdata.net
- **Worker Cloudflare:** `smdata-landing`
- **Preview do Worker:** https://smdata-landing.vsmachado.workers.dev
- **Domínio:** `smdata.net` (zone já existente na Cloudflare; `www` também associado)
- **Modo de deploy:** Worker com assets estáticos (`dist`), **não** Pages
- **Configuração:** `wrangler.toml` na raiz do repositório

O canonical do site aponta sempre para `https://smdata.net`; o `www` serve o mesmo conteúdo.

## Stack e ambiente

- Astro 5.7.14, saída estática
- CSS próprio, sem framework
- Node 18.18.2 no ambiente original
- Wrangler **3.114.0** (o Wrangler 4 exige Node 22 e não funciona nesse ambiente)
- Fontes: Inter + JetBrains Mono (Google Fonts)
- Imagens via `astro:assets` (WebP)

## Rodar localmente

Na raiz do repositório:

```powershell
npm install
npm run dev
```

Abre em `http://localhost:4322`.

Build e preview de produção:

```powershell
npm run build
npm run preview
```

O preview também usa a porta **4322**.

## Estrutura

```text
public/
  brand/            marca SMData, favicons e marcas dos produtos
  og/               imagens Open Graph PT/EN
src/
  assets/           screenshots do Arcadea, assets do eFinanças, foto de serviços, logo
  components/       header, footer, ícones, mockup, cards e seções
  components/pages/ páginas reutilizadas por PT e EN
  data/content.ts   todo o conteúdo editorial PT/EN
  layouts/          layout base, SEO, hreflang e JSON-LD
  pages/            rotas /pt/ e /en/
  styles/global.css identidade visual
scripts/gen-assets.mjs  gera OG images, favicons e assets derivados
wrangler.toml       Worker, assets e custom domains
```

Rotas principais:

- `/pt/`, `/pt/produtos/`, `/pt/produtos/arcadea/`, `/pt/produtos/efinancas/`, `/pt/sobre/`, `/pt/contato/`
- `/en/`, `/en/products/`, `/en/products/arcadea/`, `/en/products/efinancas/`, `/en/about/`, `/en/contact/`
- `/` redireciona para `/pt/`

## Conteúdo

Todo o texto, links, versões e status ficam em `src/data/content.ts`. O site é PT/EN e as duas versões precisam ser atualizadas juntas.

Ao alterar conteúdo:

1. Edite `src/data/content.ts`.
2. Rode `npm run build`.
3. Valide localmente com `npm run preview`.
4. Só faça deploy quando solicitado.

Placeholders/pendências conhecidos:

- E-mail provisório: `contato@smdata.net`.
- eFinanças com CTA “Em breve”, sem link de loja.
- Política de privacidade e termos ainda não existem.
- Seção de estúdio de jogos não incluída por decisão do responsável.
- Não inventar métricas, usuários, prêmios ou recursos.

## Deploy

Verificar a sessão do Wrangler:

```powershell
npx --yes wrangler@3.114.0 whoami
```

Publicar:

```powershell
npm run build
npx --yes wrangler@3.114.0 deploy -c wrangler.toml
```

O `wrangler.toml` já configura:

```toml
name = "smdata-landing"
compatibility_date = "2026-10-31"
workers_dev = true
routes = [
  { pattern = "smdata.net", custom_domain = true },
  { pattern = "www.smdata.net", custom_domain = true }
]

[assets]
directory = "./dist"
```

Após o deploy, validar:

```powershell
curl.exe -I https://smdata.net/pt/
curl.exe -I https://smdata.net/brand/smdata-mark.png
```

Verificar também `https://www.smdata.net/pt/`, canonical, OG images e downloads do Arcadea.

## Rollback

Listar implantações:

```powershell
npx --yes wrangler@3.114.0 deployments --name smdata-landing
```

Voltar para uma versão anterior:

```powershell
npx --yes wrangler@3.114.0 rollback <version-id> --name smdata-landing --yes
```

## Guardrails

- Não alterar `arcadea-landing` nem `arcadea-admin`.
- Não publicar em `arcadea.app` ou `admin.arcadea.app`.
- Não commitar `.env`, tokens, `ADMIN_SERVICE_TOKEN`, credenciais R2 ou `DATABASE_URL`.
- Não colocar segredos no HTML, JS ou assets públicos.
- Não inventar informações sobre produtos, empresa, estúdio ou contatos.
- Não trocar o Worker por Pages sem pedido explícito.
- Não alterar o domínio ou os custom domains sem confirmação.
- Os assets de Google Play ficam em `exports/play/` (fora do build e ignorados pelo Git). Banners finais em JPEG 4096×2304, abaixo de 1 MB; ícones em PNG 512×512.

## Identidade e assets

- Logo novo (versão A): arte em `src/assets/brand/smdata-logo-sheet.png`.
- Marca transparente: `public/brand/smdata-mark.png`.
- Ícone/tile da marca: `public/brand/smdata-icon.png`.
- OG images: `public/og/pt/` e `public/og/en/`; geradas por `node scripts/gen-assets.mjs`.
- Screenshots do Arcadea: `src/assets/screenshots/` (PT e Companion).
- Foto da seção de serviços: Tima Miroshnichenko / Pexels, crédito visível na página.

## Validação feita

- Build estático com 14 páginas.
- Lighthouse 100 em acessibilidade, boas práticas e SEO (local e produção).
- Links locais verificados.
- `smdata.net` e `www.smdata.net` respondendo com HTTPS.
- Headers de segurança e cache aplicados via `public/_headers`.
- Root redireciona para `/pt/` via `public/_redirects`.
