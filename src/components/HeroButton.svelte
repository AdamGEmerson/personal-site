<script lang="ts">
    import { goto } from '$app/navigation';
    export let route: string | URL;
    export let text;
    export let styles:string;
    export let textSize = 'text-2xl';
</script>

<button class="theme-button {styles} w-5/12 sm:w-32 lg:w-48 h-12 sm:h-16 bg-gradient-to-br from-hero-blue to-hero-green font-bold text-theme-black text-2xl drop-shadow-theme-button hover:drop-shadow-theme-button-hover"
        on:click={goto(route)}>
    {text}
</button>

<style>
    .theme-button {
        /*animation: morph 8s ease-in-out infinite;*/
        transition: all;
        transition-duration: 1000ms;
        border-radius: 36px 64px 43px 64px;
    }

    .theme-button:hover {
        transform: scale(105%);
        transition-duration: 1000ms;
        transition: all;
    }
</style>