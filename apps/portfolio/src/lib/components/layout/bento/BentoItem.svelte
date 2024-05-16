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
  import { onDestroy, onMount } from "svelte";
  import ProjectIcon from "../project/ProjectIcon.svelte";

	export let name: string;
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
			data-flip-id={name}
			class="bento-item border-stone-100 w-full h-full p-8 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around"
		>
			<div class="flex-1 flex flex-col gap-4 title-container" data-flip-id={name + 'container'}>
				<div class="flex flex-row gap-4 justify-start items-center align-middle">
          <ProjectIcon {isResearch} />
					<h2 class="font-serif title" data-flip-id={name + 'title'}>{name}</h2>
				</div>
				<p class="font-mono text-xs">{description}</p>
			</div>
		</a>
	{/if}
{/if}

<style>
  .title {
    font-size: 1.2rem;
  }
</style>
