import { useState } from "react"
import { CodePanel } from "./CodePanel"
import { useCodeUrl, useWorkflow } from "./store"
import { VisualPanel } from "./VisualPanel"

type ITab = 'code' | 'visual'

export const WorkflowPanel = () => {
    const [tab, setTab] = useState<ITab>('visual')
    const {loadWorkflow} = useWorkflow();
    const selectedPanel = tab === 'visual' ? <VisualPanel /> : <CodePanel />
    const visualTabStyle = { fontWeight: tab === 'visual' ? 'bold' : 'normal' }
    const codeTabStyle = { fontWeight: tab === 'code' ? 'bold' : 'normal' }
    const url = useCodeUrl()

    async function uploadWorkflow() {
        // TODO compatible with non-Chrome browsers
        const [fileHandle] = await (window as any).showOpenFilePicker({
            muliple: false
        });
        const file: File = await fileHandle.getFile()
        debugger
        const text = await file.text()
        loadWorkflow(text)
    }
    return (
        <fieldset>
            <legend>Workflow</legend>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'column', height: '90vh' }}>
                <div>
                    <div>
                        <button className="btn btn-light" style={visualTabStyle} onClick={() => setTab('visual')}>Visual</button>
                        <button className="btn btn-light" style={codeTabStyle} onClick={() => setTab('code')}>Code</button>
                    </div>
                    <button className="btn btn-link" onClick={uploadWorkflow}>Upload</button>
                    {selectedPanel}
                </div>
                <a className="btn btn-primary" href={url} download="workflow.cfg">Download</a>
            </div>
        </fieldset>
    )
}