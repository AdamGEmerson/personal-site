<script lang="ts">
  import { IconMicroscope, IconGeometry } from '@tabler/icons-svelte';
  export let isResearch: boolean;
</script>

{#if isResearch}
  <IconMicroscope/>
{:else}
  <IconGeometry/>
{/if}