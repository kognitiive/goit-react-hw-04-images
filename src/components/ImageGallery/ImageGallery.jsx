import { Component } from "react";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


import { ImageList } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
    state = {
        showModal: false,
    }

    
    render() {
            return (<ImageList onClick={this.toggleModal}>
                {this.props.pictures.map(({id, webformatURL, largeImageURL, tags}) => {
                    return (<ImageGalleryItem key={id} src={webformatURL} alt={tags} modalURL={largeImageURL} />)
                 })}
        </ImageList>)
    };
    }