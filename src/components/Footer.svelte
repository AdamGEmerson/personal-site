<script>
	import SocialLinks from './SocialLinks.svelte';
	import { onMount } from 'svelte';
	let year = new Date().getFullYear();
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="text-sm px-2 w-full flex flex-col justify-right items-end z-10">
		<SocialLinks />
		<div class="text-xs md:text-sm font-mono text-right text-stone-600">
			© {year}, Adam G. Emerson
		</div>
	</div>
{/if}
