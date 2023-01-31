import {CanvasPlayerProvider} from '@/contexts/CanvasPlayer/Provider'
import ExperienceCanvas from '@/components/Experience/Canvas'
import Actions from '@/components/Experience/Actions'
import {playerOptions, samplerOptions} from '@/components/Experience/MusicSheet'
import styles from '@/styles/components/Experience.module.css'

export default function Experience () {
    return (
        <CanvasPlayerProvider
            playerOptions={playerOptions}
            samplerOptions={samplerOptions}
        >
            <div className={styles.container}>
                <Actions />
                <ExperienceCanvas />
            </div>
        </CanvasPlayerProvider>
    )
}