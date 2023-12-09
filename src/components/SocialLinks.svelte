<script>
	import { IconBrandGithub, IconBrandLinkedin, IconBrandDribbble } from '@tabler/icons-svelte';
	import LinkIcon from './LinkIcon.svelte';
</script>

<div class="flex justify-start gap-6">
	<LinkIcon href="https://github.com/adamgemerson" label="Github Link">
		<IconBrandGithub slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
	</LinkIcon>
	<LinkIcon href="https://dribbble.com/adamgemerson" label="Dribbble Link">
		<IconBrandDribbble slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
	</LinkIcon>
	<LinkIcon href="https://www.linkedin.com/in/adamgemerson/" label="LinkedIn Link">
		<IconBrandLinkedin slot="icon" class="w-3/5 h-3/5 self-center text-stone-900" />
	</LinkIcon>
</div>
