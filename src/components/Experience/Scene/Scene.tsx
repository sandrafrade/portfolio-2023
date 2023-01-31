import {useTranslations} from 'next-intl'
import {A11ySection} from '@react-three/a11y'
import Shapes from '@/components/Experience/Scene/Shapes'
import Ground from '@/components/Experience/Scene/Ground'

export default function Scene () {
    const t = useTranslations<keyof Pick<IntlMessages, 'experience'>>('experience')

    return (
        <A11ySection
            label={t('label')}
            description={t('description')}
        >
            <group position-y={0.55}>
                <Shapes />
                <Ground />
            </group>
        </A11ySection>
    )
}