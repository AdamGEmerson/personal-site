<script lang="ts">
	import BentoItem from '../../../components/BentoItem.svelte';
	import { slide } from 'svelte/transition';
	import { gsap } from 'gsap';
	import Flip from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	function flip() {
		const state = Flip.getState('.bento-item');

		requestAnimationFrame(() => {
			Flip.from(state, {
				target: '.bento-item',
				ease: 'power4',
				duration: 1
			});
		});
	}

	let featured: BentoItemProps[] = [];
	let mid: BentoItemProps[] = [];

	let bentoItems: BentoItemProps[] = [
		{
			id: 1,
			name: 'Crucible',
			description:
				'A lovely app about software testing with no-code and some exoteric other stuff.',
			featured: true
		},
		{
			id: 2,
			name: 'Sightstone',
			description: 'An unofficial Amazon Alexa app for League of Legends.',
			featured: false
		},
		{
			id: 3,
			name: 'Auragraph',
			description:
				'A lovely app about software testing with no-code and some esoteric other stuff.',
			featured: false
		},
		{
			id: 4,
			name: 'BridgeIt',
			description: 'Bridging gaps between maker communities with NLP and AI.',
			featured: false
		}
	];
	const handleClick = () => {
		// Find featured item
		// const itemId = bentoItems.findIndex((item) => item.featured === true);

		// // Set featured item to false
		// bentoItems[itemId].featured = false;
		//
		// // Set new featured item
		// if (itemId === bentoItems.length - 1) {
		// 	bentoItems[0].featured = true;
		// } else {
		// 	bentoItems[itemId + 1].featured = true;
		// }

		// rotate array
		bentoItems = [...bentoItems.slice(1), bentoItems[0]];
		// // rotate first item in array to back
		// bentoItems.shift();
		// bentoItems = bentoItems;
		flip();
	};

	$: {
		featured = [bentoItems[0]];
		mid = bentoItems.slice(1);
		console.log(featured, mid);
	}
</script>

<div class="w-full h-full flex items-center justify-around">
	<div class="grid grid-cols-16 grid-rows-4 gap-2 grid-flow-col w-[1200px] h-[600px]">
		<!-- Heading -->
		<div class="col-span-full row-span-1 bg-stone-900 text-stone-300 p-4">
			<h1 class="font-serif text-5xl">Adam G. Emerson</h1>
			<p class="font-mono">Full Stack Engineer • Web Designer</p>
		</div>
		<!-- Bento -->
		<div class="col-span-7 row-span-3">
			{#each featured as item}
				<div
					data-flip-id={item.id}
					class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"
				>
					<h2 class="font-serif text-xl">{item.name}</h2>
					<p class="font-mono text-sm h-16">{item.description}</p>
					<div class="w-full bg-stone-300 h-1" />
					{#key item}
						<div in:slide={{ delay: 600 }} class="w-full h-full p-4 bg-teal-900" />
					{/key}
				</div>
			{/each}
		</div>

		{#each mid as item, i}
			{#if i !== mid.length - 1}
				<div class="col-span-4 row-span-1">
					<div
						data-flip-id={item.id}
						class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer"
					>
						<h2 class="font-serif text-xl">{item.name}</h2>
						<p class="font-mono text-sm">{item.description}</p>
					</div>
				</div>
			{:else}
				<div class="col-span-7 row-span-1">
					<div
						data-flip-id={item.id}
						class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer"
					>
						<h2 class="font-serif text-xl">{item.name}</h2>
						<p class="font-mono text-sm">{item.description}</p>
					</div>
				</div>
			{/if}
		{/each}
		<!--		<div class="col-span-4 row-span-1">-->
		<!--			{#each mid.slice(2, 3) as item (item.name)}-->
		<!--				<div-->
		<!--					data-flip-id={item.name}-->
		<!--					class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 transition-all duration-300 hover:scale-[101%] hover:cursor-pointer"-->
		<!--				>-->
		<!--					<h2 class="font-serif text-xl">{item.name}</h2>-->
		<!--					<p class="font-mono text-sm">{item.description}</p>-->
		<!--				</div>-->
		<!--			{/each}-->
		<!--		</div>-->
		<!--		<div class="col-span-7 row-span-1">-->
		<!--			{#each bentoItems.slice(3, 4) as item (item.name)}-->
		<!--				<div-->
		<!--					data-flip-id={item.name}-->
		<!--					class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 transition-all duration-300 hover:scale-[101%] hover:cursor-pointer"-->
		<!--				>-->
		<!--					<h2 class="font-serif text-xl">{item.name}</h2>-->
		<!--					<p class="font-mono text-sm">{item.description}</p>-->
		<!--				</div>-->
		<!--			{/each}-->
		<!--		</div>-->
		<div class="col-span-3 row-span-2">
			<BentoItem name="More Projects" />
		</div>
		<div class="col-span-2 row-span-1">
			<BentoItem name="github" variant="icon" />
		</div>
		<div class="col-span-2 row-span-1">
			<BentoItem name="linkedin" variant="icon" />
		</div>
		<div class="col-span-2 row-span-1">
			<BentoItem name="dribbble" variant="icon" />
		</div>
	</div>
	<button on:click={handleClick}>Hello</button>
</div>
