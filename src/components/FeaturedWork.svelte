<script>
    import ProjectCard from "./ProjectCard.svelte";
    import auragraph from "../auragraphPreview.png"
    import universe from "../universePreview.png"
    import asketch from "../asketchPreview.png"
    import { IconArrowLeft, IconArrowRight } from "@tabler/icons-svelte";

    let index = 0;

    let items = [
      {title: "Auragraph", link: "auragraph.io", description: "A personalized music genre exploration site leveraging the Spotify API.", image: auragraph},
      {title: "UniVerse", link: "github.com/UniVerse", description: "An event based social network designed with university students in mind.", image: universe},
      {title: "ASketch", link: "github.com/UniVerse", description: "Alloy testing unit testing application for no-code tests.", image:asketch},
    ]

</script>

<div id="work" class="h-full w-full my-8 pb-32 bg-theme-black flex flex-col">
    <h1 class="font-serif text-4xl sm:text-6xl">Featured Work</h1>
    <div class="bg-hr-gradient rounded h-0.5 mb-12 mt-4"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 carousel-container gap-16 justify-items-center">
        {#each items as item, i}
            <ProjectCard {...item} index={i}/>
        {/each}
    </div>
</div>

<style lang="css">

</style>