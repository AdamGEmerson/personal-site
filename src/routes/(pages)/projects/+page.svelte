<script lang="ts">
	import ProjectCard from '../../../components/ProjectCard.svelte';
	import { projects } from '../../../stores/featured';
	import type { Project } from '../../../stores/featured';
	import ogImage from '/src/images/adamemerson_og.png';

	let pages: { [key: string]: Project };

	projects.subscribe((value) => {
		pages = value;
	});
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

<div id="work" class="h-full w-full my-8 pb-32 flex flex-col">
	<div class="grid grid-cols-1 sm:grid-cols-2 carousel-container gap-16">
		{#each Object.entries(pages) as [_slug, project]}
			{#if !project.isResearch}
				<ProjectCard {project} />
			{/if}
		{/each}
	</div>
</div>
