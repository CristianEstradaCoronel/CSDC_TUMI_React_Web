import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// DEPURAR LOCALMENTE
export default defineConfig({
  base: '/', // 👈 esto hace que funcione localmente
  plugins: [react()],
})

// DEPURAR EN GITHUB
// export default defineConfig({
//   plugins: [react()],
//   base: "/CSDC_TUMI_React_Web/",
// });

