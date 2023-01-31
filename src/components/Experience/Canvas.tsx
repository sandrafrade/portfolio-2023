import {Canvas} from '@react-three/fiber'
import {EffectComposer, Bloom} from '@react-three/postprocessing'
import {useCanvasPlayer} from '@/contexts/CanvasPlayer/Consumer'
import Scene from '@/components/Experience/Scene/Scene'
import Debug from '@/components/Experience/Debug'

export default function ExperienceCanvas () {
    const {env, colors} = useCanvasPlayer()

    return (
        <Canvas
            camera={{
                fov: 75,
                zoom: env.isMobile ? 0.5 : 1.25,
                position: [-7, 1, -7],
            }}
        >
            {env.isDebug && <Debug />}
            <directionalLight
                position={[7, 7, -5]}
                color={colors.white}
                intensity={1}
            />
            <Scene />
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>
        </Canvas>
    )
}