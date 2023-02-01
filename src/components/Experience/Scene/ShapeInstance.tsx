import {useRef} from 'react'
import * as THREE from 'three'
import {useFrame} from '@react-three/fiber'
import {Instance} from '@react-three/drei'
import {useCanvasPlayer} from '@/contexts/CanvasPlayer/Consumer'
import {notes, Note} from '@/components/Experience/MusicSheet'

export type ShapeInstancePosition = {
    position: THREE.Vector3
    index: number
}
export type ShapeInstanceProps = ShapeInstancePosition & {
    start: number
    end: number
    arpUp: boolean
    reverseArp: () => void
}

export default function ShapeInstance ({
    position,
    index,
    start,
    end,
    arpUp,
    reverseArp
}: ShapeInstanceProps) {
    const ref = useRef<THREE.InstancedMesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>>(null)
    const {animation, sound} = useCanvasPlayer()

    useFrame(({clock}) => {
        if (!animation.isPlaying || !ref.current) {
            return
        }

        const scale =
            Math.abs(
                - Math.sin((clock.elapsedTime + ref.current.position.x) * .5)
                + Math.cos((clock.elapsedTime + ref.current.position.y) * .5)
            )

        ref.current.scale.y = scale

        if (ref.current.position.z > start) {
            return
        }

        const isFirst = ref.current.position.x === end - 1 && scale < 0.001
        const isOther = ref.current.position.x < end - 1 && scale < 0.01

        if (!isFirst && !isOther) {
            return
        }

        triggerSound()
    }, 1)

    const triggerSound = () => {
        if (!sound.isPlaying || !sound?.getSampler) {
            return
        }

        try {
            const sampler = sound.getSampler()

            if (sampler) {
                const note: Note = arpUp
                    ? notes[notes.length - index - 1]
                    : notes[index]

                sampler.triggerAttack(note)
            }
        } catch (e) {

        } finally {
            if (index === 0) {
                reverseArp()
            }
        }
    }

    return <Instance ref={ref} position={position} scale={0.45} />
}