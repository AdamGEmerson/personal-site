<script lang="ts">
	import { slide } from 'svelte/transition';

	interface ProjectTitle {
		title: string;
		subtitle: string;
    oneLiner: string;
	}
	export let data: ProjectTitle;
	export let classes: string;
</script>

<div
	class={`flex flex-1 flex-col justify-start gap-4 ${classes}`}
	in:slide={{ delay: 200, duration: 1000 }}
	out:slide={{ delay: 0, duration: 1000 }}
>
	<div class="flex flex-row justify-start gap-8 items-end bg-stone-900 text-stone-300 p-4 md:p-8">
		<div class="flex flex-col gap-2 md:gap-4">
			<h1 class="text-3xl md:text-5xl xl:text-7xl font-serif font-thin">{data.title}</h1>
			<h2 class="font-mono text-xs md:text-lg">{data.oneLiner}</h2>
		</div>
	</div>
</div>
