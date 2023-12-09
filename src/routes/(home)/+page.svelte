<script lang="ts">
	import SocialLinks from '../../components/SocialLinks.svelte';
	import { fly, blur } from 'svelte/transition';
	import { backOut, quartOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let uiClick: HTMLAudioElement;

	let title = 'Adam G. Emerson';
	let typedTitle = '';
	let index = 0;
	let isTyping = false;
	let typeWriter;
	let animate = false;
	const typing = () => (typeWriter = setInterval(typeChar, 100));
	const stopTyping = () => clearInterval(typeWriter);

	const typeChar = () => {
		if (index < title.length) {
			isTyping = true;
			typedTitle += title[index];
			index += 1;
		} else {
			stopTyping();
			animate = true;
			return;
		}
	};

	function goTo(event: Event, page: string) {
		event.preventDefault();
		goto(page);
	}
	import ogImage from '/src/images/adamemerson_og.png';

	let mounted = false;
	let y = 0;

	onMount(() => {
		mounted = true;
		typing();
	});

	// let h1 = ['A', 'd', 'a', 'm', '\u00A0 G. \u00A0', 'E', 'm', 'e', 'r', 's', 'o', 'n'];
	// let animate = false;
	// onMount(() => {
	// 	animate = true;
	// });

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
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

<div class="sm:m-2 md:m-8">
	<h1 class="hidden">Adam G. Emerson</h1>
	<h2 class="text-7xl md:text-8xl font-serif p-4">{typedTitle}</h2>
	<div class="flex flex-col mx-8 gap-4">
		{#if animate}
			<div
				class="relative font-mono text-xl md:text-2xl flex overflow-hidden-x bg-stone-900 text-stone-300"
				in:blur={{ easing: quartOut, duration: 1000, delay: 500 }}
			>
				<div class="animate-marquee whitespace-nowrap">
					<span class="mx-1">•</span>
					<span class="mx-1">Full Stack Developer</span>
					<span class="mx-1">•</span>
					<span class="mx-1">Web Designer</span>
					<span class="mx-1">•</span>
					<span class="mx-1">HCI Research</span>
				</div>

				<div class="absolute top-0 animate-marquee2 whitespace-nowrap">
					<span class="mx-1">•</span>
					<span class="mx-1">Full Stack Developer</span>
					<span class="mx-1">•</span>
					<span class="mx-1">Web Designer</span>
					<span class="mx-1">•</span>
					<span class="mx-1">HCI Research</span>
				</div>
			</div>
			<div in:fly={{ y: 100, easing: quartOut, duration: 1000, delay: 500 }} out:fly>
				<SocialLinks />
			</div>
			<ul in:fly={{ y: 100, easing: quartOut, duration: 1000, delay: 1000 }} out:fly>
				<li
					class="text-xl font-mono group hover:bg-stone-900 p-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/projects')}
					on:keypress={(e) => goTo(e, '/projects')}
				>
					<a href="/projects" class="group-hover:text-stone-300">Projects</a>
				</li>
				<li
					class="text-xl font-mono group hover:bg-stone-900 p-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/research')}
					on:keypress={(e) => goTo(e, '/research')}
				>
					<a href="/research" class="group-hover:text-stone-300">Research</a>
				</li>
				<li
					class="text-xl font-mono group hover:bg-stone-900 p-2 hover:cursor-pointer"
					on:click={(e) => goTo(e, '/cv')}
					on:keypress={(e) => goTo(e, '/cv')}
				>
					<a href="/cv" class="group-hover:text-stone-300"> CV </a>
				</li>
			</ul>
		{/if}
	</div>
</div>
<svelte:window bind:scrollY={y} />
