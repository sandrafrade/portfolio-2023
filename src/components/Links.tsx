import {useTranslations} from 'next-intl'
import getMessages from '@/utils/messages'
import styles from '@/styles/components/Links.module.css'

function IconArrowUpRight (props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
            />
        </svg>
    )
}

export default function Links () {
    const t = useTranslations<keyof Pick<IntlMessages, 'links'>>('links')
    const messages = getMessages()

    return (
        <ul 
            role="list" 
            aria-label={t('title')} 
            className={styles.list}
        >
            {Object.entries(messages.social).map((item: [string, {name: string, url: string}]) => 
                <li key={item[0]}>
                    <a
                        href={item[1].url}
                        rel="noopener, noreferrer"
                        className={styles.link}
                    >
                        {item[1].name}
                        <IconArrowUpRight className={styles.icon} />
                        <span className='sr-only'>{' '}{t('external')}</span>
                    </a>
                </li>
            )}
        </ul>
    )
}