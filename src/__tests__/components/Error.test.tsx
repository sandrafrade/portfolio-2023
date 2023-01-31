import {render, screen, axe, act, waitFor} from '@/utils/tests'
import getMessages from '@/utils/messages'
import Error404 from '@/pages/404'

const commonTests = async () => {
    it('should have no detectable accessiblity errors', async () => {
        const result = await act(async () => await axe(document.body))
        await waitFor(() => expect(result).toHaveNoViolations())
    })

    it('should have an alert role', async () => {
        const result = await screen.findByRole('alert')
        await waitFor(() => expect(result).toBeVisible())
    })

    it('should have a heading', async () => {
        const result = await screen.findByRole('heading', {name: /Error/i})
        await waitFor(() => expect(result).toBeVisible())
    })

    it('should have a link to home page', async () => {
        const result = await screen.findByText(/Back to the homepage/i)
        await waitFor(() => expect(result).toBeVisible())
    })
}

describe('Error 404', () => {
    const messages = getMessages()

    beforeEach(() => render(<Error404 messages={messages} />))

    commonTests()
})

describe('Error boundary', () => {
    const ThrowError = () => {throw new Error()}
    const original = console.error

    beforeEach(() => {
        console.error = jest.fn()
        render(<ThrowError />)
    })

    afterEach(() => {
        console.error = original
    })

    commonTests()
})