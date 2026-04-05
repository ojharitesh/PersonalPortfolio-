import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://ojharitesh.github.io',
    base: '/PersonalPortfolio-',
    integrations: [react()],
    vite: {
        assetsInclude: ['**/*.glb']
    }
});
