function MainPanel() {
    return (
        <div className="app-main-panel">

          <button onClick={checkStatus} disabled={loading}>
            Check Status
          </button>
          <p>Status: {dbStatus}</p>
          <button onClick={handleLoad} disabled={loading}>
            {loading ? "Loading..." : 'Load Todos'}
          </button>

          {error && <p style={{color:'red'}}>Error: { error }</p>}

          <pre>{JSON.stringify(todos.slice(0,3), null, 2)}</pre>

        </div>
    )
}

export default MainPanel;