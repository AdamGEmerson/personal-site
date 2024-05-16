/** @type {import('./$types').EntryGenerator} */
export function entries(): { slug: string }[] {
	return [{ slug: 'crucible' }, { slug: 'bridgeit' }];
}
export const prerender = true;
