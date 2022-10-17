import React, { Component } from "react";
import { Overlay, ModalStl } from "./Modal.styled";

export class Modal extends Component { 
    componentDidMount() {
        window.addEventListener('keydown', this.addToggleOnEsc)
     }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.addToggleOnEsc)
     }

    addToggleOnEsc = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
        
     }

    render() { 
        return (
            <Overlay>
                <ModalStl>{this.props.children}</ModalStl>
            </Overlay>
        )
    }
}