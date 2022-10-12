import { Component } from "react";

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Loader } from "components/Loader/Loader";

import { imagesAPI } from "services/images-api";
import { ImageList } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
    state = {
        status:'idle',
        error: null,
        pictures: [],
        }
    
    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.pictures !== this.props.pictures) { this.setState({pictures: [] }) }
        
         if (prevProps.pictures !== this.props.pictures || prevProps.page !== this.props.page) {
             this.setState({ status: 'pending' });

             imagesAPI(this.props.pictures, this.props.page)
                 .then(response => {
                     console.log(response)
                     if (response.data.total === 0) {
                         this.setState({ status: 'rejected'})
                         return Promise.reject(new Error(`We haven't any pictures for your query ${this.props.pictures}`))
                     }
                     
                     this.setState(state => ({
                         pictures: [...state.pictures, ...response.data.hits],
                         status: 'resolved'
                     }))
                 })
                 .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { error, pictures, status } = this.state

        if (status === 'idle') { return <div>Please enter query</div> }
        if (status === 'pending') { return <Loader/> }
        if (status === 'rejected') { return <div>{error.message}</div> }
        if (status === 'resolved') {
            return <ImageList>
                {pictures.map(({id, webformatURL, largeImageURL, tags}) => {
                    return (<ImageGalleryItem key={id} src={webformatURL} alt={tags} />)
                 })}
            </ImageList>}
    }
    
}