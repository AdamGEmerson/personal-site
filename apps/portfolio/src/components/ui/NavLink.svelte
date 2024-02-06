<script lang="ts">
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let route: string;
	export let name: string;
	export let index: number;
	export let icon: any;
	export let activeLink: number;

	let toolTip: boolean;

	const dispatch = createEventDispatcher();

	function handleClick(e: Event) {
		e.preventDefault();
		activeLink = index;
		dispatch('closeNav');
		goto(route);
	}

	function handleOnMouseEnter() {
		toolTip = true;
	}

	function handleOnMouseExit() {
		toolTip = false;
	}
</script>

<div
	data-sveltekit-preload-data
	class="relative w-5/6 hover:cursor-pointer {activeLink === index ? 'disabled' : ''}"
	on:mouseenter={handleOnMouseEnter}
	on:mouseleave={handleOnMouseExit}
	aria-label="{name} Page"
>
	<a
		class="flex flex-col items-center justify-around font-normal justify-items-center m-auto p-4 {activeLink ===
		index
			? 'rounded-full bg-opacity-10'
			: 'rounded-3xl bg-opacity-0 hover:bg-opacity-20'} bg-gray-500"
		on:click={handleClick}
		on:keypress={handleClick}
		href={route}
	>
		<svelte:component this={icon} />
	</a>
	{#if toolTip}
		<div
			transition:fly={{ duration: 200, x: -40 }}
			class="absolute left-full mx-4 p-4 top-1/4 h-1/2 bg-gray-800 bg-opacity-90 rounded-xl border border-gray-800 flex justify-items-center items-center backdrop-blur-lg"
		>
			<div class="relative h-auto w-full">
				{name}
			</div>
		</div>
	{/if}
</div>
