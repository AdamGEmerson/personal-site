<script lang="ts">
	import BentoItem from '../../../components/BentoItem.svelte';
	import { slide, blur } from 'svelte/transition';
	import { gsap } from 'gsap';
	import Flip from 'gsap/dist/Flip';
	import { Marquee } from 'flowbite-svelte';
	import { tweened } from 'svelte/motion';
	import { linear, quintOut } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';
	import { IconGeometry } from '@tabler/icons-svelte';

	gsap.registerPlugin(Flip);

	function flip() {
		const state = Flip.getState('.bento-item');

		requestAnimationFrame(() => {
			Flip.from(state, {
				target: '.bento-item',
				ease: 'back.inOut(0.5)',
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

	let timer = tweened(100, {
		duration: 10000,
		easing: linear
	});

	let intervalId: any;
	const rotateFeature = () => {
		bentoItems = [...bentoItems.slice(1), bentoItems[0]];
		flip();
		resetInterval();
	};

	const resetInterval = () => {
		clearInterval(intervalId);
		intervalId = setInterval(rotateFeature, 10000);
		timer.set(0, { duration: 0 });
		timer.set(100);
	};

	onMount(() => {
		intervalId = setInterval(rotateFeature, 10000);
		timer.set(0, { duration: 0 });
		timer.set(100);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});

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
			<!--			<p class="font-mono">Full Stack Engineer • Web Designer</p>-->
			<Marquee
				class="text-lg font-mono bg-stone-900 text-stone-300 p-1 w-full align-middle"
				speed={0.1}
				hoverSpeed={0.1}
			>
				<div class="mx-8 whitespace-nowrap">Full Stack Development</div>
				<div class="mx-8 whitespace-nowrap">Web Design</div>
				<div class="mx-8 whitespace-nowrap">Human Computer Interaction</div>
				<div class="mx-8 whitespace-nowrap">Internet Magic</div>
			</Marquee>
		</div>
		<!-- Bento -->
		<div class="col-span-7 row-span-3">
			{#each featured as item}
				<div
					in:blur|global={{ easing: quintOut, duration: 1000 }}
					data-flip-id={item.id}
					class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"
				>
					<div class={'flex'}>
						<div class="flex-1">
							<h2 class="font-serif text-xl">{item.name}</h2>
							<p class="font-mono text-sm h-16">{item.description}</p>
						</div>
						<IconGeometry class="flex-0 h-8 w-8 text-stone-600 self-end" />
					</div>

					<div class="flex bg-stone-600 h-1">
						<div class="flex bg-stone-300 h-full" style="width: {$timer}%" />
					</div>
					{#key item}
						<div class="h-full">
							<div
								in:slide={{ delay: 600, duration: 1000, easing: quintOut }}
								class="w-full h-full bg-teal-900"
							>
								<img
									src="../src/images/auragraph/auragraphPreview.png"
									alt="Test"
									class="w-full h-full border border-2 border-stone-300 object-cover object-center"
								/>
							</div>
						</div>
					{/key}
				</div>
			{/each}
		</div>

		{#each mid as item, i}
			{#if i !== mid.length - 1}
				<div class="col-span-4 row-span-1">
					<BentoItem name={item.name} description={item.description} bentoId={item.id} />
				</div>
			{:else}
				<div class="col-span-7 row-span-1">
					<BentoItem name={item.name} description={item.description} bentoId={item.id} />
				</div>
			{/if}
		{/each}
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
</div>
