<script>
	import { onMount } from 'svelte';
	let year = new Date().getFullYear();
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="px-2 w-full flex flex-col">
		<!--		<SocialLinks />-->
		<div class="text-xs font-mono text-stone-600">
			© {year}, Adam G. Emerson
		</div>
	</div>
{/if}
