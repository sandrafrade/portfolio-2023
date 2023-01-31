import {render, screen, axe, axeConfigComponent} from '@/utils/tests'
import Links from '@/components/Links'

describe('Links', () => {
    beforeEach(() => render(<Links />))

    it('should have no detectable accessiblity errors', async () => {
        const result = await axe(document.body, axeConfigComponent)
        expect(result).toHaveNoViolations()
    })

    it('should display list', async () => {
        const result = await screen.findByRole('list')
        expect(result).toBeVisible()
    })

    it('should have link to linkedin', () => {
        expect(screen.getByText(/linkedin/i))
    })

    it('should have link to github', () => {
        expect(screen.getByText(/github/i))
    })

    it('should have link to twitter', () => {
        expect(screen.getByText(/twitter/i))
    })
})