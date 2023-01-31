import {render, RenderOptions} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {configureAxe, toHaveNoViolations} from 'jest-axe'
import {NextIntlProvider} from 'next-intl'
import mockRouter from 'next-router-mock'
import ErrorBoundary from '@/utils/ErrorBoundary'
import getMessages from '@/utils/messages'

/**
 * Render
 */

type Options = RenderOptions<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>
type Wrapper = React.JSXElementConstructor<{children: React.ReactElement<any, string | React.JSXElementConstructor<any>>}>

const locale = 'en'
const messages = getMessages(locale)
const wrapper = ({children}: {children?: React.ReactNode}) => {
    return (
        <ErrorBoundary>
            <NextIntlProvider locale={locale} messages={messages}>
                {children}
            </NextIntlProvider>
        </ErrorBoundary>
    )
}
const setupWrapper = (wrapper: Wrapper) => (ui: JSX.Element, options?: Options) => render(ui, {wrapper, ...options})
const customRender = setupWrapper(wrapper)

/**
 * Axe
 */

expect.extend(toHaveNoViolations)

const axeConfig = configureAxe({
    impactLevels: ['minor', 'moderate', 'serious', 'critical'],
})

const axeConfigComponent = {
    rules: {
        'region': {enabled: false}
    }
}

/**
 * Three
 */

global.ResizeObserver = require('resize-observer-polyfill')

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), 
        removeListener: jest.fn(), 
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

jest.mock('@/components/Experience/Debug', () => {
    return {
        default: () => <></>
    }
})

/**
 * Mocks
 */

jest.mock('next/head', () => function Head ({children}: {children?: React.ReactNode}) {
    return <>{children}</>
})

jest.mock('next/router', () => require('next-router-mock'))
mockRouter.locale = 'en'
mockRouter.route = '/'

jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn())

/**
 * Exports
 */

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export * from 'jest-axe'
export {
    userEvent,
    mockRouter,
    customRender as render,
    axeConfig as axe,
    axeConfigComponent,
}
