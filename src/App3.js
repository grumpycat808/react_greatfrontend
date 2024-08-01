import { useState } from 'react'
import './styles.css'

export default function App() {
    const content = {
        html: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
        css: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
        javascript:
            'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    }
    const [selected, setSelected] = useState('html')

    return (
        <div>
            <div>
                {Object.keys(content).map((key) => {
                    return (
                        <button
                            className={selected === key ? 'active' : ''}
                            onClick={() => setSelected(key)}
                        >
                            {key}
                        </button>
                    )
                })}
            </div>
            <div>
                <p>{content[selected]}</p>
            </div>
        </div>
    )
}
