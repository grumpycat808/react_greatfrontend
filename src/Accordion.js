import { useState } from 'react'
import './accordion-styles.css'
export default function Accordion() {
    const [activeTab, setActiveTab] = useState('')

    const handleClick = (tab) => {
        tab === activeTab ? setActiveTab('') : setActiveTab(tab)
    }
    return (
        <div>
            <div>
                <div onClick={() => handleClick('html')}>
                    HTML{' '}
                    <span
                        aria-hidden={true}
                        className={
                            activeTab === 'html'
                                ? 'accordion-icon accordion-icon--rotated'
                                : 'accordion-icon'
                        }
                    />
                </div>
                <div className={activeTab === 'html' ? '' : 'hidden'}>
                    The HyperText Markup Language or HTML is the standard markup
                    language for documents designed to be displayed in a web
                    browser.
                </div>
            </div>
            <div>
                <div onClick={() => handleClick('css')}>
                    CSS{' '}
                    <span
                        aria-hidden={true}
                        className={
                            activeTab === 'css'
                                ? 'accordion-icon accordion-icon--rotated'
                                : 'accordion-icon'
                        }
                    />
                </div>
                <div className={activeTab === 'css' ? '' : 'hidden'}>
                    Cascading Style Sheets is a style sheet language used for
                    describing the presentation of a document written in a
                    markup language such as HTML or XML.
                </div>
            </div>
            <div>
                <div onClick={() => handleClick('javascript')}>
                    JavaScript{' '}
                    <span
                        aria-hidden={true}
                        className={
                            activeTab === 'javascript'
                                ? 'accordion-icon accordion-icon--rotated'
                                : 'accordion-icon'
                        }
                    />
                </div>
                <div className={activeTab === 'javascript' ? '' : 'hidden'}>
                    JavaScript, often abbreviated as JS, is a programming
                    language that is one of the core technologies of the World
                    Wide Web, alongside HTML and CSS.
                </div>
            </div>
        </div>
    )
}
