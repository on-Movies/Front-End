import {styled} from 'styled-components';


export const StyledContainerMovieHighlight = styled.section`

    position: relative;
    max-width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;

    @media(min-width: 600px){
        background-color: var(--color-secound);
        border-radius: 25px;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    
        gap: 15px;

        h3{
            left: 16%;
            
        }
        
    }
    @media(min-width: 1000px){
        width: 75%;
    }

    h3{
        position: absolute;
        top: 0%;
    }

    .box1{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
       

        button{
            width: 250px;
            cursor: pointer;
        }

        @media(min-width: 600px){
            
            display: flex;
            align-items:baseline;
            
            align-items: center;
            width: 550px;
            
            p{
                line-height: 20px;
            }
        
        }
    }

    .box2{
        max-width: 100%;
       margin-top: 45px;
        display: flex;
        justify-content: center;

        img{
            width: 250px;
            border-radius: 30px;
            cursor: pointer;
        }
    }

`