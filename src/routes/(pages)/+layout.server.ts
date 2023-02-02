/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }: {url: URL}) => {
    return {
        props: {
            url: url.href,
            title: url.pathname.split('/')[1].toUpperCase()
        }
    }
}