<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { slide, fade } from 'svelte/transition';
	import { Marquee } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { toolBar } from '../stores/toolBar';
	import { tweened } from 'svelte/motion';
	import { capitalized } from '../utils/helpers';

	let url = '';
	let crumbs: string[] = [];
	let homePos = -1000;
	let mounted = false;
	let barPosition = tweened(url === '/' ? homePos : 0, {
		duration: 900,
		easing: cubicInOut
	});

	onMount(() => {
		mounted = true;
	});

	page.subscribe((value) => {
		url = value.url.pathname;
	});

	toolBar.subscribe((value) => {
		homePos = value.position;
	});

	$: {
		let tempCrumbs = url.split('/').slice(1);

		// Animate the new crumbs in
		if (tempCrumbs.length > crumbs.length) {
			let missing = tempCrumbs.filter((crumb) => !crumbs.includes(crumb));
			missing.forEach((crumb) => {
				crumbs = [...crumbs, crumb];
			});
		}

		// Animate the old crumbs out
		if (tempCrumbs.length < crumbs.length) {
			while (tempCrumbs.length < crumbs.length) {
				crumbs.pop();
				crumbs = crumbs;
			}
		}

		if (tempCrumbs.length === crumbs.length) {
			for (let i = 0; i < tempCrumbs.length; i++) {
				if (tempCrumbs[i] !== crumbs[i]) {
					crumbs[i] = tempCrumbs[i];
				}
			}
		}
	}

	$: url === '/' ? barPosition.set(homePos) : barPosition.set(0);
	$: if (url === '/') crumbs = [];
</script>

{#if mounted}
	<div
		transition:slide={{ easing: cubicInOut, duration: 900, axis: 'x' }}
		class="flex flex-row align-middle bg-stone-900 text-stone-300 h-10 w-full mx-auto"
		style={`position: absolute; top: ${$barPosition}px; left: 0;`}
	>
		{#if url === '/'}
			<div in:fade={{ duration: 500, delay: 500 }}>
				<Marquee
					class="text-lg font-mono bg-stone-900 text-stone-300 p-1 w-full h-full align-middle"
					speed={0.1}
					hoverSpeed={0}
				>
					<div class="mx-8 whitespace-nowrap">Full Stack Development</div>
					<div class="mx-8 whitespace-nowrap">Web Design</div>
					<div class="mx-8 whitespace-nowrap">Human Computer Interaction</div>
					<div class="mx-8 whitespace-nowrap">Internet Magic</div>
				</Marquee>
			</div>
		{:else if crumbs.length > 0}
			<div
				class="z-50 font-mono flex flex-row justify-start w-screen h-10 px-2 items-center text-sm md:text-md border-stone-300 border-b-2 bg-stone-900"
			>
				<a
					href={'/'}
					class="group hover:cursor-pointer hover:underline flex-0"
					in:slide={{ delay: 200 }}
					out:slide={{ delay: 0 }}
				>
					<div class="p-2 group-hover:underline">
						<span class="group-hover:text-stone-300">Adam G. Emerson</span>
					</div>
				</a>
				{#each crumbs as crumb, i}
					<a
						class="group flex flex-row justify-start hover:cursor-pointer"
						in:slide|global={{ delay: 200 }}
						out:slide|global={{ delay: 0 }}
						href={'/' + crumbs.slice(0, i + 1).join('/')}
					>
						<div class="py-2">/</div>
						<div class="p-2 group-hover:underline">
							<span class="group-hover:text-stone-300">{capitalized(crumb)} </span>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
{/if}
