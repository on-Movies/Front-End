import {styled} from 'styled-components';


export const StyledMovieFilterContainer = styled.ul`

    margin-top: 50px;
    max-width: 100%;
    padding-left:15px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    li{
        list-style: none;
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
    }

`;


export const StyledCleanFilter = styled.div`

    max-width: 90%;
    height: 50px;
    padding: 5px;
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background-color: var(--color-secound);
    }

    div{
        display: flex;
        gap: 10px;

        button{
            display: inline;
            border: none;
            padding: 15px;
            cursor: pointer;
            border-radius: 50px;
            color: var(--color-white);
            background-color: var(--color-brand);
        }

        button:hover{
            background-color: var(--color-secound);
            border-radius: 15px;
        }
    }
`;