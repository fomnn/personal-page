import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import path from 'path'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/personal-page/',
  plugins: [
    react({babel: {
      plugins: [
        jotaiDebugLabel,
        jotaiReactRefresh
      ]
    }}), 
    Icons({ 
      compiler: 'jsx', 
      jsx: 'react',
      autoInstall: true,
    })
  ],
  resolve: {
    alias: {
     '@': path.resolve(__dirname, './src')
    }
 }
})
