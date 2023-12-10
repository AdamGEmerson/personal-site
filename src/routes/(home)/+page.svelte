<script lang="ts">
	import ogImage from '/src/images/adamemerson_og.png';
	import { Marquee } from 'flowbite-svelte';
	import { fly, slide, blur } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import PlayingCard from '../../components/PlayingCard.svelte';
	import { cards } from '../../stores/cards';

	let title = 'Adam G. Emerson';
	let typedTitle = '';
	let index = 0;
	let isTyping = false;
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

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
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
	});

	let deck: Card[];
	cards.subscribe((value) => {
		deck = value.faceCards;
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
					tabindex={0}
					class="text-lg sm:text-xl font-mono group hover:bg-stone-900 p-1 px-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/research')}
					on:keypress={(e) => goTo(e, '/research')}
				>
					<a href="/research" class="group-hover:text-stone-300">Research</a>
				</div>
				<div
					transition:blur={{ delay: 600, duration: 1000 }}
					role="button"
					tabindex={0}
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

{#if mounted}
	{#each deck as card, i}
		<PlayingCard
			{card}
			id="card-{i}"
			rotation={getRandomInt(10, 20) + 20 * i}
			--image={`url(${card.icon})`}
		/>
	{/each}
{/if}

<svelte:window bind:scrollY={y} />
