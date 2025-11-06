import { Component, ReactNode, ErrorInfo } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b1024] to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-card border border-border rounded-2xl p-8 shadow-premium-xl">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-lg text-muted-foreground">
                  We're sorry, but something unexpected happened. Our team has been notified.
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="text-left bg-muted/30 rounded-xl p-4 border border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Error Details:</p>
                  <pre className="text-xs text-muted-foreground overflow-auto max-h-40">
                    {this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleReset}
                  className="bg-action-blue hover:bg-action-blue/90 text-white px-8 py-3 rounded-xl shadow-[0_20px_55px_rgba(61,130,247,0.4)]"
                >
                  Reload Page
                </Button>
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="px-8 py-3 rounded-xl"
                >
                  Go to Homepage
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  If this problem persists, please{' '}
                  <a href="/contact" className="text-action-blue hover:underline">
                    contact our support team
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
