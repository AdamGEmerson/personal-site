<script lang="ts">
    import {goto} from "$app/navigation";
    import { createEventDispatcher } from 'svelte'

    export let route;
    export let name;
    export let index;
    export let activeLink;

    const dispatch = createEventDispatcher();

    function handleClick() {
        activeLink = index;
        dispatch("closeNav");
        goto(route)
    }

</script>

<button class="navlink font-serif my-4 w-auto justify-self-start text-left text-3xl {activeLink === index ? 'text-hero-blue opacity-70 pointer-events-none' : '' }" on:click={handleClick}>
    {name}
</button>

<style>

    button {
        display: inline-block;
        position: relative;
        @apply bg-transparent;
    }

    button::after {
        content: '';
        position: absolute;
        margin-top: 2px;
        transform: scaleX(0);
        left: 0;
        bottom: 0;
        height: 3px;
        @apply rounded;
        @apply bg-hr-gradient;
        width: 80%;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    button:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>