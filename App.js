import  React, { useState } from 'react'
import Editor from "./Editor"

function App() {
const [html, sethtml] = useState('')
const [css, setcss] = useState('')
const [javascript, setjs] = useState('')


const srcDoc=
  <html>
    <body>{html}</body>
    <style>{css}</style>
    <script>{javascript}</script>
  </html>
 return (
    <>
    <div className="pane top-pane">
    <Editor 
    displayName="HTML" 
    language="xml"
    value={html}
    onChange={sethtml}
    />
    <Editor 
    displayName="CSS" 
    language="css"
    value={css}
    onChange={setcss}/>
    <Editor 
    displayName="JAVASCRIPT" 
    language="javascript"
    value={javascript}
    onChange={setjs}/>
    </div>
    <div className="pane">
    <iframe
    srcDoc={srcDoc}
    title="output"
    sandbox="allow-scripts"
    width ="100%"
    height="100%"></iframe>
    </div>
    </>
  );

}


export default App;
