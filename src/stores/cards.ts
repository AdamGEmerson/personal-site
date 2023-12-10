import { readable } from 'svelte/store';
import { icons } from '../images/icons';

export const cards = readable<CardStore>({
	faceCards: [
		{
			name: 'React',
			suit: 'framework',
			value: 'A',
			description: 'JavaScript Library',
			author: 'Meta (Facebook)',
			year: 2012,
			icon: icons.react
		},
		{
			name: 'Svelte',
			suit: 'framework',
			value: 'K',
			description: 'Web Framework',
			author: 'Rich Harris, et al.',
			year: 2016,
			icon: icons.svelte
		},
		{
			name: 'Tailwind',
			suit: 'framework',
			value: 'Q',
			description: 'CSS Framework',
			author: 'Adam Wathan, et al.',
			year: 2017,
			icon: icons.tailwind
		},
		{
			name: 'Astro',
			suit: 'framework',
			value: 'J',
			description: 'Web Framework',
			author: 'Fred K. Schott, et al.',
			year: 2021,
			icon: icons.astro
		}
	]
});
