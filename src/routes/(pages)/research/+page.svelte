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

<div id="work" class="h-full w-full my-8 pb-32 flex flex-col">
	<div class="grid grid-cols-1 sm:grid-cols-2 carousel-container gap-16">
		{#each Object.entries(pages) as [slug, project], i}
			{#if project.isResearch}
				<ProjectCard {project} />
			{/if}
		{/each}
	</div>
</div>
