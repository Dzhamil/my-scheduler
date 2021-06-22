import s from './Modal.module.css'
import React from "react";

const Modal = (props) => {
    let modalState = props.active ? s.activeModal + " " + s.modal : s.modal;
    let contentState = props.active ? s.activeContent + " " + s.content : s.content;

    return (
        <div className={modalState} onClick={() => props.setActive(false)}>
            <div className={contentState} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;