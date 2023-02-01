import {createContext} from 'react'
import * as THREE from 'three'
import * as Tone from 'tone'

type Playable = {
    isPlaying: boolean
    toggle: () => void
}

export type CanvasPlayerProps = {
    animation: Playable,
    sound: Playable & {
        getPlayer?: () => Tone.Player | undefined,
        getSampler?: () => Tone.Sampler | undefined,
    },
    colors: {
        black: THREE.ColorRepresentation
        white: THREE.ColorRepresentation
        cyan: THREE.ColorRepresentation
        magenta: THREE.ColorRepresentation
    },
    env: {
        isMobile: boolean
        isDebug: boolean
    },
}

export const defaultContext: CanvasPlayerProps = {
    animation: {
        isPlaying: true,
        toggle: () => { },
    },
    sound: {
        isPlaying: false,
        toggle: () => { },
    },
    colors: {
        black: new THREE.Color('#131313'),
        white: new THREE.Color('#fbffff'),
        cyan: new THREE.Color('#00fff0'),
        magenta: new THREE.Color('#eb0042'),
    },
    env: {
        isMobile: false,
        isDebug: false,
    },
}

const CanvasPlayerContext = createContext<CanvasPlayerProps | undefined>(undefined)
CanvasPlayerContext.displayName = 'CanvasPlayerContext'

export default CanvasPlayerContext
