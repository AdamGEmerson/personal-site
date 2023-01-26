<script>
    import FeaturedWork from "../components/FeaturedWork.svelte";
    import LinkButton from "../components/LinkButton.svelte";
    import { IconChevronDown } from "@tabler/icons-svelte";
    import SocialLinks from "../components/SocialLinks.svelte";

    let y = 0;
</script>

<div class="m-8">
    <div class="absolute top-0 left-0 h-screen w-screen bg-hero-gradient"></div>
    <div class="h-screen relative">
            <div class="flex justify-around items-center h-full px-32">
                <div class="w-1/2 h-4/5">
                    <h1 class="font-serif text-8xl bg-gradient-to-r from-hero-blue to-hero-green inline-block text-transparent bg-clip-text transition-all duration-500 ease-in-out">
                        Adam Emerson
                    </h1>
                    <h3 class="font-sans text-2xl my-8 font-bold text-dark-primary-text">Software Engineer</h3>
                    <p class="font-sans text-xl font-thin text-dark-primary-text mb-16">
                        3<span style="font-family: Helvetica, sans-serif">+</span> years of experience in full-stack web, desktop, and mobile application development.
                    </p>
                    <LinkButton text="CV" route="/cv"/>
                    <SocialLinks />
                </div>
                <div class="w-1/2 h-4/5">
                    <div
                        class="h-full w-full"
                        style="
                            background-image: url(/splash_illustration_edit.png);
                            background-size: contain;
                            background-position: top;
                            background-repeat: no-repeat;
                            overflow: visible;
                            mix-blend-mode: color-dodge;
                            opacity: 1;"
                    ></div>
            </div>
        </div>
        <div class="fixed left-1/2 bottom-0 justify-center mb-24 animate-bounce">
            <IconChevronDown class='transition-opacity duration-500 ease-in-out' style="opacity: {y > 50 ? '0' : '1'}"/>
        </div>
    </div>
    <FeaturedWork />
</div>

<svelte:window bind:scrollY={y} />
