<script>
	import ProjectCard from '/src/components/ProjectCard.svelte';
	import { projects } from '/src/stores/featured';
	import ogImage from '/src/images/adamemerson_og.png';
	let pages;
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
</svelte:head>

<div id="work" class="h-full w-full my-8 pb-32 flex flex-col">
	<div class="grid grid-cols-1 sm:grid-cols-2 carousel-container gap-16">
		{#each Object.entries(pages) as [slug, project], i}
			{#if !project.isResearch}
				<ProjectCard {project} />
			{/if}
		{/each}
	</div>
</div>
