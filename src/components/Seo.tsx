import Head from 'next/head'
import {useRouter} from 'next/router'
import LinkedDataPerson from './LinkedData/Person'
import LinkedDataWebsite from './LinkedData/Website'

export default function Seo ({
    title,
    description,
    thumbnail,
}: {
    title: string
    description: string
    thumbnail?: string
}) {
    const {route} = useRouter()
    const host = process.env.NEXT_PUBLIC_HOST ?? ''
    const url = host.concat(route)
    const image = host.concat(thumbnail ?? '/images/thumbnail.jpg')

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="canonical" href={url} />
                <meta name="robots" content="index,follow" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            </Head>
            <LinkedDataPerson />
            <LinkedDataWebsite thumbnail={image} />
        </>
    )
}
