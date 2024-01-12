<script lang="ts">
	import { slide } from 'svelte/transition';

	interface ProjectTitle {
		title: string;
		subtitle: string;
	}
	export let data: ProjectTitle;
	export let classes: string;
</script>

<div
	class={`flex flex-1 flex-col justify-start gap-4 ${classes}`}
	in:slide={{ delay: 200, duration: 1000 }}
	out:slide={{ delay: 0, duration: 1000 }}
>
	<div class="flex flex-row justify-start gap-8 py-4 lg:py-8 items-end">
		<div class="flex flex-col">
			<h1 class="text-5xl lg:text-6xl xl:text-7xl font-serif font-thin">{data.title}</h1>
			<div class="font-mono">{data.subtitle}</div>
		</div>
		<!--		<div class="flex flex-col w-full">-->
		<!--			<div class="flex flex-col justify-items-start w-full">-->
		<!--				{#if project.projectLinks}-->
		<!--					{#each project.projectLinks as link}-->
		<!--						<div-->
		<!--							role="button"-->
		<!--							tabindex={0}-->
		<!--							class="main-link font-mono group p-1 px-2 hover:cursor-pointer hover:bg-stone-900 w-full"-->
		<!--							on:click={(e) => goTo(e, link.url)}-->
		<!--							on:keypress={(e) => goTo(e, link.url)}-->
		<!--						>-->
		<!--							<a href={link.url} class="group-hover:text-stone-300">{link.name}</a>-->
		<!--						</div>-->
		<!--					{/each}-->
		<!--				{/if}-->
		<!--			</div>-->
		<!--		</div>-->
	</div>
</div>
