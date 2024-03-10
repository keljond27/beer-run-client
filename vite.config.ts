import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    checker({ typescript: false }), react()
  ], /* server: {
    watch: {
      usePolling: true
    }
  } */
});