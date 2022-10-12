import { ButtonStl } from "./Button.styled"

export const Button = ({ updatePage }) => { 
    return (<ButtonStl type="button" onClick={updatePage}>Load more</ButtonStl>)
}