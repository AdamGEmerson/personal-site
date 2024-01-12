<script lang="ts">
	import { fly, blur } from 'svelte/transition';
	import ProjectTitle from '../../../../components/ProjectTitle.svelte';
	import { onMount } from 'svelte';
	import SectionHeading from '../../../../components/SectionHeading.svelte';
	import ImageGallery from '../../../../components/ImageGallery.svelte';
	import { goTo } from '../../../../utils/helpers';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import CustomParagraph from '../../../../components/CustomParagraph.svelte';
	import CustomLink from '../../../../components/CustomLink.svelte';
	import { tweened } from 'svelte/motion';
	import { circInOut } from 'svelte/easing';
	import { hoveredLink } from '../../../../stores/hoveredLink';

	let hovered: { element: HTMLAnchorElement | null } = { element: null };

	let linkHighlightY = tweened(0, {
		duration: 500,
		easing: circInOut
	});

	let linkHighlightX = tweened(0, {
		duration: 500,
		easing: circInOut
	});

	let linkFade = tweened(0, {
		duration: 500,
		easing: circInOut
	});

	let width = tweened(0, {
		duration: 500,
		easing: circInOut
	});

	hoveredLink.subscribe((value) => {
		hovered = value;
	});

	export let data: PageData;

	let pageData = data.data;
	// let project: Project = pages[$page.params.slug];

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	$: if (hovered && hovered.element) {
		console.log(hovered);
		console.log(hovered.element.offsetTop);
		console.log(hovered.element.offsetLeft);
		linkHighlightY.set(hovered.element.offsetTop);
		linkHighlightX.set(hovered.element.offsetLeft);
		width.set(hovered.element.getBoundingClientRect().width);
		linkFade.set(1);
	} else {
		linkFade.set(0);
	}
</script>

<svelte:head>
	<title>{pageData.title} | Adam G. Emerson</title>
	<meta
		name="description"
		content={pageData.description.length > 150
			? pageData.description.slice(0, 150) + '...'
			: pageData.description.slice(0, 150)}
	/>
</svelte:head>

{#if mounted}
	<div class="relative" out:blur|global={{ duration: 500, delay: 0 }}>
		<!--{#if hovered.element}-->
		<!--	<div-->
		<!--		transition:fade={{ duration: 500, delay: 0 }}-->
		<!--		class="bg-stone-900 absolute -z-10"-->
		<!--		style={`top: ${$linkHighlightY}px; left: ${$linkHighlightX}px; opacity: ${$linkFade}; width: ${$width}px; height: ${-->
		<!--			hovered.element ? Math.floor(hovered.element.getBoundingClientRect().height) : 0-->
		<!--		}px;`}-->
		<!--	/>-->
		<!--{/if}-->
		<div
			class="flex flex-col-reverse lg:flex-row gap-8 py-4 lg:py-8 items-start h-full align-middle overflow-auto"
		>
			<div class="lg:flex-1">
				<ProjectTitle
					data={{ title: pageData.title, subtitle: pageData.subtitle }}
					classes="hidden lg:block"
				/>
				<div class="flex justify-start gap-4">
					<div class="flex w-3/4 flex-col justify-start">
						<SectionHeading>Links</SectionHeading>
						<div
							class="flex flex-row justify-around items-center align-middle pb-4"
							in:fly|global={{ delay: 200, duration: 500 }}
						>
							{#if pageData.projectLinks}
								{#each pageData.projectLinks as link}
									<div
										role="button"
										tabindex={0}
										class="main-link font-mono group p-1 px-2 hover:cursor-pointer hover:bg-stone-900 w-full"
										on:click={(e) => goTo(e, link.url)}
										on:keypress={(e) => goTo(e, link.url)}
									>
										<a href={link.url} class="group-hover:text-stone-300">{link.name}</a>
									</div>
								{/each}
							{/if}
						</div>
						<div class="flex flex-col justify-start w-64">
							<SectionHeading>Tech Stack</SectionHeading>
							<div
								class="flex flex-row justify-around items-center align-middle"
								in:fly|global={{ delay: 200, duration: 500 }}
							>
								{#each pageData.madeWith as tech}
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
					</div>
					<div transition:fly={{ duration: 500, x: 100, delay: 500 }} class="p-1 w-full">
						<ImageGallery images={data.images} />
					</div>
				</div>
				<div class="overflow-scroll" in:blur|global={{ duration: 500, delay: 500 }}>
					<SectionHeading>About</SectionHeading>
					<p class="my-4">
						<PortableText
							value={pageData.description}
							components={{
								block: {
									normal: CustomParagraph
								},
								marks: {
									link: CustomLink
								}
							}}
						/>
					</p>
				</div>
				<div class="self-start flex flex-row">
					<ProjectTitle
						data={{ title: pageData.title, subtitle: pageData.subtitle }}
						classes="block lg:hidden"
					/>
				</div>
			</div>
		</div>
	</div>
{/if}
