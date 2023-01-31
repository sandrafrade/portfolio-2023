import {GetStaticPropsContext} from 'next'
import {useTranslations} from 'next-intl'
import getMessages from '@/utils/messages'
import Seo from '@/components/Seo'
import Card from '@/components/Card'
import Links from '@/components/Links'
import Layout from '@/components/Layout'
import Experience from '@/components/Experience/Experience'
import styles from '@/styles/pages/Home.module.css'

export default function Home () {
    const t = useTranslations<keyof Pick<IntlMessages, 'home'>>('home')

    return (
        <>
            <Seo 
                title={t('seo.title')}
                description={t('seo.description')}
            />         
            <Layout>
                <Experience />
                <div className={styles.content}>
                    <Card />
                    <Links />
                </div>
            </Layout>
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