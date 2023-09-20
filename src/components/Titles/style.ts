import {styled} from 'styled-components';

export const StyledTitlesContainer = styled.div`

    max-width: 100%;
    height: 35px;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    ul.pagination {
        display: inline-block;
       
        display: flex;
        padding: 0px;
        width: 70px;
    }

    ul.pagination li {
        display: inline;
        padding: 15px;
        cursor: pointer;
    }

    ul.pagination li:hover {
        background-color: var(--color-secound);
        border-radius: 15px;
    }

   

`