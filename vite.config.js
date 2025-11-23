import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SkipBack } from 'lucide-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
