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
	{#if variant === 'icon'}
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
				<div class="flex flex-row gap-2 justify-start items-center align-middle">
					{#if isResearch}
						<IconMicroscope class="flex-0 h-4 w-4 sm:h-8 sm:w-8 text-stone-600" />
					{:else}
						<IconGeometry class="flex-0 h-4 w-4 sm:h-8 sm:w-8 text-stone-600" />
					{/if}
					<h2 class="font-serif text-lg sm:text-xl">{name}</h2>
				</div>
				<p class="font-mono md:text-xs text-[8px] sm:text-xs">{description}</p>
			</div>
		</a>
	{/if}
{/if}
