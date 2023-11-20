<script>
    import PageTitle from "../../components/PageTitle.svelte";
    import Footer from "../../components/Footer.svelte";
    export let data;
</script>

<div class="relative sm:mx-16">
    <PageTitle url={data.url} title={data.title}>
        <slot />
    </PageTitle>
</div>



