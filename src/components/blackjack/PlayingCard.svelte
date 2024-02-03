<script lang="ts">
	import { IconCode } from '@tabler/icons-svelte';
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	gsap.registerPlugin(Draggable);

	let cardId: string;
	let card: Card;

	export { cardId as id, card };

	onMount(() => {
		Draggable.create(`#${cardId}`);
	});
</script>

<div
	role="complementary"
	id={cardId}
	class={`playing-card absolute w-48 h-72 md:w-64 md:h-96 rounded-2xl transition-shadow hover:shadow-xl shadow-md z-20 hover:cursor-grab bg-gradient-to-b ${card.gradientFrom} ${card.gradientTo}`}
>
	<div class={`card-background h-full w-full`}>
		<div class="flex flex-col p-4 justify-between h-full">
			<div class="top-pip font-serif text-2xl h-1/6">
				<div class="font-serif text-2xl">{card.value}</div>
				<IconCode />
			</div>
			<div class="card-content h-3/6 flex flex-col items-center justify-around" />
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
	<div class="absolute top-0 left-0 z-50 h-full w-full text-2xl flex justify-center items-center">
		<img class="h-1/3 w-1/2 mb-8" src={card.icon} alt="Card logo" />
	</div>
</div>

<style>
	:root {
		--image: url('/src/images/react.svg');
	}

	.card-background::before,
	.card-background::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: overlay;
		overflow: hidden;
	}

	.card-background::before {
		background: black;
		filter: url('/src/images/grain.svg#grainFilter');
	}

	.card-background::after {
		background-image: var(--image);
		background-attachment: fixed;
		background-repeat: no-repeat;
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
		@apply bg-stone-300;
	}

	.playing-card {
		overflow: hidden;
	}
</style>
