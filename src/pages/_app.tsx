import type {AppProps} from 'next/app'
import {NextIntlProvider} from 'next-intl'
import ErrorBoundary from '@/utils/ErrorBoundary'

import '@/styles/_reset.css'
import '@/styles/_globals.css'
import '@/styles/_accessibility.css'

type PageProps = {
    messages: IntlMessages
}

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
    pageProps: PageProps
}

export default function App ({Component, pageProps}: Props) {
    return (
        <ErrorBoundary>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} />
            </NextIntlProvider>
        </ErrorBoundary>
    )
}
