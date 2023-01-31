import {render, screen, axe, axeConfigComponent} from '@/utils/tests'
import Card from '@/components/Card'

describe('Card', () => {
    beforeEach(() => render(<Card />))

    it('should have no detectable accessiblity errors', async () => {
        const result = await axe(document.body, axeConfigComponent)
        expect(result).toHaveNoViolations()
    })

    it('should display heading', async () => {
        const result = await screen.findByRole('heading')
        expect(result).toBeVisible()
    })
})