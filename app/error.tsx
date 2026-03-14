'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: 40, color: 'white', background: '#0A0A0B', minHeight: '100vh' }}>
      <h2 style={{ fontSize: 24, marginBottom: 16 }}>Something went wrong</h2>
      <pre style={{ color: '#E8600A', whiteSpace: 'pre-wrap', marginBottom: 16, fontSize: 14 }}>
        {error.message}
      </pre>
      <pre style={{ color: '#888', fontSize: 11, whiteSpace: 'pre-wrap', maxHeight: 300, overflow: 'auto', marginBottom: 24 }}>
        {error.stack}
      </pre>
      <button
        onClick={reset}
        style={{ padding: '8px 24px', background: '#E8600A', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
      >
        Try again
      </button>
    </div>
  )
}
