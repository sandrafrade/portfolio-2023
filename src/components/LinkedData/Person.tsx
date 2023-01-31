import Script from 'next/script'
import {useRouter} from 'next/router'
import {useTranslations} from 'next-intl'
import {Person, WithContext} from 'schema-dts'
import getMessages from '@/utils/messages'

export default function LinkedDataPerson () {
    const {locale} = useRouter()
    const messages = getMessages(locale)
    const card = useTranslations<keyof Pick<IntlMessages, 'card'>>('card')

    const schema: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: card('fullName'),
        jobTitle: card('jobName'),
        address: card('jobLocation'),
        url: process.env.NEXT_PUBLIC_HOST ?? '',
        sameAs: Object.entries(messages.social).map(item => item[1].url)
    }

    return (
        <Script
            id="ld-person"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}>
        </Script>
    )
}