import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

import { ImageList } from "./ImageGallery.styled";

export default function ImageGallery({newPictures}) {
    return (<ImageList>
        {newPictures.map(({id, webformatURL, largeImageURL, tags}) => {
                    return (<ImageGalleryItem key={id} src={webformatURL} alt={tags} modalURL={largeImageURL} />)
                 })}
        </ImageList>)
}