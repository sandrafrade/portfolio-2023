import React, {useState, useEffect, useRef} from 'react'
import {Player, PlayerOptions, Sampler, SamplerOptions} from 'tone'
import CanvasPlayerContext, {defaultContext} from '@/contexts/CanvasPlayer/Context'

export const CanvasPlayerProvider = ({
    playerOptions,
    samplerOptions,
    children
}: {
    playerOptions: Partial<PlayerOptions>
    samplerOptions: Partial<SamplerOptions>
    children: React.ReactNode
}) => {
    const [isMobile, setIsMobile] = useState(defaultContext.env.isMobile)
    const [isDebug, setIsDebug] = useState(defaultContext.env.isDebug)
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(defaultContext.animation.isPlaying)
    const [isSoundPlaying, setIsSoundPlaying] = useState(defaultContext.sound.isPlaying)
    const player = useRef<Player | undefined>()
    const sampler = useRef<Sampler | undefined>()

    useEffect(() => {
        setIsMobile(window.matchMedia('(max-width: 600px)').matches)
        setIsDebug(window.location.hash === '#debug')
    }, [])

    const toggleAnimation = () => {
        setIsAnimationPlaying(!isAnimationPlaying)
    }

    const toggleSound = () => {
        setIsSoundPlaying(!isSoundPlaying)

        if (samplerOptions && !sampler.current) {
            sampler.current = new Sampler(samplerOptions).toDestination()
        }

        if (playerOptions && !player.current) {
            player.current = new Player(playerOptions).toDestination()
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
                    getPlayer: (): Player | undefined => player.current,
                    getSampler: (): Sampler | undefined => sampler.current
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
