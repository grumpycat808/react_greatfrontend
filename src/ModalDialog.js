import React from 'react';
import './modal.css'
function ModalDialog({isOpen, title, content, closeModal}) {
    return (
        <div className={isOpen ? 'modal-container' : 'hidden'}>
            <div className='modal'><h1>{title}</h1>
            <p>{content}</p>
            <button onClick={closeModal}>Close</button></div>
            
        </div>
    );
}

export default ModalDialog;
