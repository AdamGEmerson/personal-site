<script>
    import ProjectCard from "./ProjectCard.svelte";
    import auragraph from "../../static/images/auragraph/auragraphPreview.png"
    import universe from "../../static/images/universe/universePreview.png"
    import asketch from "../../static/images/asketch/asketchPreview.png"
    import { projects } from "/src/stores/pages";
    import {onMount} from "svelte";

    let pages;
    projects.subscribe(value => {
      pages = value;
    });

    let index = 0;

    onMount( () => console.log(pages))

</script>

<div id="work" class="relative h-full w-full my-8 pb-32 flex flex-col">
    <h1 class="font-serif text-4xl sm:text-6xl">Featured Work</h1>
    <div class="bg-hr-gradient rounded h-0.5 mb-12 mt-4"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 carousel-container gap-8">
        {#each Object.entries(pages) as [slug, project], i}
            <ProjectCard {project} />
        {/each}
    </div>
</div>

<style lang="css">

</style>