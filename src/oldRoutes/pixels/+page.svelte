<script>
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
	let animating = false;

	// 16x16 grid
	let gridState = Array.from({ length: 16 }, () => Array(16).fill(0));

	const handleClick = () => {
		let running = true;
		animating = true;
		// randomly flip cells in gridState until none are 0
		const interval = setInterval(() => {
			if (gridState.flat().includes(0) && running) {
				if (gridState.flat().filter((cell) => cell === 0).length < 10) {
					gridState = Array(16).fill(Array(16).fill(1));
					running = false;
				} else {
					let col = Math.floor(Math.random() * gridState.length);
					let row = Math.floor(Math.random() * gridState.length);
					gridState[col][row] = 1;
					console.log(gridState);
				}
			} else {
				clearInterval(interval);
				animating = false;
			}
		}, 1);
	};
</script>

{#if mounted}
	<div class="w-128 h-96 m-auto my-32 relative">
		<img
			src="../../images/auragraph/auragraphHome.png"
			alt="test"
			class="z-10 absolute top-0 left-0 object-cover w-full h-full"
		/>
		<div class="absolute z-20 top-0 left-0 w-128 flex flex-col h-full">
			{#each gridState as row}
				<div class="flex flex-1 flex-wrap">
					{#each row as cell}
						<div
							class={`flex-1 transition-colors duration-100 ${
								cell === 0 ? 'bg-stone-900' : 'bg-transparent'
							}`}
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<button on:click|preventDefault={handleClick} class="z-40">Animate</button>
{/if}

<!--${
								cell ? 'bg-transparent' : 'bg-stone-900'
							}-->

<style>
	.filtered {
		background: white;
		filter: blur(2px);
	}
</style>
