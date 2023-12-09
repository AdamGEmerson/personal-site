<script>
	import LinkIcon from './LinkIcon.svelte';
	import { IconBrandDribbble, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';

	let year = new Date().getFullYear();
</script>

<div
	class="text-sm text-stone-500 w-full p-8 relative flex justify-between h-full items-end bg-stone-300"
>
	<div class="text-xs md:text-sm font-mono">
		Made with <a class="hover:underline" href="https://kit.svelte.dev/">SvelteKit</a> and ❤
		<div>
			© {year}, Adam Emerson
		</div>
	</div>

	<div class="flex justify-start gap-6">
		<LinkIcon href="/adamgemerson" label="GitHub Link">
			<IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
		</LinkIcon>
		<LinkIcon href="https://dribbble.com/adamgemerson" label="Dribbble Link">
			<IconBrandDribbble slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
		</LinkIcon>
		<LinkIcon href="https://www.linkedin.com/in/adamgemerson/" label="LinkedIn Link">
			<IconBrandLinkedin slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
		</LinkIcon>
	</div>
</div>

<style>
</style>
