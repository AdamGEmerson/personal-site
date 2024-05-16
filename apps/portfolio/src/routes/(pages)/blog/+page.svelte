<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div id="work" class="h-full w-full flex flex-col gap-4 py-8" transition:slide={{duration: 800}}>
    <div class="flex flex-col bg-stone-900 text-stone-300 w-full p-4 md:p-8">
      <h1 class="text-3xl md:text-5xl xl:text-7xl font-serif font-thin">Blog</h1>
      <h2 class="font-mono bg-stone-900 text-stone-300 text-sm">
        Thoughts and musings on software dev and more.
      </h2>
    </div>
    <div class="text-center font-mono">
      Check back soon!
    </div>
  </div>

{/if}