import {useTranslations} from 'next-intl'
import styles from '@/styles/components/Card.module.css'

export default function Card () {
    const t = useTranslations<keyof Pick<IntlMessages, 'card'>>('card')

    const Separator = (): JSX.Element => {
        return (
            <span className={styles.separator}>
                <span aria-hidden="true">&middot;</span>
                <span className="sr-only">{' '}</span>
            </span>
        )
    }

    return (
        <h1 className={styles.container}>
            <span className={styles.fullName}>{t('fullName')}</span>
            <span className="sr-only">{' '}</span>
            <small className={styles.job}>
                <span className={styles.jobName}>{t('jobName')}</span>
                <Separator />
                <span className={styles.jobType}>{t('jobType')}</span>
                <Separator />
                <span className={styles.jobLocation}>{t('jobLocation')}</span>
            </small>
        </h1>
    )
}