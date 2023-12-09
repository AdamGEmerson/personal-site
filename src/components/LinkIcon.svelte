<script>
	export let href;
	export let label;
</script>

<div class="h-8 w-8 sm:h-12 sm:w-12">
	<a
		class="relative rounded-full h-full w-full flex flex-auto justify-around transition-all duration-300 hover:bg-opacity-90"
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
