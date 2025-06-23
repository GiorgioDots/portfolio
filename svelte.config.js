import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: { base: '/portfolio' },
		adapter: adapter({
			fallback: 'index.html',
			precompress: true
		})
	}
};

export default config;
