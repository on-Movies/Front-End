import {styled} from 'styled-components';

export const StyledSectionCastMovie = styled.section`

    max-width: 100%;
    padding: 15px;
    ul{
        width: 200px;
        
    }
        div{
          
            img{
                width: 180px;
                border-radius: 10px;
                height: 250px;
               
                cursor: pointer;
                

                &:hover{
                    transform: scale(1.1);
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                }
            }
            span{
                display: flex;
                flex-direction: column;
                font-weight: bold;
                
            }

        }
        
`;