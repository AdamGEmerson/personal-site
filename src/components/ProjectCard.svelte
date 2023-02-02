<script lang="ts">
    import LinkButton from "./LinkButton.svelte";
    import {IconBook, IconBrandGithub, IconBrandLinkedin, IconLink} from "@tabler/icons-svelte";
    import LinkIcon from "./LinkIcon.svelte";
    export let title: string;
    export let link: string;
    export let githubLink: string;
    export let description: string;
    export let image: string;
</script>

<div class="max-w-md text-white bg-gray-500 rounded-3xl bg-gray-800 bg-opacity-10 border-gray-800 border overflow-hidden">
    <img class="w-full h-1/2 border-b border-gray-800" src={image}  alt="Project Cover">
    <div class="px-8 py-4">
        <div class="h-1/2">
            <div class="my-4">
                <h3 class="font-serif font-bold text-4xl md:text-4xl">{title}</h3>
                <div class="bg-hr-gradient rounded h-0.5 mb-6 mt-2"></div>
                <p class="font-sans sm:text-lg w-full font-thin">
                    {description}
                </p>
            </div>
            <div class="flex justify-between space-x-2 items-center flex-wrap">
                <LinkButton route="/work/{title.toLowerCase()}" text="More" icon={IconBook}/>
                <div class="flex justify-start align-middle gap-3 my-2">
                    <LinkIcon href={link}>
                        <IconLink slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
                    </LinkIcon>
                    <LinkIcon href={githubLink}>
                        <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
                    </LinkIcon>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
</style>