import {createContext} from 'react'
import {Player, Sampler} from 'tone'
import {Color, ColorRepresentation} from 'three'

type Playable = {
    isPlaying: boolean
    toggle: () => void
}

export type CanvasPlayerProps = {
    animation: Playable,
    sound: Playable & {
        getPlayer?: () => Player | undefined,
        getSampler?: () => Sampler | undefined,
    },
    colors: {
        black: ColorRepresentation
        white: ColorRepresentation
        cyan: ColorRepresentation
        magenta: ColorRepresentation
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
        black: new Color('#131313'),
        white: new Color('#fbffff'),
        cyan: new Color('#00fff0'),
        magenta: new Color('#eb0042'),
    },
    env: {
        isMobile: false,
        isDebug: false,
    },
}

const CanvasPlayerContext = createContext<CanvasPlayerProps | undefined>(undefined)
CanvasPlayerContext.displayName = 'CanvasPlayerContext'

export default CanvasPlayerContext
