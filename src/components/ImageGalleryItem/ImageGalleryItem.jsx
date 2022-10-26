// import { Modal } from "components/Modal/Modal";
// import { useState } from "react";
import { ListItem, ListItemImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ src, alt, modalURL }) {
    
    // const [itemShowModal, setItemShowModal] = useState(false)

    // const toggleModal = () => { 
    //     setItemShowModal(previItemShowModal => { return !previItemShowModal })

        return (
            <ListItem>
            <ListItemImage src={src} alt={alt} />
                {/* {itemShowModal && <Modal><img src={modalURL} alt={alt} /></Modal>} */}
            </ListItem>);
    }

// onClick={toggleModal}