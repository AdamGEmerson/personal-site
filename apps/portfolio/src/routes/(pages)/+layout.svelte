<script>
	export let data;
</script>

<div class="overflow-auto relative w-full">
	<slot url={data.url} />
</div>
