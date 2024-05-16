<script>
  export let href = '#';
  export let alt = '';
</script>

<div class="square bg-stone-900 h-20 w-full md:h-28 md:w-28 hover:shadow-lg">
  <a {href} class="h-full w-full flex justify-center items-center" aria-label={alt}>
    <slot />
  </a>
</div>

<style>
  .square {
    --shine-deg: 45deg;
    position: relative;
    overflow: hidden;

    background-repeat: no-repeat;
    background-position: -100% 0, 0 0;

    background-image: linear-gradient(
      var(--shine-deg),
      transparent 20%,
      transparent 40%,
      rgb(68, 68, 68, 0.2) 50%,
      rgb(68, 68, 68, 0.2) 55%,
      transparent 70%,
      transparent 100%
    );

    background-size: 250% 250%, 100% 100%;
    transition: background-position 1.5s ease;
  }

  .square:hover {
    background-position: 200%0, 0 0;
    transition-duration: 1.5s;
    scale: 101%;
  }

</style>
