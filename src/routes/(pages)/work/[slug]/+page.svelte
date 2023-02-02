<script>
    import {page} from "$app/stores"
    import { projects } from "/src/stores/pages"
    import LinkIcon from "../../../../components/LinkIcon.svelte";
    import {IconBrandGithub, IconLink} from "@tabler/icons-svelte";
    let pages;

    projects.subscribe(value => {
      pages = value;
    });

    let project = pages[$page.params.slug];

</script>

<div class="flex justify-start flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 my-4">
    <h1 class="text-5xl font-serif font-thin">{project.title}</h1>
    <div class="flex flex-row justify-items-start space-x-4">
        <LinkIcon href={project.href}>
            <IconLink slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
        </LinkIcon>
        <LinkIcon href={project.githubHref}>
            <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
        </LinkIcon>
    </div>
</div>
<h3 class="font-sans font-bold text-lg mt-12">Made With</h3>
<div class="flex flex-row justify-items-start space-x-2 w-full pl-4">
    {#each project.madeWith as tech}
        <div class="w-16 h-16 flex flex-col space-y-2 items-center">
            <svelte:component this={tech.icon} slot="icon" class="w-4/5 h-4/5 self-center text-dark-primary-text"/>
            <span class="text-xs">{tech.name}</span>
        </div>
    {/each}
</div>
<h3 class="font-sans font-bold text-lg mt-12">About</h3>
<div class="pl-4">
    <p>{project.description}</p>
</div>
<h3 class="font-sans font-bold text-lg mt-12">Screenshots</h3>

<div class="flex flex flex-col space-y-8 items-center w-full p-4">
    {#each project.screenshots as pic}
        <div class="w-full rounded-3xl overflow-hidden border border-gray-800">
            <img src={pic.url} alt={pic.alt} class="object-cover"/>
        </div>
    {/each}
</div>
