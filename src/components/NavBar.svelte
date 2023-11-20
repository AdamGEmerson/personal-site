``<script lang="ts">
  import {IconCertificate2, IconCode, IconHome, IconMenu2, IconMicroscope, IconSun, IconX} from "@tabler/icons-svelte";
    import {fly, slide} from "svelte/transition"
    import {quadOut} from "svelte/easing";
    import NavLink from "./NavLink.svelte";

    let activeLink = 0;

    const links = [
        { name: 'Home', route: '/', icon: IconHome },
        { name: 'Research', route: '/research', icon: IconMicroscope},
        { name: 'Work', route: '/work', icon: IconCode },
        { name: 'CV', route: '/cv', icon: IconCertificate2}
    ]

    export let opened = false;
    let y = 0;

    function handleOpenNav() {
        opened = true;
    }

    function handleCloseNav() {
        opened = false;
    }

</script>

{#if opened}
<div transition:fly={{duration: 400, x: -24, easing: quadOut}} class="fixed flex flex-col items-center space-y-1 justify-start top-0 left-0 z-40 h-screen w-20 transition-transform duration-500 ease-in-out bg-black sm:bg-transparent bg-opacity-80 backdrop-blur-sm border-r border-gray-800">
    <button on:click={handleCloseNav} class="mb-4 pt-4">
        <IconX />
    </button>
    {#each links as link, i}
        <NavLink name={link.name} route={link.route} icon={link.icon} index={i} bind:activeLink={activeLink} on:closeNav={handleCloseNav} />
    {/each}
</div>
{:else}
<div transition:slide={{duration: 400, easing: quadOut}} class="fixed top-0 left-0 z-40 px-8 py-4 w-screen h-16 flex justify-between transition-all border-gray-800 duration-300 {y > 40 ? 'bg-black bg-opacity-30 backdrop-blur-sm border-gray-800 border-b' : '' }">
    <button on:click={handleOpenNav}>
        <IconMenu2 />
    </button>
<!--    <IconSun />-->
</div>
{/if}

<style>

</style>

<svelte:window bind:scrollY={y} />``