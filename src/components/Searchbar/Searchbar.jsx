import { useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BsSearch} from "react-icons/bs"

import { SearchHeader, SearchForm, SearchFormButton, SearchFormButtonSpan, SearchFormInput } from "./Searchbar.styled";

export default function Searchbar({onSubmit}) { 
    const [query, setQuery] = useState('')

    const handleQueryChange = e => { 
        setQuery(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => { 
        e.preventDefault()

        if (query.trim() === '') {
           return toast.error("Enter search name");
        }
        onSubmit(query)
        setQuery('');
    }

    return(
        <SearchHeader>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <BsSearch/><SearchFormButtonSpan>Search</SearchFormButtonSpan>
                </SearchFormButton>

                <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleQueryChange}
                        value={query}
                        name = "query"
                />
            </SearchForm>
        </SearchHeader>
    );
}
    
