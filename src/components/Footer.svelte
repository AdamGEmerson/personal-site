<script>
    import LinkIcon from "./LinkIcon.svelte";
    import {IconBrandDribbble, IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-svelte";

    let year = new Date().getFullYear()
</script>

<div class="text-sm w-full p-16 text-white z-10 relative flex justify-between items-center">
    <div class="h-full ">
        <div>Adam G. Emerson</div>
        <div>© {year}</div>
    </div>
    <div class="flex justify-start gap-6">
        <LinkIcon href="https://github.com/adamgemerson">
            <IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
        </LinkIcon>
        <LinkIcon href="https://dribbble.com/adamgemerson">
            <IconBrandDribbble slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text"/>
        </LinkIcon>
        <LinkIcon href="https://www.linkedin.com/in/adamgemerson/">
            <IconBrandLinkedin slot="icon" class="w-3/5 h-3/5 self-center text-dark-primary-text "/>
        </LinkIcon>
    </div>
</div>

<style>
</style>