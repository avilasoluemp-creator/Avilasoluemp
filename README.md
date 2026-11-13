# Ávila Soluções Empresariais

Site institucional feito com Next.js, React, TypeScript e Tailwind CSS.

## Executar localmente

Requisitos: Node.js 22 e npm.

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para validar lint e tipos:

```bash
npm run lint
npm run typecheck
```

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Deploy na Vercel

O projeto usa a configuração padrão do Next.js, detectada automaticamente pela Vercel. Não é necessário configurar um diretório de saída personalizado nem adicionar `vercel.json`.

O arquivo `.vercelignore` exclui dependências, arquivos gerados e a pasta de ferramentas `qa-skills` do envio de arquivos para o deploy.

1. Envie esta pasta para um repositório Git ou selecione o repositório que a contém ao criar um novo projeto na Vercel.
2. Selecione **Next.js** como framework, caso a Vercel não o detecte automaticamente.
3. Defina **Root Directory** como a pasta que contém este `package.json`. Se o repositório for a pasta `Avila - Site`, selecione `avila-solucoes`; se o próprio repositório já for esta pasta, use `.`.
4. Mantenha o comando de instalação automático a partir de `package-lock.json` e o comando de build `npm run build`.
5. Em **Settings → Environment Variables**, configure `NEXT_PUBLIC_SITE_URL` como `https://avilasolucoes.com.br` para Production e Preview. Atualize o valor se o domínio público mudar.
6. Faça o deploy. Para usar o domínio próprio, adicione `avilasolucoes.com.br` em **Settings → Domains** e siga as instruções de DNS da Vercel.

`NEXT_PUBLIC_SITE_URL` é usado nos metadados canonical/Open Graph e no sitemap. O exemplo local está em `.env.example`; na Vercel, cadastre a variável nas configurações do projeto.

## Recursos de produção

- `sitemap.xml` e `robots.txt` gerados pelo Next.js.
- Cabeçalhos HTTP básicos de segurança definidos em `next.config.ts`.
- Logo, ícone do site e ativos servidos da pasta `public/` e do App Router.
