import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // para abrir proyecto en todos los dispositivos de red
  server: {
    host: '0.0.0.0'
  } 

})
