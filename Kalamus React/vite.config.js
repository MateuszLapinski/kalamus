import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target: 'http://localhost:7002', // Zmiana na HTTP
                secure: false
            }
        },
        port: 5173, // Port lokalny
        https: false // Wyłączamy HTTPS
    }
})
