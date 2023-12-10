<script lang="ts">
	import ogImage from '/src/images/adamemerson_og.png';
	import { Marquee } from 'flowbite-svelte';
	import { fly, slide, blur } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { draggable } from '@neodrag/svelte';
	import { animate, spring } from 'motion';

	let title = 'Adam G. Emerson';
	let typedTitle = '';
	let index = 0;
	let isTyping = false;
	let position = { x: 0, y: 0 };
	let typeWriter: NodeJS.Timeout; // eslint-disable-line no-undef
	const typing = () => (typeWriter = setInterval(typeChar, 100));
	const stopTyping = () => clearInterval(typeWriter);

	const typeChar = () => {
		if (index < title.length) {
			isTyping = true;
			typedTitle += title[index];
			index += 1;
		} else {
			stopTyping();
			return;
		}
	};

	function goTo(event: Event, page: string) {
		event.preventDefault();
		goto(page);
	}

	let hoveredLink = '';
	function handleLinkHover(event: Event, link: string) {
		event.preventDefault();
		hoveredLink = link;
	}

	let mounted = false;
	let y = 0;

	onMount(() => {
		mounted = true;
		typing();
		animate(
			'#card',
			{
				scale: [1.2, 1],
				rotate: [15],
				y: [600, 210]
			},
			{ duration: 0.4, delay: 1.5, easing: spring({ stiffness: 40, damping: 12 }) }
		);
		animate(
			'#card-2',
			{
				scale: [1.2, 1],
				rotate: [-10],
				x: 40,
				y: [600, 200]
			},
			{ duration: 0.4, delay: 1.5, easing: spring({ stiffness: 40, damping: 12 }) }
		);
		animate(
			'#card-3',
			{
				scale: [1.2, 1],
				rotate: [36],
				x: 100,
				y: [600, 190]
			},
			{ duration: 0.4, delay: 1.5, easing: spring({ stiffness: 40, damping: 15 }) }
		);
	});

	const handleCardHover = () => {
		animate('#card', {
			rotate: [15]
		});
	};
	let cardPos = { x: 0, y: 0 };
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
		content="Adam Emerson is a full stack web developer and software engineer. He is also a researcher in the field of Human Computer Interaction."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@adamgemerson" />
	<meta name="twitter:creator" content="@adamgemerson" />
	<meta name="twitter:title" content="Adam G. Emerson" />
	<meta name="twitter:description" content="Software Engineering and Web Development Portfolio" />
</svelte:head>

<div class="m-8 p-4">
	<h1 class="hidden">Adam G. Emerson</h1>
	<h2 class="text-6xl lg:text-8xl font-serif p-4" out:fly>{typedTitle}</h2>
	<div class="flex flex-col mx-4 gap-4">
		{#if mounted}
			<div in:slide={{ easing: cubicInOut, duration: 900, axis: 'x' }} out:fly>
				<Marquee
					class="text-lg lg:text-xl font-mono bg-stone-900 text-stone-300 p-1"
					speed={0.1}
					hoverSpeed={0}
				>
					<div class="mx-8 whitespace-nowrap">Full Stack Development</div>
					<div class="mx-8 whitespace-nowrap">Web Design</div>
					<div class="mx-8 whitespace-nowrap">Human Computer Interaction</div>
					<div class="mx-8 whitespace-nowrap">Internet Magic</div>
				</Marquee>
			</div>
			<!--			<div in:fly={{ y: 100, easing: quartOut, duration: 1000, delay: 1000 }} out:fly>-->
			<!--				<SocialLinks />-->
			<!--			</div>-->
			<div class="flex flex-col w-4/6 sm:w-1/2">
				<div
					transition:blur={{ delay: 200, duration: 1000 }}
					role="button"
					tabindex={0}
					class="main-link text-lg sm:text-xl font-mono group p-1 px-2 hover:cursor-pointer hover:bg-stone-900"
					on:click={(e) => goTo(e, '/projects')}
					on:keypress={(e) => goTo(e, '/projects')}
					on:mouseenter={() => (hoveredLink = '/projects')}
				>
					<a href="/projects" class="group-hover:text-stone-300">Projects</a>
				</div>
				<div
					transition:blur={{ delay: 400, duration: 1000 }}
					role="button"
					tabindex={1}
					class="text-lg sm:text-xl font-mono group hover:bg-stone-900 p-1 px-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/research')}
					on:keypress={(e) => goTo(e, '/research')}
				>
					<a href="/research" class="group-hover:text-stone-300">Research</a>
				</div>
				<div
					transition:blur={{ delay: 600, duration: 1000 }}
					role="button"
					tabindex={2}
					class="text-lg sm:text-xl font-mono group hover:bg-stone-900 p-1 px-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/cv')}
					on:keypress={(e) => goTo(e, '/cv')}
				>
					<a href="/cv" class="group-hover:text-stone-300"> CV </a>
				</div>
			</div>
		{/if}
	</div>
</div>

<div
	role="complementary"
	id="card"
	use:draggable={{
		onDrag: ({ offsetX, offsetY }) => {
			animate('#card', { x: offsetX, y: offsetY });
		}
	}}
	on:mouseenter={() =>
		animate(
			'#card',
			{ scale: 1.05, zIndex: 50, rotate: 0 },
			{ easing: spring({ stiffness: 200, damping: 14 }) }
		)}
	on:mouseleave={() => animate('#card', { scale: 1, zIndex: 20 })}
	class="absolute w-48 h-72 md:w-64 md:h-96 bg-indigo-400 rounded-2xl shadow-lg z-20 hover:cursor-grab"
/>
<div
	role="complementary"
	id="card-2"
	use:draggable={{
		onDrag: ({ offsetX, offsetY }) => {
			animate('#card-2', { x: offsetX, y: offsetY });
		}
	}}
	on:mouseenter={() =>
		animate(
			'#card-2',
			{ scale: 1.05, zIndex: 50, rotate: 0 },
			{ easing: spring({ stiffness: 200, damping: 14 }) }
		)}
	on:mouseleave={() => animate('#card-2', { scale: 1, zIndex: 20 })}
	class="absolute w-48 h-72 md:w-64 md:h-96 bg-amber-400 rounded-2xl shadow-lg z-20 hover:cursor-grab"
/>
<div
	role="complementary"
	id="card-3"
	use:draggable={{
		onDrag: ({ offsetX, offsetY }) => {
			animate('#card-3', { x: offsetX, y: offsetY });
		}
	}}
	on:mouseenter={() =>
		animate(
			'#card-3',
			{ scale: 1.05, zIndex: 50, rotate: 0 },
			{ easing: spring({ stiffness: 200, damping: 14 }) }
		)}
	on:mouseleave={() => animate('#card-3', { scale: 1, zIndex: 20 })}
	class="absolute w-48 h-72 md:w-64 md:h-96 bg-teal-400 rounded-2xl shadow-lg z-20 hover:cursor-grab"
/>

<svelte:window bind:scrollY={y} />
