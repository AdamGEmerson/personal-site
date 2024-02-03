<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte';
	import { linear } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let images: any[];

	let activeImage = 0;
	let intervalId: any;
	let preloadedImages: { src: string; alt: string }[] = [];

	let timer = tweened(100, {
		duration: 8000,
		easing: linear
	});

	const nextImage = () => {
		activeImage = activeImage === preloadedImages.length - 1 ? 0 : activeImage + 1;
		resetInterval();
	};

	const prevImage = () => {
		activeImage = activeImage === 0 ? preloadedImages.length - 1 : activeImage - 1;
		resetInterval();
	};

	const resetInterval = () => {
		clearInterval(intervalId);
		intervalId = setInterval(nextImage, 8000);
		timer.set(0, { duration: 0 });
		timer.set(100);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowRight') {
			nextImage();
		}

		if (event.key === 'ArrowLeft') {
			prevImage();
		}
	};

	let mounted = false;
	onMount(() => {
		// Preload images
		images.forEach((image) => {
			const img = new Image();
			img.src = image.src;
			img.alt = image.alt;
			preloadedImages.push(img);
		});

		// Countdown to next image
		resetInterval();

		window.addEventListener('keydown', handleKeydown);
		mounted = true;
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});

	$: activeImage;
</script>

{#if mounted}
	<div class="flex flex-col justify-start gap-4 w-full">
		<div class="image-gallery ring-stone-900 relative ring-4 bg-stone-900">
			{#each preloadedImages as image, i}
				{#if i === activeImage}
					<img
						src={image.src}
						alt={image.alt}
						class="object-cover object-center min-h-max h-auto max-w-full"
					/>
				{/if}
			{/each}
			<div class="flex bg-stone-300 h-1" style="width: {$timer}%" />
		</div>
		<div class="flex gap-4 items-center">
			<button
				class="hover:bg-stone-900 hover:text-stone-200 hover:scale-110 transition-all"
				on:click={prevImage}><IconArrowLeft /></button
			>
			{#each images as image, i}
				<button
					class={`ring-stone-900 ring-2 ring-inset w-4 h-4 gallery-button hover:scale-110 hover:bg-stone-900 transition-all ${
						i === activeImage ? 'active-button bg-stone-900' : 'bg-transparent'
					}`}
					on:click={() => {
						activeImage = i;
						resetInterval();
					}}
				/>
			{/each}
			<button
				class="hover:bg-stone-900 hover:text-stone-200 hover:scale-110 transition-all"
				on:click={nextImage}><IconArrowRight /></button
			>
		</div>
	</div>

	<style>
		@keyframes rotate {
			from {
				rotate: 0deg;
			}
			to {
				rotate: 90deg;
			}
		}

		.gallery-button {
			scale: 1;
			transform: rotate(0deg);
			transition: 0.2s ease-in-out;
		}

		.active-button {
			transition: all 0.5s ease-in-out;
			animation: rotate 8s ease-in infinite;
			@apply bg-stone-900;
		}
	</style>
{/if}
