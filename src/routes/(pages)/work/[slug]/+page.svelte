<script>
    import {page} from "$app/stores"
    import LinkIcon from "../../../../components/LinkIcon.svelte";
    import {IconBrandGithub, IconLink} from "@tabler/icons-svelte";
</script>

<h1 class="text-4xl font-sans font-bold">{$page.params.slug}</h1>
<div class="flex justify-start flex-wrap align-middle gap-3 my-4">
    <LinkIcon>
        <IconLink slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
    </LinkIcon>
    <LinkIcon>
        <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
    </LinkIcon>
</div>