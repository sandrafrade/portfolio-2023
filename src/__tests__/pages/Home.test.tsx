import {render, act, screen, axe, waitFor} from '@/utils/tests'
import Home from '@/pages/index'

describe('Home', () => {
    const component: JSX.Element = <Home />
    let container: HTMLElement

    beforeEach(async () => {
        await act(async () => ({container} = render(component)))
    })

    it('should have no detectable accessiblity errors', async () => {
        const result = await axe(document.body)
        await waitFor(() => expect(result).toHaveNoViolations())
    })

    it('should render a title', async () => {
        const result = await screen.findByRole('heading')
        await waitFor(() => expect(result).toBeVisible())
    })

    it('should render a canvas', async () => {
        const result = container.querySelector('canvas')
        await waitFor(() => expect(result).toBeVisible())
    })
})