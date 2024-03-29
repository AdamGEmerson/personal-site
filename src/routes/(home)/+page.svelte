<script>
	import { IconChevronDown } from '@tabler/icons-svelte';
	import FeaturedWork from '/src/components/FeaturedWork.svelte';
	import HeroButton from '/src/components/HeroButton.svelte';
	import SocialLinks from '/src/components/SocialLinks.svelte';
	import { fade, fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import illustration from '/src/images/home/splash_illustration_edit.png';
	import ogImage from '/src/images/adamemerson_og.png';

	let mounted = false;
	let y = 0;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Adam G. Emerson</title>
	<meta
		name="description"
		content="Adam G. Emerson - Software Engineering and HCI Research Portfolio"
	/>
	<link rel="canonical" href="https://adamemerson.com" />
	<meta property="og:title" content="Adam G. Emerson" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content="https://adamemerson.com" />
	<meta
		property="og:description"
		content="Adam G. Emerson - Software Engineering and HCI Research Portfolio"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@adamgemerson" />
	<meta name="twitter:creator" content="@adamgemerson" />
	<meta name="twitter:title" content="Adam G. Emerson" />
	<meta name="twitter:description" content="Software Engineering and Web Development Portfolio" />
</svelte:head>

<div class="sm:m-8">
	{#if mounted}
		<div class="absolute top-0 left-0 h-screen w-screen">
			<img
				in:fade={{ delay: 100, duration: 500 }}
				out:fade={{ duration: 200 }}
				class="w-fit px-4 md:h-4/5 mix-blend-color-dodge relative top-10 md:float-right md:pr-32 duration-1000 ease-linear {y <
				150
					? 'opacity-40'
					: 'opacity-0'}"
				src={illustration}
				alt="Abstract Illustration of a programmer"
				loading="eager"
			/>
		</div>
		<div class="h-screen relative">
			<div
				class="flex flex-col justify-end content-center h-5/6 md:flex-row md:justify-between md:items-center"
			>
				<div class="w-4/5 md:w-1/2 md:h-4/5 justify-self-end">
					<div in:fade={{ duration: 500, easing: quadInOut }} out:fade={{ duration: 200 }}>
						<div in:fly={{ delay: 100, duration: 800, y: 10, easing: quadInOut }}>
							<h1 class="jumbotron drop-shadow-theme-button-hover">Adam G. Emerson</h1>
							<h2>HCI Research and Web Development</h2>
							<p class="font-sans font-thin text-dark-primary-text md:text-xl">
								3+ years of experience in full-stack web, desktop, and mobile application
								development.
							</p>
						</div>
					</div>
					<div in:fade={{ duration: 500, easing: quadInOut }} out:fade={{ duration: 200 }}>
						<div
							in:fly={{ delay: 400, duration: 500, y: 10, easing: quadInOut }}
							out:fade={{ duration: 200 }}
						>
							<HeroButton styles="my-12" text="CV" route="/cv" />
						</div>
						<div
							in:fly={{ delay: 600, duration: 500, y: 10, easing: quadInOut }}
							out:fade={{ duration: 200 }}
						>
							<SocialLinks />
						</div>
					</div>
				</div>
			</div>
			<div class="fixed left-1/2 bottom-0 justify-center mb-2 sm:mb-8 animate-bounce">
				<IconChevronDown
					class="transition-opacity duration-500 ease-in-out"
					style="opacity: {y > 50 ? '0' : '1'}"
				/>
			</div>
		</div>
		<FeaturedWork {y} />
	{/if}
</div>
<svelte:window bind:scrollY={y} />
