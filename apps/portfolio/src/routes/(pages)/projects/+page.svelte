<script lang="ts">
	import { projects } from '../../../stores/featured';
	import ogImage from '/src/images/adamemerson_og.png';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import HoverMenu from '../../../components/HoverMenu.svelte';
	import Starburst from '../../../components/Starburst.svelte';

	let pages: { [key: string]: Project };

	projects.subscribe((value) => {
		pages = value;
	});

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	let projectItems: Project[];
	let menuItems: MenuItem[];

	$: {
		let projectItems = Object.entries(pages)
			.map(([key, value]) => value)
			.filter((project) => !project.isResearch);
		menuItems = projectItems.map((project) => {
			return {
				name: project.title,
				path: `/projects/${project.slug}`
			};
		});
	}
</script>

<svelte:head>
	<title>Projects | Adam G. Emerson</title>
	<meta
		name="description"
		content="Software Engineering and Web Development Projects by Adam G. Emerson"
	/>
	<link rel="canonical" href="https://adamemerson.com/projects" />
	<meta property="og:title" content="Projects | Adam G. Emerson" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content="https://adamemerson.com/projects" />
	<meta
		property="og:description"
		content="Software Engineering and Web Development Projects by Adam G. Emerson"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@adamgemerson" />
	<meta name="twitter:creator" content="@adamgemerson" />
	<meta name="twitter:title" content="Projects | Adam G. Emerson" />
	<meta name="twitter:description" content="Software Engineering and Web Development Portfolio" />
</svelte:head>

{#if mounted}
	<div id="work" class="h-full w-full my-8 pb-32 flex flex-col" transition:fade={{ delay: 500 }}>
		<div class="flex flex-col">
			<h1 class="text-5xl font-serif mb-4">Projects</h1>
			<div class="font-mono bg-stone-900 text-stone-300 p-1 px-4 text-sm min-h-8 flex items-center">
				<p>Personal projects and recent work in React, Svelte, Astro, Next.js, and more.</p>
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
