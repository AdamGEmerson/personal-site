<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import ProjectTitle from '../../../../lib/components/layout/project/ProjectTitle.svelte';
	import { onMount } from 'svelte';
	import SectionHeading from '../../../../lib/components/ui/SectionHeading.svelte';
	import ImageGallery from '../../../../lib/components/ui/ImageGallery.svelte';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import CustomParagraph from '../../../../lib/components/ui/CustomParagraph.svelte';
	import CustomLink from '../../../../lib/components/ui/CustomLink.svelte';
	import { tweened } from 'svelte/motion';
  import { circInOut, quartInOut } from "svelte/easing";
	import { hoveredLink } from '../../../../stores/hoveredLink';
  import StackIcon from "../../../../lib/components/ui/StackIcon.svelte";

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
		<div class="relative py-16 md:py-0" transition:fade={{ delay: 500 }}>
			<div
				class="flex flex-col gap-4 items-start align-middle overflow-auto"
			>
					<ProjectTitle
						data={{ title: pageData.title, subtitle: pageData.subtitle, oneLiner: pageData.oneLiner }}
						classes="w-full"
					/>
					<div class="flex flex-col-reverse lg:flex-row justify-start gap-4">
						<div transition:fly={{ duration: 500, x: -100, delay: 500 }} class="flex w-full lg:w-1/2 flex-col justify-start gap-4">
              <div class="flex flex-col gap-2">
                <SectionHeading>Links</SectionHeading>
                <div
                  class="flex flex-row justify-start items-center align-middle gap-2"
                  in:fly|global={{ delay: 200, duration: 500 }}
                >
                  {#if pageData.projectLinks}
                    {#each pageData.projectLinks as link, i (link)}
                      <a
                        in:fly|global={{x: -100, duration: 800, delay: 600 + (100 * i), easing:quartInOut }}
                        tabindex={0}
                        class="main-link font-mono group hover:cursor-pointer"
                        href={link.url}
                        target="_blank"
                      >
                          <div class="relative h-12 w-12 md:h-16 md:w-16 flex self-center text-center justify-center text-stone-300 bg-stone-900">
                            <StackIcon brand={link.name.toLowerCase()} />
                          </div>
                      </a>
                    {/each}
                  {/if}
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <SectionHeading>Tech Stack</SectionHeading>
                <div
                  class="flex flex-row justify-start items-center align-middle gap-2"
                  in:fly|global={{ delay: 200, duration: 500 }}
                >
                  {#each pageData.madeWith as tech, i (tech)}
                    <div in:fly|global={{x: -100, duration: 800, delay: 600 + (100 * i), easing:quartInOut }} class="relative h-12 md:h-16 w-12 md:w-16 flex self-center text-center justify-center text-stone-300 bg-stone-900">
                      <StackIcon brand={tech.toLowerCase()} />
                    </div>
                  {/each}
                </div>
              </div>
<!--              <SectionHeading>Timeline</SectionHeading>-->
<!--              <div-->
<!--                class="flex flex-row justify-around items-center align-middle min-h-16"-->
<!--                in:fly|global={{ delay: 200, duration: 500 }}-->
<!--              >-->
<!--                No data-->
<!--              </div>-->
						</div>
						<div transition:fly={{ duration: 500, x: 100, delay: 500 }} class="p-1 w-full">
							<ImageGallery images={data.images} />
						</div>
					</div>
					<div class="flex flex-col items-center">
            <div class={`flex flex-1 flex-col justify-start gap-4 w-full`}>
              <div class="flex flex-row justify-start bg-stone-900 text-stone-300 p-4 md:p-8">
                <h3 class="text-3xl font-serif font-thin">About The Project</h3>
              </div>
            </div>

            <p class="px-8 md:px-16">
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
<!--        <div class={`flex flex-1 flex-col justify-start gap-4 w-full mt-8`}>-->
<!--          <div class="flex flex-row justify-start bg-stone-900 text-stone-300 p-4 md:p-8">-->
<!--            <h3 class="text-3xl font-serif font-thin">Other Projects</h3>-->
<!--          </div>-->
<!--        </div>-->
				</div>
			</div>
{/if}
