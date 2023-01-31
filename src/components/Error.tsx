import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/components/Error.module.css'

export default function Error ({messages, statusCode}: {
    messages: Pick<IntlMessages, 'error'>
    statusCode?: number
}) {
    return (
        <Layout>
            <div className={styles.alert} role="alert">
                <h1 className={styles.title}>
                    {`${messages.error.content.title} ${statusCode ?? ''}`}
                </h1>
                <Link className={styles.btn} href={'/'}>
                    {messages.error.content.home}
                </Link>
            </div>
        </Layout>
    )
}