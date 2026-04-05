import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://ojharitesh.github.io',
    base: '/',
    integrations: [react()],
    vite: {
        assetsInclude: ['**/*.glb']
    }
});
