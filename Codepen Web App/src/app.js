import React, { useState, useEffect } from 'react'
import Editor from './components/edit'
import Storage from './hooks/storage'

function App() {
  const [html, setHtml] = Storage('html', '')
  const [css, setCss] = Storage('css', '')
  const [javascript, setJavascript] = Storage('javascript', '')
  const [document, setDocument] = useState()

  useEffect(() => {
    const interval = setTimeout(() => {
      setDocument(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
    }, 500)

    return () => clearTimeout(interval)
  }, [html, css, javascript])

  return (
    <>
      <div className = "page top-row">
        <Editor displayLanguage = "HTML" codeLanguage = "xml" code = { html } onChange = { setHtml }  />
        <Editor displayLanguage = "CSS" codeLanguage = "css" code = { css } onChange = { setCss }  />
        <Editor displayLanguage = "JS" codeLanguage = "javascript" code = { javascript } onChange = { setJavascript }  />
      </div>
      <div className = "page">
        <iframe title = "output-segment"
                srcDoc = { document }
                sandbox = "allow-scripts"
                frameBorder = "0"
                width = "100%"
                height = "100%"
        />
      </div>
    </>
  )
}

export default App