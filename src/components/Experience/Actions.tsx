import {useTranslations} from 'next-intl'
import {useCanvasPlayer} from '@/contexts/CanvasPlayer/Consumer'
import styles from '@/styles/components/Experience.module.css'

export default function Actions () {
    const t = useTranslations<keyof Pick<IntlMessages, 'experience'>>('experience')
    const {animation, sound} = useCanvasPlayer()

    return (
        <div className={styles.actions}>
            <button
                className={styles.button}
                onClick={() => animation.toggle()}
            >
                {animation.isPlaying ? t('stop') : t('play')}
            </button>
            <button
                className={styles.button}
                onClick={() => sound.toggle()}
            >
                {sound.isPlaying ? t('soundOn') : t('soundOff')}
            </button>
        </div>
    )
}