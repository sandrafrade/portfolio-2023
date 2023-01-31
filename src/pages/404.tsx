import Head from 'next/head'
import {GetStaticPropsContext} from 'next'
import {useTranslations} from 'next-intl'
import getMessages from '@/utils/messages'
import {default as ErrorComponent} from '@/components/Error'

export default function Error404 ({messages}: {messages: IntlMessages}) {
    const t = useTranslations<keyof Pick<IntlMessages, 'error'>>('error')

    return (
        <>
            <Head>
                <title>{t('seo.title')}</title>
            </Head>
            <ErrorComponent messages={messages} statusCode={404} />
        </>
    )
}

export async function getStaticProps ({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: getMessages(locale)
        }
    }
}