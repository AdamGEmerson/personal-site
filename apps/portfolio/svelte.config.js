import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				'/',
				'/blackjack',
				'/cv',
				'/projects',
				'/research',
				'/projects/auragraph',
				'/projects/sightstone',
				'/projects/universe'
			]
		}
	}
};

export default config;
