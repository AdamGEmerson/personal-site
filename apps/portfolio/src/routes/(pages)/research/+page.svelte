<script lang="ts">
	import { projects } from '../../../stores/featured.js';
	import ogImage from '/src/images/adamemerson_og.png';
	import HoverMenu from '../../../components/layout/HoverMenu.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Starburst from '../../../components/ui/Starburst.svelte';

	let pages: { [key: string]: Project };
	projects.subscribe((value) => {
		pages = value;
	});
	let researchItems: Project[];
	let menuItems: MenuItem[];

	$: {
		researchItems = Object.entries(pages)
			.map(([key, value]) => value)
			.filter((research) => research.isResearch);
		menuItems = researchItems.map((research) => {
			return {
				name: research.title,
				path: `/research/${research.slug}`
			};
		});
	}

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Research | Adam G. Emerson</title>
	<meta name="description" content="Research Projects and Papers by Adam G. Emerson" />
	<link rel="canonical" href="https://adamemerson.com/research" />
	<meta property="og:title" content="Research | Adam G. Emerson" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content="https://adamemerson.com/research" />
	<meta property="og:description" content="Research Projects and Papers by Adam G. Emerson" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@adamgemerson" />
	<meta name="twitter:creator" content="@adamgemerson" />
	<meta name="twitter:title" content="Research | Adam G. Emerson" />
	<meta name="twitter:description" content="Software Engineering and Web Development Portfolio" />
</svelte:head>

{#if mounted}
	<div id="work" class="h-full w-full my-8 pb-32 flex flex-col" transition:fade={{ delay: 500 }}>
		<div class="flex flex-col">
			<h1 class="text-5xl font-serif mb-4">Research</h1>
			<div class="font-mono bg-stone-900 text-stone-300 p-1 px-4 text-sm min-h-8 flex items-center">
				<p>Research projects and publications.</p>
			</div>
			{#if menuItems.length !== 0}
				<div transition:fade|global class="my-4">
					<HoverMenu items={menuItems} />
				</div>
			{/if}
		</div>
	</div>
	<div
		class="text-stone-900 z-50 fixed -bottom-20 -left-20"
		transition:fly={{ duration: 1000, delay: 1500, x: -100, y: 100 }}
	>
		<Starburst size="256" />
	</div>
{/if}
