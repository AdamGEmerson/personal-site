<script>
	import SocialLinks from './SocialLinks.svelte';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let year = new Date().getFullYear();
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		transition:blur={{ delay: 1000, duration: 1000 }}
		class="text-sm p-8 md:px-16 relative flex flex-col gap-4 justify-right items-end z-10"
	>
		<SocialLinks />
		<div class="text-xs md:text-sm font-mono text-right text-stone-600">
			© {year}, Adam G. Emerson
		</div>
	</div>
{/if}
