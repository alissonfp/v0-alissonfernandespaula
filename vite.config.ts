import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { componentTagger } from "lovable-tagger";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'all',
      'c159f961-59e9-4135-86ef-d42a904db6f4.lovableproject.com', // Adicione o host aqui
      '5a71e751-82c7-4d34-b019-ab3b40def8bf.lovableproject.com',
      'dbc9130e-a233-4a8a-b717-06af0ab18a06.lovableproject.com',
    ],
  },
  plugins: [
    reactSWC(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
}));
