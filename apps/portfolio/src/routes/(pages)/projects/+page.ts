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

export const load: PageLoad = async ({ params }) => {
  const data = await client.fetch(`*[_type == "project"]`);
  if (data) {
    return { data };
  } else {
    console.log('not found');
    error(404, 'Project not found');
  }
};
// export const prerender = true;
