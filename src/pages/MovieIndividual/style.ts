import {styled} from 'styled-components';

export const StyledContainerIframe = styled.section`

    iframe{
        width: 100%;
        height: 350px;
        margin-top: 85px;
        
        @media(min-width: 621px){
            height: 600px;
            
        }
    }
`;

export const StyledContainerMovieSimilares = styled.section`
    max-width: 100%;
    padding: 15px;
    ul{
        width: 200px;
        
    }

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

`;