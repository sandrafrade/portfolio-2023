import {render, screen, axe, waitFor} from '@/utils/tests'
import Layout from '@/components/Layout'

describe('Layout', () => {
    beforeEach(() => render(<Layout />))

    it('should have no detectable accessiblity errors', async () => {
        const result = await axe(document.body)
        await waitFor(() => expect(result).toHaveNoViolations())
    })

    it('should render a main element', async () => {
        const result = await screen.findByRole('main')
        await waitFor(() => expect(result).toBeVisible())
    })
})