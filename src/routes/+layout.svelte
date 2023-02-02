<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<div class="h-full min-h-screen bg-theme-black">
    <div class="fixed top-0 left-0 h-screen w-screen bg-hero-gradient"></div>
    <div class="text-white p-16 p-8 z-0">
        <NavBar />
        <div class="md:px-8 xl:px-32">
            <slot></slot>
        </div>
        <Footer />
    </div>
</div>