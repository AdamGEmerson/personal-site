<script lang="ts">
    import LinkButton from "./LinkButton.svelte";
    import {IconBook, IconBrandGithub, IconLink} from "@tabler/icons-svelte";
    import LinkIcon from "./LinkIcon.svelte";

    export let project;
</script>

<div class="card max-w-screen-md text-white bg-gray-500 rounded-3xl bg-gray-800 bg-opacity-10 border-gray-800 border overflow-hidden backdrop-blur-lg">
    <img class="w-full h-3/5 border-b border-gray-800 object-cover" src={project.screenshots[0].url}  alt={project.screenshots[0].alt} >
    <div class="px-4 sm:px-8 py-4 h-2/5 sm:1/2 flex flex-col justify-around">
        <div class="my-0 sm:my-4">
            <h3 class="font-serif text-2xl sm:text-4xl">{project.title}</h3>
            <div class="bg-hr-gradient rounded h-0.5 my-2"></div>
        </div>
        <div class="flex justify-between space-x-2 items-center flex-wrap">
            <LinkButton route="{project.isResearch ? 'research' : 'projects'}/{project.title.toLowerCase()}" text="More" icon={IconBook}/>

            <div class="flex justify-start align-middle gap-3 my-2">
                {#if project.href}
                    <LinkIcon href={project.href}>
                        <IconLink slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
                    </LinkIcon>
                {/if}
                {#if project.githubHref}
                <LinkIcon href={project.githubHref}>
                    <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
                </LinkIcon>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        transition: all 100ms ease-in-out;
        transform: scale(100%);
        box-shadow: rgba(255, 255, 255,0) 12px 12px 12px;
    }

    .card:hover {
        transition: all 300ms linear;
        transform: scale(101%);
        box-shadow: rgba(255, 255, 255, .05) 4px 4px 16px;
    }

</style>