import React from 'react'
import {default as ErrorComponent} from '@/components/Error'
import getMessages from '@/utils/messages'

type Props = {
    children?: React.ReactNode
}

type State = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError (): State {
        return {hasError: true}
    }

    public componentDidCatch () {
        // error: Error, errorInfo: ErrorInfo
        // console.log('Uncaught error:', error, errorInfo)
    }

    public render () {
        if (this.state.hasError) {
            return <ErrorComponent messages={getMessages()} />
        }

        return this.props.children
    }
}

export default ErrorBoundary