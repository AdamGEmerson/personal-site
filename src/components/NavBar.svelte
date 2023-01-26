<script lang="ts">
    import {IconMenu2, IconSun, IconX} from "@tabler/icons-svelte";
    import NavLink from "./NavLink.svelte";

    let activeLink = 0;

    const links = [
        { name: 'Home', route: '/' },
        { name: 'CV', route: '/cv' },
        { name: 'Work', route: '/work' },
        { name: 'About', route: '/about' }
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

<div class="fixed top-0 left-0 z-40 px-8 py-4 w-screen flex justify-between transition-all duration-300 border-gray-800 border-b {y > 40 ? 'bg-black bg-opacity-30 backdrop-blur-sm' : '' } {opened ? '-translate-y-full' : 'translate-y-0'}">
    <button on:click={handleOpenNav}>
        <IconMenu2 />
    </button>
    <IconSun />
</div>

<div class="fixed top-0 left-0 z-40 h-screen w-1/3 px-8 py-4 overflow-y-auto transition-transform duration-500 ease-in-out bg-black bg-opacity-90 backdrop-blur-sm border-r border-gray-800 {opened ? 'translate-x-0' : '-translate-x-full'}">
    <button on:click={handleCloseNav}>
        <IconX />
    </button>
    <div class="my-8 mx-8 flex flex-col" >
        {#each links as link, i}
            <NavLink name={link.name} route={link.route} index={i} bind:activeLink={activeLink} on:closeNav={handleCloseNav} />
        {/each}
    </div>
</div>

<style>

</style>

<svelte:window bind:scrollY={y} />