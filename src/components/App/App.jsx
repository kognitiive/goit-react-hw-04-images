import { Component } from "react";
import { ToastContainer } from "react-toastify";

import Searchbar from "components/Searchbar/Searchbar";
import  ImageGallery from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";

import { Container } from "./App.styled";

export default class App extends Component {
  state = {
    query: '',
    page: 0,
    pages: 1,
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
        <Searchbar onSubmit={ this.handleFormSubmit} />
        <ImageGallery pictures={this.state.query} page={this.state.page} />
        { this.state.page !== 0 && <Button updatePage={this.updatePage} />}
        <ToastContainer/>
    </Container>
  ); } 
};
