import React, { useEffect } from "react";
import { Overlay, ModalStl } from "./Modal.styled";

export function Modal({ onClose, children }) { 
    const addToggleOnEsc = e => {
        if (e.code === 'Escape') {
            onClose();
        } 
    }
    
    useEffect(() => { 
        window.addEventListener('keydown', addToggleOnEsc)
        return () => {window.removeEventListener('keydown', addToggleOnEsc) } 
    })

    return (
        <Overlay>
            <ModalStl>{children}</ModalStl>
        </Overlay>
    )
}