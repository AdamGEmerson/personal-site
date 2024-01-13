<script lang="ts">
	import { IconBrandDribbble, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';

	export let name: string;
	export let description = 'Spicy description about this hot project';
	export let variant: BentoVariant = 'default';
</script>

{#if variant === 'default'}
	<div
		class="w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 transition-all duration-300 hover:scale-[101%] hover:cursor-pointer"
	>
		<h2 class="font-serif text-xl">{name}</h2>
		<p class="font-mono text-sm">{description}</p>
	</div>
{/if}
{#if variant === 'icon'}
	<div
		class="w-full h-full p-4 bg-stone-900 text-stone-300 flex items-center justify-around hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer"
	>
		{#if name === 'dribbble'}
			<IconBrandDribbble size={32} />
		{:else if name === 'github'}
			<IconBrandGithub size={32} />
		{:else if name === 'linkedin'}
			<IconBrandLinkedin size={32} />
		{/if}
	</div>
{/if}
