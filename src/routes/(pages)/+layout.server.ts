/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }: {url: URL}) => {

    let title = url.pathname.split('/')[1]
    title = title.charAt(0).toUpperCase() + title.slice(1);

    return {
        url: url.href,
        title: title,
    }
}