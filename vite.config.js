import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unfonts({
    google: {
      families: [
        {
          name: 'Be Vietnam Pro',
          styles: 'wght@400;500;600;700;900&display=swap'
        },
        {
          name: 'DM Sans',
          styles: 'wght@700&display=swap'
        }
      ]
    }
  }), react()],
})
