import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
        },
        plugins: [
            react(),
            createHtmlPlugin(),
            tailwindcss(),
        ],
        resolve: {
            alias: {
                ':frontend2': fileURLToPath(new URL('./src', import.meta.url)),
                ':components': fileURLToPath(new URL('../../packages/components/src', import.meta.url)),
                ':env': fileURLToPath(new URL('../../packages/env/env.ts', import.meta.url)),
            },
        },
        server: {
            host: true,
            strictPort: true,
            port: 3032,
            allowedHosts: [
                'bun',
                'nginx',
            ],
        },
    };
});
