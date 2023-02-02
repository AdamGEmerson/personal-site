<script>
    export let href;
</script>

<div class="h-8 w-8 sm:h-12 sm:w-12">
    <a
        class="relative rounded-full h-full w-full flex flex-auto justify-around bg-gray-800 bg-opacity-60 transition-all duration-300 hover:bg-opacity-90"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
        <slot name="icon" />
    </a>
</div>

<style>

</style>