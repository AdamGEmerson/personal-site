<script>
    import {fly, fade} from "svelte/transition";
    import {quadOut} from "svelte/easing";
    export let url;
    export let title;
</script>

{#key url}
    <div>
        <h3 in:fly={{duration: 300, x:-20, easing: quadOut, delay: 300}} out:fade={{duration: 200}} class="font-serif font-normal text-3xl text-dark-primary-text my-4">{title}</h3>
        <div in:fly={{duration: 300, easing: quadOut, delay: 300}} out:fade={{duration: 200}} class="bg-hr-gradient rounded h-0.5 mb-12"></div>
        <div in:fly={{duration: 400, delay: 300, y:20}} out:fade={{duration: 200}}>
            <slot />
        </div>
    </div>
{/key}