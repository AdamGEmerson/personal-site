import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
	projectId: '7iugz066',
	dataset: 'production',
	apiVersion: '2024-01-09',
	useCdn: false
});

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
	return builder.image(source);
};

export const load: PageLoad = async ({ params }) => {
	const data = await client.fetch(`*[_type == "project" && slug == "${params.slug}"]`);
	if (data && data.length === 1) {
		console.log(data[0]);
		return {
			data: data[0],
			images: data[0].images.map((image: any) => ({
				alt: image.alt as string,
				src: urlFor(image.image).url()
			}))
		};
	} else {
		console.log('not found');
		error(404, 'Project not found');
	}
};
// export const prerender = true;
