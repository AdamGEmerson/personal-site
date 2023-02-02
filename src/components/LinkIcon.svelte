<script>
    export let href;
</script>

<div class="h-12 w-12">
    <a
        class="rounded-full h-12 w-12 flex flex-auto justify-around bg-gray-800 bg-opacity-60 transition-all duration-300 hover:bg-opacity-90"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
        <slot name="icon" />
    </a>
</div>

<style>

</style>