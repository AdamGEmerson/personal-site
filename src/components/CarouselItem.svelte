<script lang="ts">
    import LinkButton from "./LinkButton.svelte";
    import { IconBrandGithub, IconLink } from "@tabler/icons-svelte";
    export let title: string;
    export let link: string;
    export let description: string;
    export let active: boolean;
</script>

<div class="w-5/6 transition-all ease-in-out duration-1000 {active ? 'translate-x-0' : 'translate-x-full hidden'} transform slide">
    <h3 class="font-serif text-5xl">{title}</h3>
    <div class="flex justify-start align-middle gap-3 my-4">
        <div class="font-sans text-2xl font-thin">{link}</div>
        <IconLink />
        <IconBrandGithub />
    </div>
    <p class="font-sans text-xl w-full font-thin text-dark-primary-text mb-8">
        {description}
    </p>
    <LinkButton route="/work/{title}" text="More" height="40px" width="80px" textSize="text-lg"/>
</div>

<style>

</style>