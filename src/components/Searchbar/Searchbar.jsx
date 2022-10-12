import { Component } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BsSearch} from "react-icons/bs"

import { SearchHeader, SearchForm, SearchFormButton, SearchFormButtonSpan, SearchFormInput } from "./Searchbar.styled";

export default class Searchbar extends Component {
    state = {
        query: '',
    }

    handleQueryChange = e => { 
        this.setState({ query: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => { 
        e.preventDefault()

        if (this.state.query.trim() === '') {
           return toast.error("Enter search name");
        }
        this.props.onSubmit(this.state.query)
        this.setState({ query: '' });
    }
    render() {
        return (
            <SearchHeader>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <BsSearch/><SearchFormButtonSpan>Search</SearchFormButtonSpan>
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleQueryChange}
                        value={this.state.query}
                        name = "query"
                    />
                </SearchForm>
            </SearchHeader>
        );
} 
}