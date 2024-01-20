<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let dealerScore: number;
	export let playerScore: number;
</script>

<div class="flex flex-row bg-stone-900 text-stone-300 justify-around gap-2 items-center w-full">
	{#key dealerScore}
		<div
			in:slide={{ duration: 500, easing: quintOut }}
			class="font-serif text-4xl md:text-6xl bg-stone-900 p-4"
		>
			{dealerScore > 9 ? '' : '0'}{dealerScore}
		</div>
	{/key}
	<div class="font-serif text-4xl md:text-6xl">•</div>
	{#key playerScore}
		<div
			in:slide={{ duration: 500, easing: quintOut }}
			class="font-serif text-4xl md:text-6xl bg-stone-900 p-4"
		>
			{playerScore > 9 ? '' : '0'}{playerScore}
		</div>
	{/key}
</div>
