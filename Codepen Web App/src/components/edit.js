import React, { useState } from 'react'
import { Controlled as CodeEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

export default function Editor(props) {
    const { displayLanguage, codeLanguage, code, onChange } = props

    function handleChange(editor, data, code) {
        onChange(code)
    }

    const [view, setView] = useState(true)
    
    return(
        <>
            <div className = { `code-container ${ view ? '' : 'collapsed' }` }>
                <div className = "code-title">
                    { displayLanguage }
                    <button className = "collapse-button" onClick = { () => setView(prev => !prev) }>
                        <FontAwesomeIcon icon = { view ? faCompressAlt : faExpandAlt } />
                    </button>
                </div>
                <CodeEditor onBeforeChange = { handleChange }
                            value = { code }
                            className = "code-wrapper"
                            options = {{ lineWrapping: true, lint: true, theme: 'material', mode: codeLanguage, lineNumbers: true }}
                />
            </div>
        </>
    )
}