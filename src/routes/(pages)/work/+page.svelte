<script>
  import {fly} from "svelte/transition"
  import CarouselItem from "../../../components/ProjectCard.svelte";
  import { IconArrowLeft, IconArrowRight } from "@tabler/icons-svelte";

  let index = 0;

  let items = [
    {title: "Auragraph", link: "auragraph.io", description: "A personalized music genre exploration site leveraging the Spotify API."},
    {title: "UniVerse", link: "github.com/UniVerse", description: "An event based social network designed with university students in mind."},
    {title: "ASketch", link: "github.com/asketch", description: "A desktop application designed to help users write no-code unit tests for the alloy scripting language."},
  ]

</script>

<div id="work" class="h-full w-full my-8 pb-32 flex flex-col">
    <div class="grid grid-cols-1 sm:grid-cols-2 carousel-container gap-16">
        {#each items as item, i}
            <CarouselItem {...item} index={i}/>
        {/each}
    </div>
</div>