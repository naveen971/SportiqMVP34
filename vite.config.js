import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@core': path.resolve(__dirname, 'src/core'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@routing': path.resolve(__dirname, 'src/routing'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@app': path.resolve(__dirname, 'src/app'),
        },
    },
});
