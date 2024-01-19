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
	const data = await client.fetch(`*[_type == "project" && isFeatured == true]`);
	if (data && data.length === 1) {
		console.log(data[0]);
		const payload = data.map((project: any) => {
			data: project.data;
			images: project.images.map((image: any) => ({
				alt: image.alt as string,
				src: urlFor(image.image).url()
			}));
		});
		while (payload.length < 4) {
			payload.push(payload[0]);
		}
		return payload;
	} else {
		console.log('not found');
		error(404, 'Project not found');
	}
};
// export const prerender = true;
