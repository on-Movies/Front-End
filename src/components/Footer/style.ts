import {styled} from 'styled-components';

export const StyledFooter = styled.footer`

    max-width: 100%;
    padding: 15px;
    background-color: var(--color-secound);
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(min-width: 768px){
        flex-direction: row;
        align-items: center;
    }

    .box1{
        max-width: 90%;
        display: flex;
        padding: 5px;
        gap: 25px;
        align-items: center;

        img{
            width: 80px;
            border-radius: 50px;
            cursor: pointer;
        }
    }

    .box2{
        max-width: 90%;
        display: flex;
        padding: 5px;
        display: flex;
        list-style: none;
        justify-content: space-around;

        li{
            cursor: pointer;
            a{
                color: inherit;
            }
        }

        @media(min-width: 768px){
            width: 30%;

            li{
                max-width: 100%;
                cursor: pointer;
       }
    }
    }
`;