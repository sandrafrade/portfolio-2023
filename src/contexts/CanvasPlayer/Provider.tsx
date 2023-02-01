import React, {useState, useEffect, useRef} from 'react'
import * as Tone from 'tone'
import CanvasPlayerContext, {defaultContext} from '@/contexts/CanvasPlayer/Context'

export const CanvasPlayerProvider = ({
    playerOptions,
    samplerOptions,
    children
}: {
    playerOptions: Partial<Tone.PlayerOptions>
    samplerOptions: Partial<Tone.SamplerOptions>
    children: React.ReactNode
}) => {
    const [isMobile, setIsMobile] = useState(defaultContext.env.isMobile)
    const [isDebug, setIsDebug] = useState(defaultContext.env.isDebug)
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(defaultContext.animation.isPlaying)
    const [isSoundPlaying, setIsSoundPlaying] = useState(defaultContext.sound.isPlaying)
    const player = useRef<Tone.Player | undefined>()
    const sampler = useRef<Tone.Sampler | undefined>()

    useEffect(() => {
        setIsMobile(window.matchMedia('(max-width: 600px)').matches)
        setIsDebug(window.location.hash === '#debug')
    }, [])

    const toggleAnimation = () => {
        setIsAnimationPlaying(!isAnimationPlaying)
    }

    const toggleSound = async () => {
        setIsSoundPlaying(!isSoundPlaying)

        if (Tone.context.state !== 'running') {
            await Tone.start()
            Tone.context.resume()
        }

        if (samplerOptions && !sampler.current) {
            sampler.current = new Tone.Sampler(samplerOptions).toDestination()
        }

        if (playerOptions && !player.current) {
            player.current = new Tone.Player(playerOptions).toDestination()
            return
        }

        if (player.current) {
            player.current.mute = isSoundPlaying
        }
    }

    return (
        <CanvasPlayerContext.Provider
            value={{
                animation: {
                    isPlaying: isAnimationPlaying,
                    toggle: toggleAnimation,
                },
                sound: {
                    isPlaying: isSoundPlaying,
                    toggle: toggleSound,
                    getPlayer: (): Tone.Player | undefined => player.current,
                    getSampler: (): Tone.Sampler | undefined => sampler.current
                },
                colors: {...defaultContext.colors},
                env: {
                    isMobile,
                    isDebug,
                },
            }}
        >
            {children}
        </CanvasPlayerContext.Provider>
    )
}
