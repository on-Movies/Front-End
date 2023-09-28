import styled, {createGlobalStyle} from 'styled-components';
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';

export const StyledGlobal = createGlobalStyle`

    :root{
        --color-brand: #091B29;
        --color-secound: #0E2839;
        --color-white: #FFFFFF;
    }


    body{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        background-color: var(--color-brand);
        color: var( --color-white);
    }

    .titles{
        margin-left: 15px;
    }

    .buttonGlobal{
        border: none;
        background-color: var(--color-secound);
        color: var(--color-white);
        padding: 15px;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 25px;
        max-width: 150px;

        @media(min-width: 600px){
            background-color: var(--color-brand);
    }
    }

    .buttonFiltrar{
        border: none;
        background-color: var(--color-brand);
        color: var(--color-white);
        padding: 15px;
        border-radius: 50px;
        cursor: pointer;
        max-width: 150px;
        font-weight: bold;

        @media(min-width: 600px){
            background-color: var(--color-brand);
            font-weight: bold;
    }
    }
`;

export const RightArrow = styled(AiOutlineArrowRight)`

    padding: 10px;
    background-color: var(--color-secound);
    cursor: pointer;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
    padding: 10px;
    background-color: var(--color-secound);
    cursor: pointer;
`;