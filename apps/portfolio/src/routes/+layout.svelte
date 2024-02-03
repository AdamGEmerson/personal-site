<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import posthog from 'posthog-js';
	import { page } from '$app/stores';
	import ToolBar from '../components/ToolBar.svelte';

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

<div class="absolute w-screen flex flex-col p-8 md:p-24 h-screen overflow-x-clip">
	<div class="text-stone-900 flex-1 flex flex-col gap-16">
		<ToolBar />
		<slot />
	</div>
</div>
<!--<Footer />-->
