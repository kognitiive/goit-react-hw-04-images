import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { imagesAPI } from "services/images-api";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";

import { Container } from "./App.styled";


export default class App extends Component {
  state = {
    pictures: [],
    status:'idle',
    error: null,
    query: '',
    page: 1,
    pages: 1,
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) { this.setState({pictures: [] }) }
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      imagesAPI(this.state.query, this.state.page)
        .then(response => {
          console.log(response)
          if (response.data.total === 0) {
              this.setState({ status: 'rejected'})
                return Promise.reject(new Error(`We haven't any pictures for your query ${this.state.query}`))
          }
                     
          this.setState(prevState => ({
            status: 'resolved',
            pictures: [...prevState.pictures, ...response.data.hits],
          }))
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  updatePage = () => {
    this.setState(prevState => ( { page: prevState.page + 1 }))
  }

  handleFormSubmit = query => {
    this.setState({query, page: 1})
  }
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.status === 'idle'&& <div>Enter your query young padavan</div>}
        {this.state.pictures.length > 0 && <ImageGallery pictures={this.state.pictures} />}
        {this.state.status === 'pending' && <Loader/>}
        {this.state.pictures.length > 0 && <Button updatePage={this.updatePage} />}
        {this.state.status === 'rejected' && <div>We haven't any pictures for your query {this.state.query}</div>}
        <ToastContainer/>
      </Container>
    );
  } 
};
