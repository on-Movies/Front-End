import {styled} from 'styled-components';


export const StyledContainerSearcheBar = styled.form`

    position: relative;

`

export const StyledSearchBar = styled.input`

    border-radius: 15px;
    padding: 15px;
    border: none;
    width: 150px;
    z-index: 1;
    background-color: var(--color-brand);
    color: var(--color-white);

    @media(min-width: 550px){
        width: 350px;
    }

`;

export const SearchIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 2;
  background-color: var(--color-brand);
  border: none;
  cursor: pointer;
`;
