<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	import { hoveredLink } from '../../../stores/hoveredLink';

	// Property custom marks receive from @portabletext/svelte when redered
	export let portableText: MarkComponentProps<{
		href?: string;
		_key?: string;
	}>;

	$: ({ value } = portableText);

	// Handle mouseenter event
	const handleMouseEnter = (e: Event) => {
		if (e.target) {
			let element = e.target as HTMLAnchorElement;
			console.log('width: ', element.getBoundingClientRect().width);
			hoveredLink.set({ element });
		}
	};

	const handleMouseLeave = (e: Event) => {
		hoveredLink.set({ element: null });
	};
</script>

<!-- Render the mark -->
{#if value.href}
	<a
		href={value.href}
		data-name={value._key}
		class="px-1 font-mono underline hover:no-underline hover:text-stone-300 transition duration-200 ease-in-out whitespace-nowrap py-1"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
	>
		<span class="slot">
			<slot />
		</span>
	</a>
{:else}
	<slot />
{/if}

<style>
	a {
		position: relative;
		transition: all 0.25s;
	}

	a:before {
		position: absolute;
		content: '';
		transition: all 0.25s;
		height: 0;
		z-index: 0;
		@apply bg-stone-900 pb-2;
	}

	a:hover:before {
		left: 0;
		right: 0;
		height: 100%;
	}

	.slot {
		position: relative;
		z-index: 1;
	}
</style>
