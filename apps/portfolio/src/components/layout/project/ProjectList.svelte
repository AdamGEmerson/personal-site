<script lang="ts">
	import { tweened } from 'svelte/motion';
  import { fade } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
  import type { PageData } from "../../../../.svelte-kit/types/src/routes/(pages)/projects/$types";
  import { onMount } from "svelte";
  import ProjectIcon from "./ProjectIcon.svelte";
  import FilterIcon from "./FilterIcon.svelte";
  import { IconArrowRight, IconGeometry, IconMicroscope } from "@tabler/icons-svelte";


  // TODO: Update data type
	export let data: PageData[];
	let menuHover = false;
	let hovered = '';

	let menuHighlight = tweened(0, {
		duration: 200,
		easing: circInOut
	});
	const handleLinkHover = (e: Event) => {
		if (e.target) {
			let element = e.target as HTMLAnchorElement;
			menuHighlight.set(element.offsetTop);
			hovered = element.getAttribute('data-name') as string;
			console.log(data);
			console.log(hovered);
		}
	};

  let sortOrder: Record<SortKey, SortOrder> = {
    title: 'none',
    subtitle: 'none',
    updated: 'none'
  };

  const handleSort = (key: SortKey) => {

    console.log('sort', key, sortOrder[key])

    // Set all keys to 'none'
    for (let k in sortOrder) {
      if (k !== key) {
        sortOrder[k as SortKey] = 'none';
      }
    }

    if (sortOrder[key] === 'none') {
      data.data = data.data.sort((a, b) => a[key].localeCompare(b[key]));
      sortOrder[key] = 'asc';
    } else if (sortOrder[key] === 'asc') {
      data.data = data.data.sort((a, b) => b[key].localeCompare(a[key]));
      sortOrder[key] = 'desc';
    } else {
      sortOrder[key] = 'none';
    }

    // Update state
    sortOrder = {...sortOrder};
  };

	const handleMenuHover = () => {
		menuHover = true;
	};
	const handleMenuLeave = () => {
		menuHover = false;
		hovered = '';
	};

  let mounted = false;
  onMount(() => {
    console.log('data', data.data);
    mounted = true;
  });

</script>
{#if mounted}
<div class="flex flex-col gap-4" in:fade|global={{delay: 800, duration: 400}}>
  <!--Legend -->
  <div class="flex flex-row gap-4 font-mono">
    <div class="flex flex-row gap-2">
      <IconGeometry size={24} /> = Application
    </div>
    <div class="flex flex-row gap-2">
      <IconMicroscope size={24} /> = Research
    </div>
  </div>
  <!-- Filter Bar -->
  <div class="text-stone-900 text-xl flex flex-row w-full border-b-2 border-stone-900 font-serif justify-around">
    <div class="w-1/3 flex flex-row gap-2 justify-start align-middle items-center">
      <p>Name</p>
      <button on:click={() => handleSort('title')}>
        {#key sortOrder.title}
          <FilterIcon order={sortOrder.title} />
        {/key}
      </button>
    </div>
    <div class="w-1/3 flex flex-row gap-2 justify-start align-middle items-center">
      <p>Type</p>
      <button on:click={() => handleSort('subtitle')}>
        {#key sortOrder.subtitle}
          <FilterIcon order={sortOrder.subtitle} />
        {/key}
      </button>
    </div>
    <div class="w-1/4 md:w-1/3 flex flex-row gap-2 justify-start align-middle items-center">
      <p>Date</p>
      <button on:click={() => handleSort('updated')}>
        {#key sortOrder.updated}
          <FilterIcon order={sortOrder.updated} />
        {/key}
      </button>
    </div>
  </div>
  <!-- Projects -->
  <div class="flex flex-row gap-8 md:gap-4 relative w-full">
    <div
      class="flex flex-col w-full gap-2"
      role="menu"
      tabindex="0"
      on:mouseenter={handleMenuHover}
      on:mouseleave={handleMenuLeave}
    >
      {#if menuHover}
        <div
          class="absolute h-8 bg-transparent md:bg-stone-900 z-0 w-full"
          style="top: {$menuHighlight}px;"
        />
      {/if}
      {#key hovered}
        {#key data}
        {#each data.data as item, dat}
          <a
            href={'projects/' + item.slug}
            data-name={item.title}
            on:mouseenter={(e) => handleLinkHover(e)}
            class="main-link hidden md:flex bg-stone-900 text-stone-300 justify-around align-middle text-left text-sm lg:text-xl font-mono transition-all p-2 md:p-0 md:text-stone-900 md:bg-transparent hover:cursor-pointer z-10 hover:text-stone-300 flex-row w-full min-h-32 md:min-h-0"
          >
            <div class="w-1/3 flex-row gap-2 justify-start align-middle items-center">
              <div class="flex flex-row gap-4 items-center">
                <ProjectIcon isResearch={item.isResearch} />
                <h3 class="font-serif md:font-mono text-lg md:text-sm lg:text-md">{item.title}</h3>
              </div>
            </div>
            <div class="w-1/3 flex flex-row gap-2 justify-start align-middle items-center">
              <p class="text-sm md:text-md">{item.subtitle}</p>
            </div>
            <div class="w-1/4 md:w-1/3 flex flex-row gap-2 justify-start align-middle items-center">
              <p class="text-sm md:text-md">{new Date(item.updated).getFullYear()}</p>
            </div>
          </a>

          <!-- Mobile View -->
          <a
            href={'projects/' + item.slug}
            data-name={item.title}
            on:mouseenter={(e) => handleLinkHover(e)}
            class="main-link flex md:hidden bg-stone-900 text-stone-300 justify-start align-middle text-left text-sm font-mono transition-all p-2 hover:cursor-pointer flex-row w-full h-20 hover:bg-stone-900/95 hover:scale-[101%]"
          >
            <div class="flex flex-row gap-2 justify-between items-center w-full">
              <div class="flex justify-center align-middle w-12">
                <ProjectIcon isResearch={item.isResearch} />
              </div>
              <div class="flex flex-1 flex-col self-end">
                <h3 class="font-serif text-2xl">{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <p class="self-end">{new Date(item.updated).getFullYear()}</p>
              <div class="h-full w-auto text-stone-300 flex justify-center align-middle">
                <IconArrowRight size={48} class="self-center transform -rotate-45"/>
              </div>
            </div>
          </a>
        {/each}
          {/key}
      {/key}
    </div>
  </div>
</div>
{/if}