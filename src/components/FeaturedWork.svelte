<script>
    import CarouselItem from "./CarouselItem.svelte";
    import { IconArrowLeft, IconArrowRight } from "@tabler/icons-svelte";

    let index = 0;

    let items = [
      {title: "Auragraph", link: "auragraph.io", description: "A personalized music genre exploration site leveraging the Spotify API.", active: true},
      {title: "UniVerse", link: "github.com/UniVerse", description: "An event based social network designed with university students in mind.", active: true},
    ]

</script>

<div class="h-full px-32 pb-32 bg-theme-black">
    <h1 class="font-serif text-6xl">Featured Work</h1>
    <div class="bg-hr-gradient rounded h-1 my-12"></div>
    <div class="grid grid-cols-2 carousel-container gap-16">
        {#each items as item, i}
            <CarouselItem {...item} index={i}/>
        {/each}
    </div>
</div>

<style lang="css">

</style>