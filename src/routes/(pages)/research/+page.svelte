<script>
  import ProjectCard from "/src/components/ProjectCard.svelte";
  import { projects } from "/src/stores/featured";

  let pages;
  projects.subscribe(value => {
    pages = value
  })
</script>

<div id="work" class="h-full w-full my-8 pb-32 flex flex-col">
    <div class="grid grid-cols-1 sm:grid-cols-2 carousel-container gap-16">
        {#each Object.entries(pages) as [slug, project], i}
            {#if project.isResearch}
                <ProjectCard {project} />
            {/if}
        {/each}
    </div>
</div>