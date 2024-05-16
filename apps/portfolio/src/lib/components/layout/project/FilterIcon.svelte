<script lang="ts">
  import { IconCaretDownFilled, IconCaretUpDown, IconCaretUpFilled } from "@tabler/icons-svelte";
  export let order: SortOrder;
</script>

{#if order === 'none'}
  <IconCaretUpDown size={18} class="text-stone-900/50 hover:text-stone-900" />
{:else if order === 'asc'}
  <IconCaretUpFilled size={18} class="text-stone-900/50 hover:text-stone-900" />
{:else}
  <IconCaretDownFilled size={18} class="text-stone-900/50 hover:text-stone-900" />
{/if}
