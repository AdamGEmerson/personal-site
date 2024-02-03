<script lang="ts">
	import { IconClubs, IconCode, IconDiamonds, IconSpade } from '@tabler/icons-svelte';
	import { gsap } from 'gsap';

	let cardId: string;
	let card: { suit: 'hearts' | 'diamonds' | 'clubs' | 'spades'; value: string; revealed: boolean };

	let icons = {
		hearts: IconCode,
		diamonds: IconDiamonds,
		clubs: IconClubs,
		spades: IconSpade
	};

	export { card };

	const reveal = () => {
		gsap.to(`#${card.suit + card.value}`, {
			duration: 0.5,
			rotationY: 180,
			ease: 'power2.inOut'
		});
	};
</script>

{#if card.revealed}
	<div
		role="complementary"
		id={card.suit + card.value}
		data-flip-id={card.suit + card.value}
		class={`card playing-card relative w-48 h-72 md:w-64 md:h-96 rounded-2xl transition-shadow hover:shadow-xl shadow-md hover:cursor-grab bg-gradient-to-b overflow-clip`}
	>
		<div class={`card-background h-full w-full`}>
			<div class="flex flex-col p-4 justify-between h-full">
				<div class="top-pip font-serif text-2xl h-1/6">
					<div class="font-serif text-2xl">{card.value}</div>
					<svelte:component this={icons[card.suit]} />
				</div>
				<div
					class="card-content h-4/6 flex flex-col items-center justify-around font-serif text-6xl"
				>
					{card.value}
				</div>
				<div class="bottom-pip font-serif text-2xl h-1/6 flex flex-col items-end">
					<div class="rotate-180 h-full">
						<div class="font-serif text-2xl">{card.value}</div>
						<svelte:component this={icons[card.suit]} />
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div
		id={card.suit + card.value}
		data-flip-id={card.suit + card.value}
		class="card w-48 h-72 md:w-64 md:h-96 bg-stone-900 rounded-lg font-serif text-stone-700 text-4xl flex items-center justify-center border border-zinc-500 overflow-clip"
	>
		AE
	</div>
{/if}

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
</style>
