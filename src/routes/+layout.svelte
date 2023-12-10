<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import posthog from 'posthog-js';
	import { page } from '$app/stores';
	import Footer from '../components/Footer.svelte';

	let currentPath = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const unsubscribePage = page.subscribe(($page) => {
				if (currentPath && currentPath !== $page.url.pathname) {
					posthog.capture('$pageleave');
				}
				currentPath = $page.url.pathname;
				posthog.capture('$pageview');
			});

			const handleBeforeUnload = () => {
				posthog.capture('$pageleave');
			};
			window.addEventListener('beforeunload', handleBeforeUnload);

			return () => {
				unsubscribePage();
				window.removeEventListener('beforeunload', handleBeforeUnload);
			};
		}
	});
</script>

<div class="absolute h-screen w-screen flex flex-col">
	<div class="relative text-stone-900 md:p-16 h-5/6">
		<slot />
	</div>
	<div class="relative">
		<Footer />
	</div>
</div>
