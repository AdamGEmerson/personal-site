<script lang="ts">
	import { IconBrandGithub, IconBrandLinkedin, IconBrandDribbble } from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import LinkIcon from './LinkIcon.svelte';

	let label = 'Links';
	const updateLabel = (str: string) => {
		label = str;
	};
</script>

<div class="flex flex-col justify-end relative">
	{#key label}
		<p
			class="text-right font-mono px-4 bg-stone-900 text-stone-300 z-20"
			id="links-label"
			transition:slide
		>
			<span>{label}</span>
		</p>
	{/key}
	<div class="flex justify-start text-stone-900">
		<div
			role="button"
			tabindex="0"
			on:mouseenter={() => updateLabel('GitHub')}
			on:mouseleave={() => updateLabel('Links')}
		>
			<LinkIcon href="https://github.com/adamgemerson" label="Github Link">
				<IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-inherit" />
			</LinkIcon>
		</div>
		<div
			role="button"
			tabindex="0"
			on:mouseenter={() => updateLabel('Dribbble')}
			on:mouseleave={() => updateLabel('Links')}
		>
			<LinkIcon href="https://dribbble.com/adamgemerson" label="Dribbble Link">
				<IconBrandDribbble slot="icon" class="w-3/5 h-3/5 self-center text-inherit" />
			</LinkIcon>
		</div>
		<div
			role="button"
			tabindex="0"
			on:mouseenter={() => updateLabel('LinkedIn')}
			on:mouseleave={() => updateLabel('Links')}
		>
			<LinkIcon href="https://www.linkedin.com/in/adamgemerson/" label="LinkedIn Link">
				<IconBrandLinkedin slot="icon" class="w-3/5 h-3/5 self-center text-inherit" />
			</LinkIcon>
		</div>
	</div>
</div>
