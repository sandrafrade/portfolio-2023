import {render, screen, waitFor} from '@/utils/tests'
import CanvasPlayerContext, {CanvasPlayerProps, defaultContext} from '@/contexts/CanvasPlayer/Context'
import ExperienceActions from '@/components/Experience/Actions'

describe('Canvas Player', () => {
    it('should expose default values when rendering a context consumer without a matching provider', async () => {
        render(<ExperienceActions />)

        await waitFor(() =>
            expect(screen.getByText(/Stop/i)).toBeVisible()
        )
    })

    it('should expose given values when rendering a context consumer with a matching provider', async () => {
        const providerProps: Partial<CanvasPlayerProps> = {
            animation: {
                isPlaying: false,
                toggle: () => { },
            }
        }

        render(
            <CanvasPlayerContext.Provider value={{...defaultContext, ...providerProps}}>
                <ExperienceActions />
            </CanvasPlayerContext.Provider>
        )

        await waitFor(() =>
            expect(screen.getByText(/Play/i)).toBeVisible()
        )
    })
})