<script>
  import "../app.css";
  import {IconMenu2, IconSun} from "@tabler/icons-svelte"
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<div class="h-full bg-theme-black">
    <div class="text-white p-16 p-8 z-0">
        <NavBar />
        <slot></slot>
        <Footer />
    </div>
</div>