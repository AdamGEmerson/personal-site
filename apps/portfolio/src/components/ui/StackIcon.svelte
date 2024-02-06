<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";
  import {
    IconBrandAndroid,
    IconBrandAws,
    IconBrandD3,
    IconBrandDocker,
    IconBrandFirebase, IconBrandGithub,
    IconBrandMantine,
    IconBrandNextjs, IconBrandOpenai, IconBrandPython,
    IconBrandReact,
    IconBrandSpotify,
    IconBrandSupabase,
    IconBrandSvelte,
    IconBrandTypescript,
    IconBrandYoutube,
    IconCodeDots, IconCoffee, IconLink, IconShoppingBag
  } from "@tabler/icons-svelte";

  let iconsMap = {
    aws: IconBrandAws,
    react: IconBrandReact,
    next: IconBrandNextjs,
    docker: IconBrandDocker,
    mantine: IconBrandMantine,
    supabase: IconBrandSupabase,
    d3: IconBrandD3,
    svelte: IconBrandSvelte,
    youtube: IconBrandYoutube,
    spotify: IconBrandSpotify,
    android: IconBrandAndroid,
    firebase: IconBrandFirebase,
    java: IconCoffee,
    typescript: IconBrandTypescript,
    python: IconBrandPython,
    github: IconBrandGithub,
    openai: IconBrandOpenai,
    website: IconLink,
    amazon: IconLink,
  };

  export let brand: keyof typeof iconsMap = "react";
  let resolvedIcon: any;

  onMount(() => {
    if (!iconsMap[brand]) {
      resolvedIcon = IconCodeDots;
    } else {
      resolvedIcon = iconsMap[brand];
    }
  });
</script>

<svelte:component this={resolvedIcon} size={32} class="self-center" />