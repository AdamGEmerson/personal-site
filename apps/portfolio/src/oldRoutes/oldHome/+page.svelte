<script lang="ts">
	import ogImage from '/src/images/adamemerson_og.png';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cards } from '../../stores/cards';
	import { toolBar } from '../../stores/toolBar';
	import HoverMenu from '../../components/layout/HoverMenu.svelte';
	import starburst from '../../components/ui/Starburst.svelte';
	import Starburst from '../../components/ui/Starburst.svelte';

	let title = 'Adam G. Emerson';
	let typedTitle = '';
	let index = 0;
	let isTyping = false;
	let ghostBox: HTMLDivElement;
	let menuItems: MenuItem[] = [
		{ name: 'Projects', path: '/projects' },
		{ name: 'Research', path: '/research' },
		{ name: 'CV', path: '/cv' }
	];

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

	let hoveredCard = false;
	const handlePlayHover = (event: Event) => (hoveredCard = event.type === 'mouseenter');

	let mounted = false;
	let y = 0;

	let timeout;

	onMount(() => {
		setTimeout(() => {
			toolBar.set({ position: ghostBox.offsetTop });
		}, 1000);
		mounted = true;
		typing();

		addEventListener('resize', () => {
			toolBar.set({ position: ghostBox.offsetTop });
		});

		return () => {
			removeEventListener('resize', () => {
				toolBar.set({ position: ghostBox.offsetTop });
			});
		};
	});

	let deck: Card[];
	cards.subscribe((value) => {
		deck = value.faceCards;
		deck = deck.sort(() => Math.random() - 0.5);
	});
	let menuHover = false;
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

{#if mounted}
	<div>
		<h1 class="hidden">Adam G. Emerson</h1>
		<h2 class="text-6xl lg:text-8xl font-serif h-32 flex items-end mb-4" out:fly>{typedTitle}</h2>
		<div id="ghost-box" class="h-16" bind:this={ghostBox} />
		<div transition:fade={{ delay: 1000 }}>
			<HoverMenu items={menuItems} />
		</div>

		<div
			class="text-stone-900 z-50 fixed -bottom-14 -left-10 sm:-bottom-20 sm:-left-20"
			transition:fly={{ duration: 1000, delay: 1500, x: -100, y: 100 }}
		>
			<Starburst size="256" />
		</div>
	</div>
{/if}

<svelte:window bind:scrollY={y} />
