<script lang="ts">
    import { goto } from '$app/navigation';
    import {SvelteComponentTyped} from "svelte";
    export let route: string | URL;
    export let text;
    export let icon=null;
</script>

<button class="theme-button w-24 sm:w-32 h-8 sm:h-12 font-bold text-white bg-gray-800 border-gray-800 border text-sm sm:text-xl rounded-2xl text-dark-primary-text"
        on:click={goto(route)}>
        <span class="flex justify-center space-x-2 mx-4 align-middle space-y-1 items-center">
            {#if icon}
                <svelte:component this={icon} class="w-4 sm:w-8"/>
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