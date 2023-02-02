<script>
    import { IconBrandGithub, IconBrandLinkedin, IconBrandDribbble} from "@tabler/icons-svelte";
    import LinkIcon from "./LinkIcon.svelte";
</script>

<div class="flex justify-start gap-6">
    <LinkIcon href="https://github.com/adamgemerson">
        <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
    </LinkIcon >
    <LinkIcon href="https://dribbble.com/adamgemerson">
        <IconBrandDribbble slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
    </LinkIcon>
    <LinkIcon href="https://www.linkedin.com/in/adamgemerson/">
        <IconBrandLinkedin slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
    </LinkIcon>
</div>