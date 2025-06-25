import { useState, useCallback } from 'react'
import './App.css'
import './index.css'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import CodeMirror from "@uiw/react-codemirror"
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'

function App() {
  const [html_edit, setHtmlEdit] = useState('');
  const [css_edit, setCssEdit] = useState('');
  const [js_edit, setJsEdit] = useState('');

  const onchangehtml = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  const onchangecss = useCallback((value) => {
    setCssEdit(value);
  }, []);

  const onchangejs = useCallback((value) => {
    setJsEdit(value);
  }, []);

const srcCode = 
  `<html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>`
  return (
    <div>
      <Navbar />
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="p-4 rounded-lg shadow bg-pink-500">
            <h2 className="text-lg font-semibold mb-2 text-white"><SiHtml5/>HTML</h2>
            <CodeMirror
              className="text-xl border-black border"
              value={html_edit}
              height="342px"
              theme="light"
              extensions={[html()]}
              onChange={onchangehtml}
            />
          </div>

          <div className="p-4 rounded-lg shadow bg-pink-500">
            <h2 className="text-lg font-semibold mb-2 text-white">< SiCss3/>CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="light"
              extensions={[css()]}
              onChange={onchangecss}
            />
          </div>

          <div className="p-4 rounded-lg shadow bg-pink-500">
            <h2 className="text-lg font-semibold mb-2 text-white">< SiJavascript/>javascript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="light"
              extensions={[javascript()]}
              onChange={onchangejs}
            />
          </div>
        </div>
      </div>
      <Header srcCode={srcCode}/>
    </div>
  )
}

export default App
