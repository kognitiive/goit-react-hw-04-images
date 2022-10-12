import styled from "@emotion/styled";

export const ListItem = styled.li`
border-radius: 2px;
  box-shadow: 0px 8px 43px #45f3ff;
`;

export const ListItemImage = styled.img`
width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover{
    transform: scale(1.03);
  cursor: zoom-in;
  }`;