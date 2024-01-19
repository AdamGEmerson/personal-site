<script lang="ts">
	import {
		IconBrandDribbble,
		IconBrandGithub,
		IconBrandLinkedin,
		IconGeometry,
		IconMicroscope
	} from '@tabler/icons-svelte';
	import { slide, blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let name: string;
	export let bentoId = 1000;
	export let description = 'Spicy description about this hot project';
	export let isResearch = false;
	export let href = '';
	export let variant: BentoVariant = 'default';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	{#if variant === 'featured'}
		<a
			{href}
			data-flip-id={bentoId}
			class="bento-item w-full h-full min-h-16 p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"
		>
			<h2 class="font-serif text-2xl">{name}</h2>
			<p class="font-mono text-xs h-16">{description}</p>
			<div class="w-full bg-stone-300 h-1" />
			<div class="h-full">
				{#key bentoId}
					<div class="w-full p-4 bg-teal-900" />
				{/key}
			</div>
		</a>
	{:else if variant === 'icon'}
		<a
			class="w-full h-full p-4 bg-stone-900 text-stone-300 flex items-center justify-around hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer"
			href={name === 'dribbble'
				? 'https://dribbble.com/adamgemerson'
				: name === 'github'
				? 'https://github.com/adamgemerson'
				: name === 'linkedin'
				? 'https://www.linkedin.com/in/adamgemerson/'
				: ''}
		>
			{#if name === 'dribbble'}
				<IconBrandDribbble size={32} />
			{:else if name === 'github'}
				<IconBrandGithub size={32} />
			{:else if name === 'linkedin'}
				<IconBrandLinkedin size={32} />
			{/if}
		</a>
	{:else}
		<a
			{href}
			data-flip-id={bentoId}
			class="bento-item border-stone-100 w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around"
		>
			<div class="flex-1">
				<h2 class="font-serif text-xl md:text-2xl">{name}</h2>
				<p class="font-mono md:text-xs text-[8px] sm:text-xs">{description}</p>
			</div>
			{#if isResearch}
				<IconMicroscope class="flex-0 h-8 w-8 text-stone-600 self-end" />
			{:else}
				<IconGeometry class="flex-0 h-8 w-8 text-stone-600 self-end" />
			{/if}
		</a>
	{/if}
{/if}
