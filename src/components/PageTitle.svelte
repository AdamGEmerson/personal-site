<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { page } from '$app/stores';
	export let url: string;
	console.log('URL', url);
	let crumbs: string[] = [];

	page.subscribe((value) => {
		console.log('PAGE', value);
		crumbs = value.url.pathname
			.split('/')
			.filter((crumb: string) => !['https:', 'localhost', 'http:', ''].includes(crumb));
	});

	const capitalized = (crumb: string) => crumb.charAt(0).toUpperCase() + crumb.slice(1);
</script>

{#key url}
	<div class="font-mono text-stone-900 flex flex-row gap-2">
		<div class="group p-2 hover:bg-stone-900 hover:cursor-pointer transition-colors">
			<a href={'/'} class="group-hover:text-stone-300">Home</a>
		</div>
		{#each crumbs as crumb, i}
			<div class="py-2">/</div>
			<div class="group p-2 hover:bg-stone-900 hover:cursor-pointer">
				<a href={'/' + crumbs.slice(0, i + 1).join('/')} class="group-hover:text-stone-300"
					>{capitalized(crumb)}
				</a>
			</div>
		{/each}
	</div>
	<div>
		<div in:fly={{ duration: 400, delay: 300, y: 20 }} out:fade={{ duration: 200 }}>
			<slot />
		</div>
	</div>
{/key}
