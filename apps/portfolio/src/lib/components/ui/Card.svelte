<script lang="ts">
  import tilt from 'svelte-tilt';
  import { fly } from 'svelte/transition';
  import { onMount } from "svelte";
  import { quartInOut } from "svelte/easing";
  import { IconGeometry, IconNotebook, IconWriting } from "@tabler/icons-svelte";

  export let title = 'Card Title';
  export let description = 'This is a description of the component.';

  export let href = '#';
  export let i = 1;
  let className = '';

  export { className as class };


  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <a
    in:fly={{duration: 500, y: -100, delay: 800 + 200 * i, easing:quartInOut}}
    out:fly={{duration: 500, x: 100, easing:quartInOut}}
    use:tilt={{strength: .2}}
    class="bg-stone-900 flex-1 p-8 relative hover:shadow-lg w-full h-full {className ? className : ''} {i === 1 ? 'order-first md:order-none' : ''}"
    {href}
  >
    <h3 class="font-serif text-xl z-20">{title}</h3>
    <p class="font-mono text-xs py-2 z-20">{description}</p>
    <slot />
    {#if title === "Projects"}
      <IconGeometry class="absolute top-0 bottom-0 h-full w-full left-0 right-0 text-neutral-600 opacity-10 z-0"/>
    {:else if title === "Blog"}
      <IconNotebook class="absolute top-0 bottom-0 h-full w-full left-0 right-0 text-neutral-600 opacity-10 z-0"/>
    {/if}
  </a>
{/if}

<style>

</style>
