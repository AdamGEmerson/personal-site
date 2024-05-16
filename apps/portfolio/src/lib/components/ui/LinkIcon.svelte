<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<div class="h-12 w-16 group">
	<a
		class="relative h-full w-full flex flex-auto transition-none justify-around duration-300 group-hover:text-stone-300 group-hover:bg-stone-900"
		{href}
		target="_blank"
		rel="noreferrer"
		aria-label={label}
	>
		<slot name="icon" />
	</a>
</div>

<style>
</style>
