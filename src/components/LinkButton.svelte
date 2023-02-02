<script lang="ts">
    import {IconBook} from "@tabler/icons-svelte"
    import { goto } from '$app/navigation';
    export let route: string | URL;
    export let text;
    export let icon=null;
    export let styles:string;
    export let textSize = 'text-2xl';
</script>

<button class="theme-button w-32 md:w-32 h-12 font-bold text-white bg-gray-800 border-gray-800 border text-xl rounded-2xl text-dark-primary-text"
        on:click={goto(route)}>
        <span class="flex justify-center space-x-2 mx-4 align-middle space-y-1 items-center">
            {#if icon}
                <svelte:component this={icon} size="24"/>
            {/if}
            <span>{text}</span>
        </span>
</button>

<style>
    .theme-button {
        transition: all 300ms ease-in-out;
        @apply bg-opacity-60;
        transform: scale(100%);
    }

    .theme-button:hover {
        transform: scale(102%);
        @apply bg-opacity-90;
        @apply text-hero-blue;
        transition: all 300ms ease-in-out;
    }
</style>