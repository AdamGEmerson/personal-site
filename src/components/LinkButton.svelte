<script lang="ts">
    import { goto } from '$app/navigation';
    export let route: string | URL;
    export let text;
    export let width = '144px';
    export let height = '64px';
    export let textSize = 'text-2xl';
</script>

<button class="theme-button bg-gradient-to-br from-hero-blue to-hero-green font-bold text-black {textSize} drop-shadow-theme-button hover:drop-shadow-theme-button-hover"
        style="width: {width}; height: {height}"
        on:click={goto(route)}>
    {text}
</button>

<style>
    .theme-button {
        /*animation: morph 8s ease-in-out infinite;*/
        border-radius: 32px;
        transition: transform;
        transition-duration: 1000ms;
    }

    .theme-button:hover {
        animation: morph 4s infinite linear;
        transform: scale(105%);
        transition: all;
        border-radius: 70% 60% 60% 80%;
        transition-duration: 1000ms;

    }
    @keyframes morph {
        0% {
            border-radius: 32px;
        }
        25% {
            border-radius: 80% 70% 60% 60%;
        }
        50% {
            border-radius: 60% 80% 70% 60%;
        }
        75% {
            border-radius: 60% 60% 80% 70%;
        }
        100% {
            border-radius: 32px;
        }
    }
</style>