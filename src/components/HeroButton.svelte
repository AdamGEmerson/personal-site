<script lang="ts">
    import { goto } from '$app/navigation';
    export let route: string | URL;
    export let styles:string;
</script>

<button class="theme-button {styles}  w-32 h-12 text-xl bg-gradient-to-br from-hero-blue to-hero-green font-sans font-bold text-theme-black drop-shadow-theme-button hover:drop-shadow-theme-button-hover"
        on:click={goto(route)}>
    CV
</button>

<style>
    .theme-button {
        transition: transform 300ms ease-in-out;
        transform: scale(100%);
        border-radius: 36px 64px 43px 64px;
    }

    .theme-button:hover {
        transform: scale(105%);
        transition: transform 300ms ease-in-out;
    }

</style>