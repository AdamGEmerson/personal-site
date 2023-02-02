<script>
    import FeaturedWork from "../../components/FeaturedWork.svelte";
    import HeroButton from "../../components/HeroButton.svelte";
    import { IconChevronDown } from "@tabler/icons-svelte";
    import SocialLinks from "../../components/SocialLinks.svelte";
    import illustration from "../../splash_illustration_edit.png"
    import {fade, fly} from "svelte/transition";
    import {quadInOut} from "svelte/easing";
    import {onMount} from "svelte";

    let mounted = false;

    onMount( () => {
      mounted = true;
    })

    export let data;

    let y = 0;
</script>

<div class="sm:m-8">
    {#if mounted}
    <div  class="absolute top-0 left-0 h-screen w-screen">
        <img in:fade={{delay: 100, duration: 1000}} out:fade={{ duration: 200}}
                class="w-fit px-4 md:h-4/5 mix-blend-color-dodge relative top-10 md:float-right md:pr-32 duration-1000 ease-linear {y < 150 ? 'opacity-40' : 'opacity-0'}"
                src={illustration}
                alt="Abstract Illustration of a programmer"/>
    </div>
    <div class="h-screen relative">
        <div class="flex flex-col justify-end content-center h-5/6 md:flex-row md:justify-between md:items-center">
            <div class="w-4/5 md:w-1/2 md:h-4/5 justify-self-end">
                <div in:fade={{ duration:500, easing:quadInOut}} out:fade={{duration:200}}>
                    <div in:fly={{delay:100, duration:800, y:10, easing:quadInOut}}>
                        <h1 class="jumbotron drop-shadow-theme-button-hover">{data.info.name}</h1>
                        <h3>{data.info.title}</h3>
                        <p class="font-sans font-thin text-dark-primary-text md:text-xl">
                            {data.info.description}
                        </p>
                    </div>
                </div>
                <div in:fade={{ duration:500, easing:quadInOut}} out:fade={{duration:200}}>
                    <div in:fly={{delay:400, duration:500, y:10, easing:quadInOut}} out:fade={{duration:200}} >
                        <HeroButton styles="my-12 w-full" text="RESUME" route="/resume"/>
                    </div>
                    <div in:fly={{delay:600, duration:500, y:10, easing:quadInOut}} out:fade={{duration:200}} >
                        <SocialLinks />
                    </div>
                </div>

            </div>
        </div>
        <div class="fixed left-1/2 bottom-0 justify-center mb-2 sm:mb-8 animate-bounce">
            <IconChevronDown class='transition-opacity duration-500 ease-in-out' style="opacity: {y > 50 ? '0' : '1'}"/>
        </div>
    </div>
    <FeaturedWork />
    {/if}
</div>


<svelte:window bind:scrollY={y} />