import { ListItem, ListItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ src, alt }) => {
    return (<ListItem>
        <ListItemImage src={src} alt={alt} />
    </ListItem>);
    
}