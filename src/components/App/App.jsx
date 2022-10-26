import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { imagesAPI } from "services/images-api";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";

import { Container } from "./App.styled";
// import { useRef } from "react";

export default function App() {
  const [pictures, setPictures] = useState([])
  const [status, setStatus] = useState('idle')
  // const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  // const isFirstRender = useRef(true)

  useEffect(() => {
    if (query === '') {
      return
    }
    setStatus('pending');
    imagesAPI(query, page)
      .then(response => {
        const pages = Math.ceil(response.data.totalHits / 12);
        if (response.data.total === 0) {
          setStatus('rejected')
          return Promise.reject(new Error(`We haven't any pictures for your query ${query}`))
        }
          
        setPages(pages)
        setStatus('resolved')
        
        setPictures(prevPictures => { return [...prevPictures, ...response.data.hits] })
          
      })
      .catch(error => {
        setStatus('rejected')
      });
  }, [query, page])

  const updatePage = () => {
    setPage(page + 1)
  }

  const handleFormSubmit = query => {
    setQuery(query)
    setPage(1)
    setPages(1)
    setPictures([])
  }

  return (
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
        {status === 'idle'&& <div>Enter your query young padavan</div>}
        {pictures.length > 0 && <ImageGallery newPictures={pictures} />}
        {status === 'pending'  && <Loader/>}
        {(pictures.length > 0 && page !== pages) && <Button updatePage={updatePage} />}
        {status === 'rejected' && <div>We haven't any pictures for your query {query}</div>}
        <ToastContainer/>
      </Container>
    );
}
