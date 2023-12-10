<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { animate, spring } from 'motion';
	import { IconCode } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let cardId: string;
	let card: Card;
	let rotation: number;

	export { cardId as id, card, rotation };

	onMount(() => {
		console.log('cardId', cardId);
		animate(
			`#${cardId}`,
			{
				scale: [1.2, 1],
				rotate: [rotation],
				y: [600, 210]
			},
			{ delay: 1.5, easing: spring({ stiffness: 40, damping: 10 }) }
		);
	});
</script>

<div
	role="complementary"
	id={cardId}
	use:draggable={{
		onDrag: ({ offsetX, offsetY }) => {
			animate(`#${cardId}`, { x: offsetX, y: offsetY });
		}
	}}
	on:mouseenter={() =>
		animate(
			`#${cardId}`,
			{ scale: 1.05, zIndex: 50, rotate: 0 },
			{ easing: spring({ stiffness: 200, damping: 14 }) }
		)}
	on:mouseleave={() => animate(`#${cardId}`, { scale: 1, zIndex: 20 })}
	class="playing-card absolute w-48 h-72 md:w-64 md:h-96 bg-amber-400 rounded-2xl transition-shadow hover:shadow-xl shadow-md z-20 hover:cursor-grab bg-card-gradient"
>
	<div class="flex flex-col p-4 justify-between h-full">
		<div class="top-pip font-serif text-2xl h-1/6">
			<div class="font-serif text-2xl">{card.value}</div>
			<IconCode />
		</div>
		<div class="card-content h-3/6 flex flex-col items-center justify-around">
			<div class="font-serif text-2xl flex items-center">
				<img class="h-1/2" src={card.icon} alt="Card logo" />
			</div>
		</div>
		<div class="bottom-pip font-serif text-2xl h-2/6 flex flex-col">
			<div class="px-8 h-1/2 flex flex-col">
				<div class="text-xl font-serif">{card.name}</div>
				<div class="flex flex-col gap-0">
					<div class="text-xs font-mono h-2">{card.description}</div>
					<div class="font-mono" style="font-size: 8px">{card.year} • {card.author}</div>
				</div>
			</div>
			<div class="rotate-180">
				<div class="font-serif text-2xl">{card.value}</div>
				<IconCode />
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--image: url('/src/images/react.svg');
	}

	.playing-card::before,
	.playing-card::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: overlay;
		overflow: hidden;
	}

	.playing-card::before {
		background: black;
		filter: url('/src/images/grain.svg#grainFilter');
	}

	.playing-card::after {
		@apply bg-gradient-to-b from-stone-300 to-indigo-400;
		background-image: var(--image);
		background-attachment: fixed;
		background-repeat: no-repeat;
	}

	.playing-card {
		overflow: hidden;
	}
</style>
