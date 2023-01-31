import Script from 'next/script'
import {WebSite, WithContext} from 'schema-dts'

export default function LinkedDataWebsite ({thumbnail}: {thumbnail: string}) {
    const schema: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: process.env.NEXT_PUBLIC_HOST ?? '',
        thumbnailUrl: thumbnail,
    }

    return (
        <Script
            id="ld-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}>
        </Script>
    )
}