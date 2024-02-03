<script lang="ts">
	import { fly, fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { capitalized } from '../utils/helpers';
	export let url = '';
	console.log('URL', url);
	let crumbs: string[] = [];

	page.subscribe((value) => {
		console.log('PAGE', value);
		crumbs = value.url.pathname
			.split('/')
			.filter((crumb: string) => !['https:', 'localhost', 'http:', ''].includes(crumb));
	});

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div transition:slide={{ easing: cubicInOut, duration: 900, axis: 'x' }}>
		<div class="font-mono flex flex-row bg-stone-900 text-stone-300 h-12">
			<div class="group p-2 hover:bg-stone-900 hover:cursor-pointer hover:underline">
				<a href={'/'} class="group-hover:text-stone-300">Home</a>
			</div>
			{#key url}
				{#each crumbs as crumb, i}
					<div transition:fly={{ delay: 100 * i, y: 10 }} class="flex flex-row">
						<div class="py-2">/</div>
						<div class="group p-2 hover:bg-stone-900 hover:cursor-pointer">
							<a
								href={'/' + crumbs.slice(0, i + 1).join('/')}
								class="group-hover:text-stone-300 group-hover:underline transition-colors"
								>{capitalized(crumb)}
							</a>
						</div>
					</div>
				{/each}
			{/key}
		</div>
	</div>

	<div in:fly={{ duration: 400, delay: 300, y: 20 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/if}
