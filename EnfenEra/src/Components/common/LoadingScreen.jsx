const LoadingScreen = ({ message = 'Loading...' }) => (
  <div className="loading-screen">
    <div style={{ position: 'relative' }}>
      <div style={{
        width: 60, height: 60, borderRadius: '50%',
        border: '3px solid var(--border-color)',
        borderTopColor: 'var(--brand-primary)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.25rem',
      }}>🐝</span>
    </div>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{message}</p>
  </div>
);

export default LoadingScreen;