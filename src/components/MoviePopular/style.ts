import {styled} from 'styled-components';

export const StyledContainerFilmsPopulars = styled.section`

    margin-top: 50px;
    max-width: 100%;
    padding-left:15px;
    display: flex;
    flex-direction: column;
    ul{
        width: 160px;
        
    }

        img{
            width: 150px;
            border-radius: 10px;
            height: 250px;
            cursor: pointer;
            &:hover{
                transform: scale(1.1);
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
        }
`

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

