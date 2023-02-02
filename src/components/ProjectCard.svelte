<script lang="ts">
    import LinkButton from "./LinkButton.svelte";
    import {IconBook, IconBrandGithub, IconBrandLinkedin, IconLink} from "@tabler/icons-svelte";
    import LinkIcon from "./LinkIcon.svelte";
    export let title: string;
    export let link: string;
    export let githubLink: string;
    export let description: string;
</script>

<div class="relative text-white">
    <div class="w-full bg-gray-500 rounded-3xl bg-opacity-10 border-gray-800 border p-8 z-10">
        <h3 class="font-serif text-3xl sm:text-5xl">{title}</h3>
        <div class="flex justify-start flex-wrap align-middle gap-3 my-4">
            <LinkIcon href={link}>
                <IconLink slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
            </LinkIcon>
            <LinkIcon href={githubLink}>
                <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
            </LinkIcon>
        </div>
        <p class="font-sans sm:text-xl w-full font-thin mb-8">
            {description}
        </p>
        <LinkButton route="/work/{title.toLowerCase()}" text="More" icon={IconBook}/>
    </div>
</div>

<style>
</style>