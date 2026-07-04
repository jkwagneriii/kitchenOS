import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-background text-foreground font-sans min-h-screen flex flex-col items-center justify-center px-8 text-center">
          <p className="font-mono text-mono-sm uppercase tracking-widest text-accent mb-4">Error</p>
          <h1 className="text-hero mb-6">Something went wrong</h1>
          <p className="mono-upper text-muted mb-8 max-w-md">
            An unexpected error occurred. Reload the page to continue.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-block px-8 py-4 bg-accent text-white font-bold font-mono text-mono-body uppercase tracking-widest hover:bg-accent/80 transition-all duration-300 cursor-pointer"
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
