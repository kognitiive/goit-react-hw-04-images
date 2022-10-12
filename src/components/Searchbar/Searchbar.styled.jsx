import styled from "@emotion/styled";

export const SearchHeader = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #45f3ff;
  background-color: #1c1c1c;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color:  #1c1c1c;
  border-radius: 3px;
  overflow: hidden;
  
  border: 5px solid #45f3ff;`;
  

export const SearchFormButton = styled.button`
  display: inline-block;
  width: auto;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

padding: 5px 10px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #4548ff;
  
  &:hover{
    opacity: 1;
    color: #45f3ff;
  }`;

export const SearchFormButtonSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  color: #45f3ff;
  background-color: #1c1c1c;
  
  &::placeholder{
    color: #4548ff;
    font: inherit;
  font-size: 18px;
  }
  `;
  