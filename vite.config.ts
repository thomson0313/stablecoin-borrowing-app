import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { execSync } from 'node:child_process'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

const buildSha = execSync('git rev-parse --short HEAD').toString().trimEnd()
const buildTime = new Date().toLocaleString('en-gb')

// https://vite.dev/config/
export default defineConfig({
  define: {
    __BUILD_SHA__: JSON.stringify(buildSha),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    sentryVitePlugin({
      silent: true,
      telemetry: false,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
