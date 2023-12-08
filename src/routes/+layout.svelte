<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import posthog from 'posthog-js';
	import { page } from '$app/stores';
	import Footer from '../components/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';

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

<div class="h-full min-h-screen bg-theme-black">
	<div class="fixed top-0 left-0 h-screen w-screen bg-hero-gradient" />
	<div class="text-white p-16 z-0">
		<NavBar />
		<div class="md:px-8 xl:px-32">
			<slot />
		</div>
	</div>
</div>
<Footer />
