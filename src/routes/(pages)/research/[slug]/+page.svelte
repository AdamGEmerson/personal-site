<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '/src/stores/featured';
	import { IconBrandGithub, IconLink } from '@tabler/icons-svelte';
	import type { Project } from '/src/stores/featured';
	let pages;

	projects.subscribe((value) => {
		pages = value;
	});

	let project: Project = pages[$page.params.slug];
</script>

<svelte:head>
	<title>{project.title} | Adam G. Emerson</title>
	<meta
		name="description"
		content={project.description.length > 150
			? project.description.slice(0, 150) + '...'
			: project.description.slice(0, 150)}
	/>
</svelte:head>

<div
	class="flex justify-start flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 my-4"
>
	<div class="flex flex-row justify-start gap-8">
		<h1 class="text-5xl sm:text-6xl font-serif font-thin">{project.title}</h1>
		<div class="flex flex-row justify-items-start space-x-4">
			{#if project.href}
				<div class="h-12 w-12 sm:h-14 sm:w-14">
					<a
						class="relative rounded-full h-full w-full flex flex-auto justify-around bg-gray-800 bg-opacity-60 transition-all duration-300 hover:bg-opacity-90"
						href={project.href}
						target="_blank"
						rel="noreferrer"
					>
						<IconLink class="w-3/5 h-3/5 self-center text-dark-primary-text" />
					</a>
				</div>
			{/if}
			{#if project.githubHref}
				<div class="h-12 w-12 sm:h-14 sm:w-14">
					<a
						class="relative rounded-full h-full w-full flex flex-auto justify-around bg-gray-800 bg-opacity-60 transition-all duration-300 hover:bg-opacity-90"
						href={project.githubHref}
						target="_blank"
						rel="noreferrer"
					>
						<IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text " />
					</a>
				</div>
			{/if}
		</div>
	</div>

	<img
		src={project.screenshots[0].url}
		alt={project.screenshots[0].alt}
		class="object-cover h-max w-full rounded-3xl overflow-hidden border border-gray-800"
	/>
</div>
<h3 class="font-sans font-bold text-lg mt-12">Made With</h3>
<div class="flex flex-row flex-wrap justify-items-start gap-2 w-full pl-4">
	{#each project.madeWith as tech}
		<div class="w-16 h-16 flex flex-col space-y-2 items-center">
			<svelte:component
				this={tech.icon}
				slot="icon"
				class="w-4/5 h-4/5 self-center text-dark-primary-text"
			/>
			<span class="text-xs">{tech.name}</span>
		</div>
	{/each}
</div>
<h3 class="font-sans font-bold text-lg mt-12">Publication</h3>
<a href={project.paperLink} class="group">
	<div
		class="flex flex-row flex-wrap justify-items-start gap-2 w-full pl-4 text-xl group-hover:underline"
	>
		{project.paperTitle}
	</div>
	<div class="flex flex-row flex-wrap justify-items-start gap-2 w-full pl-4">
		{#each project.authors as author, i (i)}
			{i + 1 < project.authors.length ? `${author}, ` : `${author}`}
		{/each}
	</div>
	<div class="flex flex-row flex-wrap justify-items-start gap-2 w-full pl-4 italic">
		{project.conference}
	</div>
</a>
<h3 class="font-sans font-bold text-lg mt-12">Abstract</h3>
<div class="pl-4">
	<p>{project.description}</p>
</div>
<h3 class="font-sans font-bold text-lg mt-12">Images</h3>

<div class="flex flex-col space-y-8 items-center w-full p-4 h-full">
	{#each project.screenshots as pic, i (i)}
		{#if i > 0}
			<img
				src={pic.url}
				alt={pic.alt}
				class="h-1/3 w-full rounded-3xl overflow-hidden border border-gray-800 object-fill"
			/>
		{/if}
	{/each}
</div>
