<script>
    import FeaturedWork from "../components/FeaturedWork.svelte";
    import LinkButton from "../components/LinkButton.svelte";
    import { IconChevronDown } from "@tabler/icons-svelte";
    import SocialLinks from "../components/SocialLinks.svelte";
    import illustration from "../splash_illustration_edit.png"

    let y = 0;
</script>

<div class="sm:m-8">
    <div class="absolute top-0 left-0 h-screen w-screen bg-hero-gradient">
        <img
                class="w-fit px-4 md:h-4/5 mix-blend-color-dodge relative top-10 md:float-right md:pr-32 duration-1000 ease-linear {y < 150 ? 'opacity-40' : 'opacity-0'}"
                src={illustration}
                alt="Abstract Illustration of a programmer"/>
    </div>
    <div class="h-screen relative">
        <div class="flex flex-col justify-end content-center h-5/6 md:flex-row md:justify-between md:items-center md:px-8 xl:px-32">
            <div class="w-4/5 md:w-1/2 md:h-4/5 justify-self-end">
                <h1 class="font-serif mb-8 text-6xl bg-gradient-to-r from-hero-blue to-hero-green inline-block text-transparent bg-clip-text transition-all duration-500 ease-in-out md:text-7xl xl:text-8xl drop-shadow-theme-button-hover">
                    Adam Emerson
                </h1>
                <h3 class="font-sans text-lg mb-4 font-bold text-dark-primary-text md:text-2xl">Software Engineer</h3>
                <p class="font-sans font-thin text-dark-primary-text md:text-xl">
                    3<span style="font-family: Helvetica, sans-serif">+</span> years of experience in full-stack web, desktop, and mobile application development.
                </p>
                <LinkButton styles="my-12 w-full" text="RESUME" route="/resume" />
                <SocialLinks />
            </div>
        </div>
        <div class="fixed left-1/2 bottom-0 justify-center mb-2 sm:mb-8 animate-bounce">
            <IconChevronDown class='transition-opacity duration-500 ease-in-out' style="opacity: {y > 50 ? '0' : '1'}"/>
        </div>
    </div>
    <FeaturedWork />
</div>

<svelte:window bind:scrollY={y} />
