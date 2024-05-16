<script lang="ts">
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import BentoItem from './BentoItem.svelte';
	import { IconGeometry, IconWritingSign  } from '@tabler/icons-svelte';
	import TimerBar from '../../ui/TimerBar.svelte';
	import { onMount } from 'svelte';
  import ProjectIcon from "../project/ProjectIcon.svelte";

	export let featured: any[];
	export let timer: any;
	export let mid: any[];
	// export let preloadedImages: { [key: string]: { src: string; alt: string } };
	let intervalId: any;
	let imageShown = true;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="col-span-7 row-span-3" in:blur={{ duration: 1000, delay: 1600 }}>
		{#each featured as item}
			<a
				in:blur|global={{ easing: quintOut, duration: 1000 }}
				data-flip-id={item.title}
				href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
				class="bento-item w-full h-full p-8 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start hover:scale-[101%]"
			>
				<div class={'flex flex-col gap-4'}>
          <!--{#key item}-->
          <!--  <div class="h-full">-->
          <!--    <img-->
          <!--      src={preloadedImages[item._id].src}-->
          <!--      alt={preloadedImages[item._id].alt}-->
          <!--      class="h-auto w-full border-2 border-stone-300 object-cover"-->
          <!--    />-->
          <!--  </div>-->
          <!--{/key}-->
					<div class="flex-1">
						<div class="flex flex-row gap-4 justify-start items-center align-middle title-container h-8" data-flip-id={item.title + 'container'}>
							<ProjectIcon isResearch={item.isResearch} flipID={item.title + 'icon'}/>
							<h2 class="font-serif title" data-flip-id={item.title + 'title'}>{item.title}</h2>
						</div>
					</div>
          <TimerBar {timer} />
					<p class="font-mono text-sm">{item.oneLiner}</p>
				</div>
			</a>
		{/each}
	</div>

	{#each mid as item, i}
		{#if i !== mid.length}
			<div class={`col-span-4 row-span-1`} in:blur|global={{ duration: 1000, delay: 1600 }}>
				<BentoItem
					name={item.title}
					description={item.oneLiner}
					isResearch={item.isResearch}
					href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}
				/>
			</div>
		{/if}
	{/each}
  <div class="col-span-7 row-span-1" in:blur|global={{ duration: 1000, delay: 1600 }}>
    <a
      class="w-full h-full p-8 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around relative overflow-hidden group"
      href={'/blog'}
    >
    <div class="w-full h-full text-stone-300 gap-2 flex flex-col">
      <h2 class="font-serif text-2xl z-10">Writing</h2>
      <p class="font-mono text-sm z-10">Devlogs and musings.</p>
      <IconWritingSign
        class="z-0 absolute block -bottom-10 right-10 h-96 w-96 text-stone-800 group-hover:text-stone-700"
      />
    </div>
    </a>
  </div>
	<div class="col-span-3 row-span-2" in:blur={{ duration: 1000, delay: 1600 }}>
		<a
			class="w-full h-full p-8 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around relative overflow-hidden group"
			href={'/projects'}
		>
			<div class="flex-1 z-10 flex flex-col justify-start gap-2">
				<h2 class="font-serif text-2xl z-10">Work</h2>
				<p class="font-mono text-sm z-10">Additional software development projects.</p>
			</div>
			<IconGeometry
				class="z-0 absolute block -bottom-10 left-50 h-96 w-96 text-stone-800 group-hover:text-stone-700"
			/>
		</a>
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="github" variant="icon" />
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="linkedin" variant="icon" />
	</div>
	<div class="col-span-2 row-span-1" in:blur={{ duration: 1000, delay: 1600 }}>
		<BentoItem name="dribbble" variant="icon" />
	</div>
{/if}

<style>
  .title {
    font-size: 1.5rem;
  }
</style>