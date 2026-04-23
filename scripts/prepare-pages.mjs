import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = 'dist'
const indexFile = join(distDir, 'index.html')

if (!existsSync(indexFile)) {
  throw new Error('dist/index.html was not found. Run this script after vite build.')
}

copyFileSync(indexFile, join(distDir, '404.html'))

for (const route of ['skills']) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexFile, join(routeDir, 'index.html'))
}
