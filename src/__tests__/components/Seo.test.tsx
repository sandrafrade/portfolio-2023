import {render, screen, act, mockRouter} from '@/utils/tests'
import Seo from '@/components/Seo'

describe('Seo', () => {
    const title = 'Test title'
    const description = 'Test description'
    const image = '/images/thumbnail.jpg'
    const url = mockRouter.route

    const component: JSX.Element = <Seo title={title} description={description} />
    let container: HTMLElement

    beforeEach(async () => {
        await act(async () => ({container} = render(component)))
    })

    it('should have a title tag', async () => {
        const result = await screen.findByText(title)
        expect(result).toBeInTheDocument()
    })

    it('should have a meta description', async () => {
        const result = container.querySelector('[name="description"]')
        expect(result).toBeInTheDocument()
        expect(result?.getAttribute('content')).toBe(description)
    })

    it('should have a canonical link', async () => {
        const result = container.querySelector('[rel="canonical"]')
        expect(result).toBeInTheDocument()
        expect(result?.getAttribute('href')).toBe(url)
    })

    it('should have a meta robots', async () => {
        const result = container.querySelector('[name="robots"]')
        expect(result).toBeInTheDocument()
        expect(result?.getAttribute('content')).toBe('index,follow')
    })

    describe('Open Graph metas', () => {
        it('should have a meta og:type', async () => {
            const result = container.querySelector('[property="og:type"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe('website')
        })
    
        it('should have a meta og:url', async () => {
            const result = container.querySelector('[property="og:url"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(url)
        })
    
        it('should have a meta og:title', async () => {
            const result = container.querySelector('[property="og:title"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(title)
        })
    
        it('should have a meta og:description', async () => {
            const result = container.querySelector('[property="og:description"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(description)
        })
    
        it('should have a meta og:image', async () => {
            const result = container.querySelector('[property="og:image"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(image)
        })
    })

    describe('Twitter metas', () => {
        it('should have a meta twitter:card', async () => {
            const result = container.querySelector('[property="twitter:card"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe('summary_large_image')
        })

        it('should have a meta twitter:url', async () => {
            const result = container.querySelector('[property="twitter:url"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(url)
        })

        it('should have a meta twitter:title', async () => {
            const result = container.querySelector('[property="twitter:title"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(title)
        })

        it('should have a meta twitter:description', async () => {
            const result = container.querySelector('[property="twitter:description"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(description)
        })

        it('should have a meta twitter:image', async () => {
            const result = container.querySelector('[property="twitter:image"]')
            expect(result).toBeInTheDocument()
            expect(result?.getAttribute('content')).toBe(image)
        })
    })
})