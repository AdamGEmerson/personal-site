import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export const hoveredLink: Writable<{ element: null | HTMLAnchorElement }> = writable({
	element: null
});
