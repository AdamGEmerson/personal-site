/** @type {import('./$types').EntryGenerator} */
export function entries(): { slug: string }[] {
	return [{ slug: 'auragraph' }, { slug: 'universe' }];
}
export const prerender = true;
