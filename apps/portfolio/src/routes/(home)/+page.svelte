<script lang="ts">
	import { slide, blur, fly } from 'svelte/transition';
	import { gsap } from 'gsap';
	import Flip from 'gsap/dist/Flip';
  import { Marquee } from "flowbite-svelte";
	import { tweened } from 'svelte/motion';
  import { linear, quartInOut, quintOut } from "svelte/easing";
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';
  import Card from "$lib/components/ui/Card.svelte";
	import ogImage from '/src/images/adamemerson_og.png';
  import {
    IconBrandDribbble,
    IconBrandGithub,
    IconBrandLinkedin,
    IconGeometry,
    IconMicroscope
  } from "@tabler/icons-svelte";
  import IconSqaure from "$lib/components/ui/IconLink.svelte";

	export let data: PageData;

	let innerWidth = 0;
	let bentoItems = data.data;
	let featured: typeof bentoItems = [];
	let mid: typeof bentoItems = [];
	let preloadedImages: { [key: string]: { src: string; alt: string } } = {};
	let title = 'Adam G. Emerson';
	let typedTitle = '';
	let index = 0;
	let isTyping = false;
	let intervalId: any;
	let typeWriter: NodeJS.Timeout; // eslint-disable-line no-undef

  const links = [
    { title: "Projects", href: "/projects", description: "Recent web development, design, and research projects."},
    { title: "Blog", href: "/blog", description: "Dev-logs, musings, and essays."}
  ];
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

	gsap.registerPlugin(Flip);

	function flip() {
		const state = Flip.getState('.bento-item,.title', {
      props: 'fontSize,lineHeight,padding,margin'
    });

		requestAnimationFrame(() => {
			Flip.from(state, {
				target: '.bento-item,.title,.title-container',
				ease: 'power3.inOut',
        nested: true,
        absolute: true,
				duration: 1,
        onLeave: el => (
          gsap.fromTo(el, {scale: 1, duration: 0.5}, { scale: 0, duration: .5 })
        ),
        onEnter: el => (
          gsap.fromTo(el, {scale: 0, duration: .5}, { scale: 1, duration: .5})
        )
			});
		});
	}

	let timer = tweened(100, {
		duration: 10000,
		easing: linear
	});
	const rotateFeature = () => {
    bentoItems = [...bentoItems.slice(1), bentoItems[0]];
		flip();
		resetInterval();
	};

	const resetInterval = () => {
		clearInterval(intervalId);
		intervalId = setInterval(rotateFeature, 10000);
		timer.set(0, { duration: 0 });
		timer.set(100);
	};

	const preloadImage = (image: any) => {
		const img = new Image();
		img.src = image.src;
		img.alt = image.alt;
		return img;
	};

	let mounted = false;
	onMount(() => {
		// Set up the gallery animation and preload the images
		intervalId = setInterval(rotateFeature, 10000);
		timer.set(0, { duration: 0 });
		timer.set(100);
		if (bentoItems)
			bentoItems.forEach((item: any) => {
				preloadedImages[item._id] = preloadImage(item.images[0]);
			});
		console.log(preloadedImages);

		// Do the typing animation
		typing();
		mounted = true;
	});

	onDestroy(() => {
    console.log('destroying');
		clearInterval(intervalId);
	});

	$: {
		featured = [bentoItems[0]];
	}

	$: {
			mid = bentoItems.slice(1);
      console.log('bentoItems', bentoItems)
      console.log('mid', mid);
	}
</script>

<svelte:head>
	<title>Adam G. Emerson</title>
	<meta
		name="description"
		content="Adam Emerson is a fullstack Software Engineer and designer. When not working on web development projects he also dabbles in HCI research."
	/>
	<link rel="canonical" href="https://adamemerson.com" />
	<meta property="og:title" content="Adam G. Emerson" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content="https://adamemerson.com" />
	<meta
		property="og:description"
		content="Adam Emerson is a fullstack Software Engineer and designer. When not working on web development projects he also dabbles in HCI research."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@adamgemerson" />
	<meta name="twitter:creator" content="@adamgemerson" />
	<meta name="twitter:title" content="Adam G. Emerson" />
	<meta name="twitter:description" content="Software Engineer and Designer" />
</svelte:head>

<!-- Hidden For SEO / Accessibility w/ typing effect-->
<h1 class="font-serif hidden">Adam G. Emerson</h1>
<h2 class="hidden">Software Engineer and Designer</h2>

<div class="w-full h-full flex items-center justify-start flex-col gap-2 md:gap-4">
		<!-- Heading -->
		{#if mounted}
			<div
				in:slide={{ duration: 1000, easing: quintOut, axis: 'x' }}
				class="w-full h-28 md:h-48 bg-stone-900 text-stone-300 p-4 md:p-8 order-first"
			>
				<h2
					class="text-2xl sm:text-4xl md:text-6xl transition-all font-serif flex items-end"
					out:fly
				>
					{typedTitle}
				</h2>
				<!--			<p class="font-mono">Full Stack Engineer • Web Designer</p>-->
				<div in:blur|global={{ duration: 1000, delay: 800 }}>
					<Marquee
						class="text-xs md:text-md font-mono bg-stone-900 text-stone-300 p-1 w-full align-middle"
						speed={0.1}
						hoverSpeed={0.1}
					>
            <div class="mx-8 whitespace-nowrap">HCI Research</div>
						<div class="mx-8 whitespace-nowrap">Full Stack Development</div>
						<div class="mx-8 whitespace-nowrap">Web Design</div>
						<div class="mx-8 whitespace-nowrap">Internet Magic</div>
					</Marquee>
				</div>
			</div>
      <div class="flex flex-col-reverse md:flex-row w-full h-full md:h-auto text-stone-300 gap-2 md:gap-4">
        {#each links as link, i}
            <Card title={link.title} description={link.description} href={link.href} {i} />
        {/each}
        <div
          class="flex md:flex-col justify-between gap-2 md:gap-4"
          in:fly={{ duration: 500, delay: 1400, y: -100 }}
        >
          <IconSqaure href="https://github.com/adamgemerson" alt="Github">
            <IconBrandGithub class="h-8 w-8"/>
          </IconSqaure>
          <IconSqaure href="https://linkedin.com/in/adamgemerson" alt="LinkedIn">
            <IconBrandLinkedin class="h-8 w-8" />
          </IconSqaure>
          <IconSqaure href="https://scholar.google.com/citations?user=hORnZF0AAAAJ&hl=en" alt="Research">
            <IconMicroscope class="h-8 w-8" />
          </IconSqaure>
        </div>
      </div>
		{/if}
		<!--{#if innerWidth >= 769}-->
		<!--	<LargeBento {featured} {mid} {preloadedImages} {timer} />-->
		<!--{:else}-->
		<!--	<SmallBento {featured} {mid} {preloadedImages} {timer} />-->
		<!--{/if}-->
</div>
<!--			&lt;!&ndash; Bento &ndash;&gt;-->
<!--			<div class="col-span-full row-span-2 order-3 md:col-span-7 md:row-span-3 md:order-none">-->
<!--				{#each featured as item}-->
<!--					<a-->
<!--						in:blur|global={{ easing: quintOut, duration: 1000 }}-->
<!--						data-flip-id={item._id}-->
<!--						href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}-->
<!--						class="bento-item w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:cursor-pointer flex flex-col gap-2 justify-start"-->
<!--					>-->
<!--						<div class={'flex'}>-->
<!--							<div class="flex-1">-->
<!--								<h2 class="font-serif text-xl">{item.title}</h2>-->
<!--								<p class="font-mono text-sm h-16">{item.oneLiner}</p>-->
<!--							</div>-->
<!--							{#if item.isResearch}-->
<!--								<IconMicroscope class="flex-0 h-8 w-8 text-stone-600 self-end" />-->
<!--							{:else}-->
<!--								<IconGeometry class="flex-0 h-8 w-8 text-stone-600 self-end" />-->
<!--							{/if}-->
<!--						</div>-->
<!--						<TimerBar {timer} />-->
<!--						{#key item}-->
<!--							<div class="h-full">-->
<!--								<div-->
<!--									in:slide={{ delay: 600, duration: 1000, easing: quintOut }}-->
<!--									class="w-full h-full bg-teal-900"-->
<!--								>-->
<!--									<img-->
<!--										src={preloadedImages[item._id].src}-->
<!--										alt={preloadedImages[item._id].alt}-->
<!--										class="h-full w-full border-2 border-stone-300 object-cover"-->
<!--									/>-->
<!--								</div>-->
<!--							</div>-->
<!--						{/key}-->
<!--					</a>-->
<!--				{/each}-->
<!--			</div>-->

<!--			{#each mid as item, i}-->
<!--				{#if i !== mid.length - 1}-->
<!--					<div-->
<!--						class={`col-span-3 row-span-1 order-${4 + i} md:col-span-4 md:row-span-1 md:order-none`}-->
<!--					>-->
<!--						<BentoItem-->
<!--							name={item.title}-->
<!--							description={item.oneLiner}-->
<!--							bentoId={item._id}-->
<!--							isResearch={item.isResearch}-->
<!--							href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}-->
<!--						/>-->
<!--					</div>-->
<!--				{:else}-->
<!--					<div class="col-span-3 row-span-1 md:col-span-7 md:row-span-1 order-5 md:order-none">-->
<!--						<BentoItem-->
<!--							name={item.title}-->
<!--							description={item.oneLiner}-->
<!--							bentoId={item._id}-->
<!--							isResearch={item.isResearch}-->
<!--							href={`/${item.isResearch ? 'research' : 'projects'}/${item.slug}`}-->
<!--						/>-->
<!--					</div>-->
<!--				{/if}-->
<!--			{/each}-->
<!--			<div class="col-span-3 row-span-2 md:order-none order-4">-->
<!--				<a-->
<!--					in:blur|global={{ easing: quintOut, duration: 1000 }}-->
<!--					class="w-full h-full p-4 bg-stone-900 text-stone-300 hover:bg-stone-900/95 hover:scale-[101%] hover:cursor-pointer flex justify-around relative overflow-hidden group"-->
<!--					href={'/projects'}-->
<!--				>-->
<!--					<div class="flex-1 z-10">-->
<!--						<h2 class="font-serif text-xl z-10">More Projects</h2>-->
<!--						<p class="font-mono text-sm z-10">All the other stuff that doesn't fit on this page</p>-->
<!--					</div>-->
<!--					<IconGeometry-->
<!--						class="z-0 absolute block -bottom-10 left-50 h-96 w-96 text-stone-800 group-hover:text-stone-700"-->
<!--					/>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="order-2 col-span-2 row-span-1 md:order-none md:col-span-2 md:row-span-1">-->
<!--				<BentoItem name="github" variant="icon" />-->
<!--			</div>-->
<!--			<div class="order-2 col-span-2 row-span-1 md:order-none md:col-span-2 md:row-span-1">-->
<!--				<BentoItem name="linkedin" variant="icon" />-->
<!--			</div>-->
<!--			<div class="order-2 col-span-2 row-span-1 md:order-none md:col-span-2 md:row-span-1">-->
<!--				<BentoItem name="dribbble" variant="icon" />-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--{#if mounted}-->
<!--	<div-->
<!--		class="text-stone-900 z-50 fixed -bottom-14 -left-10 sm:-bottom-20 sm:-left-20"-->
<!--		transition:fly={{ duration: 1000, delay: 3600, x: -100, y: 100 }}-->
<!--	>-->
<!--		<Starburst size="256" />-->
<!--	</div>-->
<!--{/if}-->

<svelte:window bind:innerWidth />

