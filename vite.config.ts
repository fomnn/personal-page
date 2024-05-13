import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Icons from 'unplugin-icons/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-page/',
  plugins: [
    react(), 
    Icons({ 
      compiler: 'jsx', 
      jsx: 'react',
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
     '@': path.resolve(__dirname, './src')
    }
 }
})
