import {styled} from 'styled-components';

export const StyledContainerFilmsCategories = styled.section`

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

