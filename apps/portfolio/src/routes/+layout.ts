import posthog from 'posthog-js';
import { browser } from '$app/environment';
// export const prerender = 'auto';
export const prerender = true;
export const trailingSlash = 'never';
export const load = async () => {
	if (browser) {
		posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
			api_host: 'https://app.posthog.com',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
