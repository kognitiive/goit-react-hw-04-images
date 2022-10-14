import React, { Component } from "react";
import { Overlay, ModalStl } from "./Modal.styled";

export class Modal extends Component { 
    componentDidMount() { }

    componentWillUnmount() { }

    render() { 
        return (
            <Overlay>
                <ModalStl>{this.props.children}</ModalStl>
            </Overlay>
        )
    }
}