<script lang="ts">
    import LinkButton from "./LinkButton.svelte";
    import { IconBrandGithub, IconLink } from "@tabler/icons-svelte";
    export let title: string;
    export let link: string;
    export let description: string;
    export let active: boolean;
</script>

<div class="relative text-white">
    <div class="w-full bg-gray-500 rounded-3xl bg-opacity-10 border-gray-800 border p-8 z-10">
        <h3 class="font-serif text-3xl sm:text-5xl">{title}</h3>
        <div class="flex justify-start flex-wrap align-middle gap-3 my-4">
            <div class="font-sans text-md sm:text-lg font-thin">{link}</div>
            <IconLink />
            <IconBrandGithub />
        </div>
        <p class="font-sans sm:text-xl w-full font-thin mb-8">
            {description}
        </p>
        <LinkButton route="/work/{title}" text="More"/>
    </div>
</div>

<style>

</style>