<script>
    import PageTitle from "../../../components/PageTitle.svelte";
    import {page} from "$app/stores";

    console.log($page.route.id)
</script>

<div class="relative">
    <PageTitle title="Title"/>
    <slot></slot>
</div>



