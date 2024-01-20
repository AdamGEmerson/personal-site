<script lang="ts">
	import { blur, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import BentoItem from './BentoItem.svelte';
	import { IconGeometry, IconMicroscope } from '@tabler/icons-svelte';
	import TimerBar from './TimerBar.svelte';
	import { beforeUpdate, onDestroy, onMount } from 'svelte';

	export let featured: any[];
	export let timer: any;
	export let mid: any[];
	export let preloadedImages: { [key: string]: { src: string; alt: string } };
	let intervalId: any;
	let imageShown = true;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="col-span-7 row-span-3" in:blur={{ duration: 1000, delay: 1600 }}>
		{#each featured as item}
			<a
				in:blur|global={{ easing: quintOut, duration: 1000 }}
				data-flip-id={item._id}
				href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
				class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"
			>
				<div class={'flex'}>
					<div class="flex-1">
						<h2 class="font-serif text-xl">{item.title}</h2>
						<p class="font-mono text-sm h-16">{item.oneLiner}</p>
					</div>
					{#if item.isResearch}
						<IconMicroscope class="flex-0 h-8 w-8 text-stone-600 self-end" />
					{:else}
						<IconGeometry class="flex-0 h-8 w-8 text-stone-600 self-end" />
					{/if}
				</div>
				<TimerBar {timer} />
				{#key item}
					<div class="h-full">
						<div
							in:slide={{ delay: 200, duration: 1000, easing: quintOut }}
							class="w-full h-full bg-teal-900"
						>
							<img
								src={preloadedImages[item._id].src}
								alt={preloadedImages[item._id].alt}
								class="h-full w-full border-2 border-stone-300 object-cover"
							/>
						</div>
					</div>
				{/key}
			</a>
		{/each}
	</div>

	{#each mid as item, i}
		{#if i !== mid.length - 1}
			<div class={`col-span-4 row-span-1`} in:blur|global={{ duration: 1000, delay: 1600 }}>
				<BentoItem
					name={item.title}
					description={item.oneLiner}
					bentoId={item._id}
					isResearch={item.isResearch}
					href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
				/>
			</div>
		{:else}
			<div class="col-span-7 row-span-1" in:blur|global={{ duration: 1000, delay: 1600 }}>
				<BentoItem
					name={item.title}
					description={item.oneLiner}
					bentoId={item._id}
					isResearch={item.isResearch}
					href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
				/>
			</div>
		{/if}
	{/each}
	<div class="col-span-3 row-span-2" in:blur={{ duration: 1000, delay: 1600 }}>
		<a
			class="w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around relative overflow-hidden group"
			href={'/projects'}
		>
			<div class="flex-1 z-10">
				<h2 class="font-serif text-xl z-10">More Projects</h2>
				<p class="font-mono text-sm z-10">All the other stuff that doesn't fit on this page</p>
			</div>
			<IconGeometry
				class="z-0 absolute block -bottom-10 left-50 h-96 w-96 text-stone-800 group-hover:text-stone-700"
			/>
		</a>
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="github" variant="icon" />
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="linkedin" variant="icon" />
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="dribbble" variant="icon" />
	</div>
{/if}
