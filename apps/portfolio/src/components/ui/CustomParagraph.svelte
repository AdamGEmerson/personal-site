<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';

	// Property custom blocks receive from @portabletext/svelte when redered
	export let portableText: BlockComponentProps;
</script>

<div class="mt-4 text-md md:text-lg leading-relaxed">
	<slot />
</div>
