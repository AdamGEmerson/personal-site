<script lang="ts">
	import { slide } from 'svelte/transition';
  import { quartInOut, quintInOut } from "svelte/easing";
	import BentoItem from './BentoItem.svelte';
	import { IconGeometry, IconMicroscope } from '@tabler/icons-svelte';
	import TimerBar from '../../ui/TimerBar.svelte';
	import { onMount } from 'svelte';

	export let featured: any[];
	export let timer: any;
	export let mid: any[];
	export let preloadedImages: { [key: string]: { src: string; alt: string } };

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		class="col-span-full row-span-5 order-2"
		in:slide|global={{ duration: 1000, delay: 1600, easing: quartInOut }}
	>

		<div class="flex w-full gap-2 flex-wrap">
			<div class="flex w-full flex-row gap-2">
				<BentoItem name="github" variant="icon" />
				<BentoItem name="linkedin" variant="icon" />
				<BentoItem name="dribbble" variant="icon" />
			</div>
      <div class="flex flex-row w-full justify-between text-stone-300 text-xl font-serif gap-2">
        <a
          class="w-full flex justify-center items-center bg-stone-900 h-16 hover:bg-stone-900/95 hover:scale-[101%]"
          href="/projects"
        >
          Projects
        </a>
        <a
          class="w-full flex items-center justify-center align-middle bg-stone-900 h-16 hover:bg-stone-900/95 hover:scale-[101%]"
          href="/blog"
        >
          Blog
        </a>
      </div>

			<div class="flex flex-col gap-2">
				{#each featured as item}
					<a
						in:slide|global={{ easing: quintInOut, duration: 1000 }}
						data-flip-id={item.title}
						href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
						class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"
					>
						<div class={'flex'}>
							<div class="flex-1">
								<div class="flex flex-row gap-2 justify-start items-center align-middle">
									{#if item.isResearch}
										<IconMicroscope class="flex-0 h-4 w-4 sm:h-8 sm:w-8 text-stone-600" />
									{:else}
										<IconGeometry class="flex-0 h-4 w-4 sm:h-8 sm:w-8 text-stone-600" />
									{/if}
									<h2 class="font-serif text-lg sm:text-xl">{item.title}</h2>
								</div>
								<p class="font-mono text-xs">{item.oneLiner}</p>
							</div>
						</div>
						<TimerBar {timer} />
						{#key item}
							<div class="h-full">
								<div
									class="w-full h-full bg-teal-900"
								>
									<img
										src={preloadedImages[item._id].src}
										alt={preloadedImages[item._id].alt}
										class="h-full w-full border-2 border-stone-300 object-cover"
									/>
								</div>
							</div>
						{/key}
					</a>
				{/each}

				{#each mid as item}
					<div class="col-span-full row-span-1">
						<BentoItem
							name={item.title}
							description={item.oneLiner}
							bentoId={item._id}
							isResearch={item.isResearch}
							href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
<!--<div class="col-span-3 row-span-2 md:order-none order-4">-->
<!--	<a-->
<!--		in:slide|global={{ easing: quintOut, duration: 1000 }}-->
<!--		class="w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around relative overflow-hidden group"-->
<!--		href={'/projects'}-->
<!--	>-->
<!--		<div class="flex-1 z-10">-->
<!--			<h2 class="font-serif text-xl z-10">More Projects</h2>-->
<!--			<p class="font-mono text-sm z-10">All the other stuff that doesn't fit on this page</p>-->
<!--		</div>-->
<!--		<IconGeometry-->
<!--			class="z-0 absolute block -bottom-10 left-50 h-96 w-96 text-stone-800 group-hover:text-stone-700"-->
<!--		/>-->
<!--	</a>-->
<!--</div>-->
