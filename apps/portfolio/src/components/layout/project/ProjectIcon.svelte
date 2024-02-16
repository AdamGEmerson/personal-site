<script lang="ts">
  import { IconMicroscope, IconGeometry } from '@tabler/icons-svelte';
  export let isResearch: boolean;
  export let color:string | null = null;
</script>

{#if isResearch}
  <IconMicroscope class={`${color ? color : 'text-stone-600'}`}/>
{:else}
  <IconGeometry class={`${color ? color : 'text-stone-600'}`}/>
{/if}