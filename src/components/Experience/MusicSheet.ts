import * as Tone from 'tone'

/**
 * Player
 */

export const playerOptions: Partial<Tone.PlayerOptions> = {
    url: '/sounds/loop.mp3',
    autostart: true,
    loop: true,
}

/**
 * Sampler
 */

export type Note = 'G2' | 'B2b' | 'D3' | 'E3' | 'G3' | 'B3b' | 'D4' | 'E4'

export const samplerUrls = {
    G2: 'G2.mp3',
    B2b: 'B2b.mp3',
    D3: 'D3.mp3',
    E3: 'E3.mp3',
    G3: 'G3.mp3',
    B3b: 'B3b.mp3',
    D4: 'D4.mp3',
    E4: 'E4.mp3',
}

export const samplerOptions: Partial<Tone.SamplerOptions> = {
    baseUrl: '/sounds/sampler/',
    urls: samplerUrls,
    volume: -10,
}

export const notes = Object.keys(samplerUrls) as Array<Note>