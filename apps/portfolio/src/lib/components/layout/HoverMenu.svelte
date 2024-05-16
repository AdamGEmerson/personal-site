<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { circInOut } from 'svelte/easing';

	export let items: MenuItem[] = [];
	let menuHover = false;
	let hovered = '';

	let menuHighlight = tweened(0, {
		duration: 200,
		easing: circInOut
	});
	const handleLinkHover = (e: Event) => {
		if (e.target) {
			let element = e.target as HTMLAnchorElement;
			menuHighlight.set(element.offsetTop);
			hovered = element.getAttribute('data-name') as string;
			console.log(items);
			console.log(hovered);
		}
	};

	const handleMenuHover = () => {
		menuHover = true;
	};
	const handleMenuLeave = () => {
		menuHover = false;
		hovered = '';
	};
</script>

<div class="flex flex-row mx-4 gap-8 md:gap-4 relative">
	<div
		class="flex flex-col w-4/6 sm:w-1/2 gap-2"
		role="menu"
		tabindex="0"
		on:mouseenter={handleMenuHover}
		on:mouseleave={handleMenuLeave}
	>
		{#if menuHover}
			<div
				class="absolute h-8 bg-transparent md:bg-stone-900 z-0 w-1/2"
				style="top: {$menuHighlight}px;"
			/>
		{/if}
		{#key hovered}
			{#each items as item}
				<a
					href={item.path}
					data-name={item.name}
					on:mouseenter={(e) => handleLinkHover(e)}
					class="main-link bg-stone-900 text-stone-300 align-middle text-left text-xl font-mono transition-all p-2 md:p-0 md:px-2 md:text-stone-900 md:bg-transparent hover:cursor-pointer z-10 hover:text-stone-300"
				>
					{`[${hovered === item.name ? '✓' : ' '}] ${item.name}`}
				</a>
			{/each}
		{/key}
	</div>
</div>
