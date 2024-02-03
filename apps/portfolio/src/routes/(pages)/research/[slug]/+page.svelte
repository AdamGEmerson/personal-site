<script lang="ts">
	import { page } from '$app/stores';
	import { slide, fly, blur } from 'svelte/transition';
	import { projects } from '../../../../stores/featured';
	import ProjectTitle from '../../../../components/ProjectTitle.svelte';
	import { onMount } from 'svelte';
	import SectionHeading from '../../../../components/SectionHeading.svelte';
	let pages;

	projects.subscribe((value) => {
		pages = value;
	});

	let project: Project = pages[$page.params.slug];
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
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

{#if mounted}
	<div class="relative" out:blur|global={{ duration: 500, delay: 0 }}>
		<div
			class="flex flex-col-reverse lg:flex-row gap-8 py-4 lg:py-8 items-center h-full align-middle overflow-auto"
		>
			<div class="flex-1">
				<ProjectTitle {project} classes="hidden lg:block" />
				<div class="flex flex-col justify-start gap-4">
					<div class="flex flex-col justify-start w-64">
						<SectionHeading>Tech Stack</SectionHeading>
						<div
							class="flex flex-row justify-around items-center align-middle"
							in:fly|global={{ delay: 200, duration: 500 }}
						>
							{#each project.madeWith as tech}
								<div class="relative h-12 flex-1 flex self-center text-center justify-center">
									<svelte:component
										this={tech.icon}
										slot="icon"
										class="w-3/5 h-3/5 self-center text-stone-900"
									/>
								</div>
							{/each}
						</div>
					</div>
					<SectionHeading>Publication</SectionHeading>
					<a href={project.paperLink} class="group">
						<div
							class="flex flex-row flex-wrap justify-items-start gap-2 w-full font-mono font-bold group-hover:underline"
						>
							{project.paperTitle}
						</div>
						<div class="flex flex-row flex-wrap justify-items-start gap-2 w-full text-sm">
							{#each project.authors as author, i (i)}
								{i + 1 < project.authors.length ? `${author}, ` : `${author}`}
							{/each}
						</div>
						<div class="italic text-xs">
							{project.conference}
						</div>
					</a>
					<div class="overflow-scroll" in:blur|global={{ duration: 500, delay: 500 }}>
						<SectionHeading>Abstract</SectionHeading>
						<p class="my-4">{project.description}</p>
					</div>
				</div>
			</div>
			<div class="self-start">
				<ProjectTitle {project} classes="block lg:hidden" />
				<img
					in:slide|global={{ duration: 500, delay: 400 }}
					src={project.screenshots[0].src}
					alt={project.screenshots[0].alt}
					class="relative object-cover h-fit w-5/6 lg:w-full overflow-hidden border-4 border-stone-900"
				/>
			</div>
		</div>
	</div>
{/if}
