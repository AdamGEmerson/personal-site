<script lang="ts">
	import { projects } from '../../../stores/featured';
	import ogImage from '/src/images/adamemerson_og.png';
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import HoverMenu from '../../../components/layout/HoverMenu.svelte';
	import Starburst from '../../../components/ui/Starburst.svelte';
  import { IconGeometry, IconMicroscope, IconCaretUpDownFilled } from "@tabler/icons-svelte";
  import type { PageData } from "./$types";
  import ProjectList from "../../../components/layout/project/ProjectList.svelte";

	let pages: { [key: string]: Project };

  export let data: PageData[];

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
	<div id="work" class="h-full w-full flex flex-col gap-4 py-16" transition:slide={{duration: 800}}>
    <!-- Header -->
    <div class="flex flex-col bg-stone-900 text-stone-300 w-full p-4 md:p-8">
        <h1 class="text-3xl md:text-5xl xl:text-7xl font-serif font-thin">Projects</h1>
        <h2 class="font-mono bg-stone-900 text-stone-300 text-sm">
          Personal projects and recent work in React, Svelte, Astro, Next.js, and more.
        </h2>
    </div>
    <ProjectList {data} />
  </div>
{/if}
