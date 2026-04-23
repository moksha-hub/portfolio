# Mokshagna Portfolio

Premium personal portfolio built with Vite + React + TypeScript and configured for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

This project is configured with `base: '/portfolio/'` in `vite.config.ts`.

To publish on GitHub Pages:
1. Push this project to the `portfolio` repository on GitHub.
2. In GitHub repo settings, enable **Pages** and set the source to **GitHub Actions**.
3. Push to `main` to trigger `.github/workflows/deploy.yml`.
