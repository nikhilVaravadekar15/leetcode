import React from 'react'
import ReactCodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'


export default function CodePlayground({ code }: { code: string }) {
    return (
        <ReactCodeMirror
            value={code}
            theme={sublime}
            height="100%"
            extensions={[javascript()]}
            style={{
                fontSize: 16
            }}
            className="w-full overflow-auto"
        />
    )
}
