<script lang="ts">
	import SectionHeading from '../SectionHeading.svelte';
	export let wins: number;
	export let streak: number;
	export let bestStreak: number;
	export let name: string;
</script>

<div class="text-xl md:text-3xl font-serif w-1/2 md:w-full h-full p-4">
	{name}
	<div class="font-mono text-sm w-full">
		<SectionHeading>Stats</SectionHeading>
		<div class="p-2 text-[10px] md:text-xs">
			<div>Wins: {wins}</div>
			<div>Streak: {streak}</div>
			<div>Best Streak: {bestStreak}</div>
		</div>
	</div>
</div>
