interface SiteMapItem {
    id: string
}

export default function SiteMap () { }

export async function getServerSideProps ({res}: {res: any}) {
    const url = process.env.NEXT_PUBLIC_HOST ?? ''
    const pages: Array<SiteMapItem> = []
    const posts: Array<SiteMapItem> = []

    const getUrls = (url: string, items: Array<SiteMapItem>): string => {
        return items.map(({id}: SiteMapItem) => {
            return `<url><loc>${url}/${id}</loc></url>`
        }).join('')
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url><loc>${url}</loc></url>
            ${getUrls(url, pages)}
            ${getUrls(url, posts)}
        </urlset>`

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}
